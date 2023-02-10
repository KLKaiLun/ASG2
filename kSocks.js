window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  })


const productContainer = document.getElementById('product-container');
  
fetch("https://kclothes-1417.restdb.io/rest/product", {
  headers: {
    "x-apikey": "63dd35e73bc6b255ed0c460e"
  }
})
  .then(response => response.json())
  .then(products => {
    for (const product of products) {
        if (product.Subcategory === "Socks" && product.Category === "Kids") {  
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.classList.add('product-image');
            productImage.src = product.Image;

            const productName = document.createElement('div');
            productName.classList.add('product-name');
            productName.innerText = product.Name;

            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.innerText = '$' + product.Price;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productContainer.appendChild(productCard);
        }
    }
  })
  .catch(error => console.error(error));
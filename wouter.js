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
        if (product.Subcategory === "Outerwear" && product.Category === "Women") {  
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
  
          const productImage = document.createElement("img");
          productImage.classList.add("product-image");
          productImage.src = "data:image/jpeg;base64," +product.Image;
  
          const productName = document.createElement("div");
          productName.classList.add("product-name");
          productName.innerText = product.Name;
  
          const productDescription = document.createElement("div");
          productDescription.classList.add("product-description");
          productDescription.innerText = product.Description;
  
          const productSize = document.createElement("div");
          productSize.classList.add("product-size");
          productSize.innerText = "Size:" + product.Size;
  
          const productCategory = document.createElement("div");
          productCategory.classList.add("product-category");
          productCategory.innerText = product.Category;
  
          const productPrice = document.createElement("div");
          productPrice.classList.add("product-price");
          productPrice.innerText = "$" + product.Price;
  
          const addToCartButton = document.createElement("button");
          addToCartButton.innerText = "Add to cart";
          addToCartButton.addEventListener("click", () => {
            shoppingCart.addItem({
              id: product._id,
              name: product.Name,
              description: product.Description,
              size: product.Size,
              category: product.Category,
              price: product.Price,
              image: product.Image
            });
          });
  
          productCard.appendChild(productImage);
          productCard.appendChild(productName);
          productCard.appendChild(productDescription);
          productCard.appendChild(productSize);
          productCard.appendChild(productCategory);
          productCard.appendChild(productPrice);
          productCard.appendChild(addToCartButton);
            productContainer.appendChild(productCard);
        }
    }
  })
  .catch(error => console.error(error));
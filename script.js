window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    })

var jsondata = {"Name": "xyz","Price": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://kclothes-1417.restdb.io/rest/product",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63dd35e73bc6b255ed0c460e",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax({
    method: "POST",
    url: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452425/item/goods_32_452425.jpg?width=750",
    data: {Name: "Regular Collar Polo Shirt", Price: "$50"}
})

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://kclothes-1417.restdb.io/rest/product",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63dd35e73bc6b255ed0c460e",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    })


/*
var db = new restdb("63dd35e73bc6b255ed0c460e", settings);
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

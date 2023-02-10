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
*/

// Make an AJAX request to the database API
/*$.ajax({
  url: "https://kclothes-1417.restdb.io/rest/product",
  method: "GET",
  headers: {
    "x-apikey": "63dd35e73bc6b255ed0c460e"
  }
}).done(function(data) {
  // If the request is successful, data will contain the array of objects returned from the database
  
  // Loop through each object in the data array
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    
    // Create a new HTML element to represent the data
    var el = $("<div>").text(JSON.stringify(item));
    
    // Append the new element to the HTML document
    $("body").append(el);
  }
}); */



/*$.ajax({
  url: "https://kclothes-1417.restdb.io/rest/product",
  method: "GET",
  headers: {
    "x-apikey": "63dd35e73bc6b255ed0c460e"
  }
}).done(function(data) {
  // If the request is successful, data will contain the array of objects returned from the database
  
  // Loop through each object in the data array
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    
    // Check if the subcategory property of the object is "Outerwear"
    if (item.Subcategory === "Outerwear") {
      // Create a new HTML element to represent the data
      var el = $("<div>").text(JSON.stringify(item.Name));
      

      // Append the new element to the HTML document
      $("body").append(el);
    }
  }
});*/

$.ajax({
  url: "https://kclothes-1417.restdb.io/rest/product",
  method: "GET",
  headers: {
    "x-apikey": "63dd35e73bc6b255ed0c460e"
  }
}).done(function(data) {
  // If the request is successful, data will contain the array of objects returned from the database
  
  // Loop through each object in the data array
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    

      // Create a new HTML element to represent the data
      var el = $("<img>").attr("src", 'https://kclothes-1417.restdb.io/media/'+item.Image);
      
      // Append the new element to the HTML document
      $("body").append(el);
  }
});


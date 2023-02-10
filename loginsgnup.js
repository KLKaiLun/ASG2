$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  function getUsers(limit = 10, all = true) {
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://kclothes-1417.restdb.io/rest/useraccounts",
      "method": "GET", //we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": "63dd35e73bc6b255ed0c460e",
        "cache-control": "no-cache"
      },
    }
  }

  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

$("#submit").on("click", function (e) {
  e.preventDefault();
  let UserFirstName = $("#user-firstname").val();
  let UserLastName = $("#user-lastname").val();
  let UserEmail = $("#user-email").val();
  let UserPassword = $("#user-password").val();
  let jsondata = {
    "firstname": UserFirstName,
    "lastname": UserLastName,
    "email": UserEmail,
    "password": UserPassword
  };

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://kclothes-1417.restdb.io/rest/useraccounts",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63dd35e73bc6b255ed0c460e",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata),
    "beforeSend": function(){
      $("#submit").prop("disabled",true);
      $("#signup").trigger("reset");
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#submit").prop("disabled",false);
    getUsers();
  });
});

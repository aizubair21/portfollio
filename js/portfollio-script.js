
$(function () {
  $("#aboutUs").css("display","block");

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    $(".nav-link").removeClass("active");

    $(this).addClass("active");

  });


});

function openTabContent(tabContent) {
   $(".tab-content").css("display","none");
     if (tabContent === "home") {
      
       $("#home").css("display","block");
     }else if (tabContent === "aboutUs") {
      $("#aboutUs").css("display","block");
     }else if (tabContent === "portfollio") {
      $("#portfollio").css("display","block");
     } else if (tabContent === "testimonial") {
       $("#testimonial").css("dispaly", "block");
     } else if (tabContent === "contact") {
       $("#contact").css("display","block");
     } else {
      $("#home").css("display","block");
     }

     
  };

$(function () {
  $("#testimonial").removeClass("go_to_back");
  $("#home").addClass("current_position");

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    $(".nav-link").removeClass("active");

    $(this).addClass("active");

  });


});

function openTabContent(tabContent) {
    $(".tab-content").removeClass("current_position");
    $(".tab-content").addClass("go_to_back");
    let tab_content = $(".tab-content");
    for (let index = 0; index <= tab_content.length; index++) {
      const element = tab_content[index];
      console.log(element);
      
    }


    
    
     if (tabContent == "home") {
      $("#home").removeClass("go_to_back");
      $("#home").addClass("current_position");

     }else if (tabContent == "aboutUs") {
      $("#aboutUs").removeClass("go_to_back");
      $("#aboutUs").addClass("current_position");

     }else if (tabContent == "portfollio") {
      $("#portfollio").removeClass("go_to_back");
      $("#portfollio").addClass("current_position");

     } else if (tabContent == "testimonial") {
      $("#testimonial").removeClass("go_to_back");
       $("#testimonial").addClass("current_position");

     } else if (tabContent == "contact") {
      $("#contact").removeClass("go_to_back");
       $("#contact").addClass("current_position");

     } else {
      $("#home").css("display","block");
     }

     
  };


$(document).ready(function () {

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

  });
  
 $("#portfollio_lignbox_image").magnificPopup ({
   delegate: "a",
   type: "image",
 });
//  $(".skill_bar_details").css("display","block");
//  function openTab(key) {
//    $(".skill_bar_details").hide();
//    if (key=="html") {
//      $(".skill_bar_details").hide();
//      $("#html_des").show();
//    }else if (key == "css") {
//      $(".skill_bar_details").hide();
//      $("#css_des").show();
//    } else if (key === "js") {
//      $(".skill_bar_details").hide();
//      $("#js_des").show();
//    } else if (key == "php") { 
//      $(".skill_bar_details").hide();
//      $("#php_des").show();
//    } else {
//      $(".skill_bar_details").hide();
//      $("#html_des").show();
//    }
//  }
 

});
// function openTabContent(tabContent) {
//     $(".tab-content").removeClass("current_position");
//     $(".tab-content").addClass("go_to_back");
//     let tab_content = $(".tab-content");
//     for (let index = 0; index <= tab_content.length; index++) {
//       const element = tab_content[index];
//       console.log(element);
      
//     }

//      if (tabContent == "home") {
//       $("#home").removeClass("go_to_back");
//       $("#home").addClass("current_position");

//      }else if (tabContent == "aboutUs") {
//       $("#aboutUs").removeClass("go_to_back");
//       $("#aboutUs").addClass("current_position");

//      }else if (tabContent == "portfollio") {
//       $("#portfollio").removeClass("go_to_back");
//       $("#portfollio").addClass("current_position");

//      } else if (tabContent == "testimonial") {
//       $("#testimonial").removeClass("go_to_back");
//        $("#testimonial").addClass("current_position");

//      } else if (tabContent == "contact") {
//       $("#contact").removeClass("go_to_back");
//        $("#contact").addClass("current_position");

//      } else {
//       $("#home").css("display","block");
//      }

     
//   };

  function filterItem($elemeent_name) {
  };

function openNavButton () {
  $(".nav_item").css({"left":"0px"});
};

function closeNavButton() {
  $(".nav_item").css({"left":"-100%"})
}

$("#particles-js")
  .particles()
  .init(
    {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          grab: {
            distance: 150,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#dd8d31",
        },
        links: {
          color: "#dd8d31",
          distance: 80,
          enable:true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",//none, row, colums
          enable: true,
          outMode: "bounce",//bounce, 
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 500,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "triangle",
          /* rect, squre, circle, triangle, oval*/
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: false,
    },
 
  );


// document.getElementsByClassName("skill_bar_details").classLIst.add("hide");

tabcontent = document.getElementsByClassName("tabcontent")[0].style.display = "block";
/*sillbar slider*/
function openTab(cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  // evt.currentTarget.className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var a,b;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (a = 0; a < slides.length; a++) {
      slides[a].style.display = "none";
  }
  for (b = 0; b < dots.length; b++) {
      dots[b].className = dots[b].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
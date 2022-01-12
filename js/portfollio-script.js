
$(function () {
  // $("#home").removeClass("go_to_back");
  // // $("#home").addClass("current_position");

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

  });
  
 $("#portfollio_lignbox_image").magnificPopup ({
   delegate: "a",
   type: "image",
 });

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

console.log(document.getElementsByClassName("nav_item"))

$("#tsparticles")
  .particles()
  .init(
    {
      background: {
        color: {
          value:0,
        },
      },
      fpsLimit: 100,
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
        // move: {
        //   enable: true,
        //   speed: 5,
        //   direction: "none",
        //   random: false,
        //   straight: false,
        //   out_mode: "out",
        //   bounce: false,
        //   attract: {
        //     enable: false,
        //     rotateX: 600,
        //     rotateY: 1200
        //   }
        // },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
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
      detectRetina: true,
    },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
  );
// or

$("#tsparticles")
  .particles()
  .ajax("particles.json", function (container) {
    // container is the particles container where you can play/pause or stop/start.
    // the container is already started, you don't need to start it manually.
  });
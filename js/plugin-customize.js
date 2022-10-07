//# sourceMappingURL=jquery.particles.min.js.map
// (function(tsparticles){"use strict";$.fn.particles=function(){var _this=this;var baseId="tsparticles";var init=function init(options,callback){_this.each(function(index,element){if(element.id===undefined){element.id=baseId+Math.floor(Math.random()*1e3)}tsparticles.tsParticles.load(element.id,options).then(callback)})};var ajax=function ajax(jsonUrl,callback){_this.each(function(index,element){if(element.id===undefined){element.id=baseId+Math.floor(Math.random()*1e3)}tsparticles.tsParticles.loadJSON(element.id,jsonUrl).then(callback)})};return{init:init,ajax:ajax}}})(window);




// $("#particles-js")
// .particles()
// .init(
//   {
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,  
//           mode: "push",
//         },  
//         onHover: {
//           enable: true,  
//           mode: "grab",
//         },  
//         resize: true,
//       },  
//       modes: {
//         bubble: {
//           distance: 400,  
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//         },  
//         grab: {
//           distance: 150,  
//           line_linked: {
//             opacity: 1  
//           }  
//         },  
//         bubble: {
//           distance: 800,  
//           size: 80,
//           duration: 2,
//           opacity: 0.8,
//           speed: 3
//         },  
//         push: {
//           quantity: 4,  
//         },  
//         repulse: {
//           distance: 200,  
//           duration: 0.4,
//         },  
//       },  
//     },  
//     particles: {
//       color: {
//         value: "#dd8d31",  
//       },  
//       links: {
//         color: "#dd8d31",  
//         distance: 80,
//         enable:true,
//         opacity: 0.9,
//         width: 1,
//       },  
//       collisions: {
//         enable: true,  
//       },  
//       move: {
//         direction: "none",//none, row, colums  
//         enable: true,
//         outMode: "bounce",//bounce, 
//         random: true,
//         speed: 0,
//         straight: false,
//       },  
//       number: {
//         density: {
//           enable: true,  
//           area: 500,
//         },  
//         value: 70,
//       },  
//       opacity: {
//         value: 0.5,  
//       },  
//       shape: {
//         type: "triangle",  
//         /* rect, squre, circle, triangle, oval*/
//       },  
//       size: {
//         random: false,  
//         value: 5,
//       },  
//     },  
//     detectRetina: false,
//   },  

// );  



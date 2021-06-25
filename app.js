var audio1 = new Audio("sounds/1.wav");
var audio2 = new Audio("sounds/2.wav");
var audio3 = new Audio("sounds/3.wav");
var audio4 = new Audio("sounds/4.wav");
var audio5 = new Audio("sounds/5.wav");
var audio6 = new Audio("sounds/6.wav");
var audio7 = new Audio("sounds/7.wav");
var audio8 = new Audio("sounds/8.wav");
var audio9 = new Audio("sounds/9.wav");
var audio = new Audio("sounds/Imagine Dragons - Believer.mp3");




document.getElementById('demo1').onclick = function haha() {
    audio1.play();
    audio1.currentTime = 0;
}

document.getElementById('demo2').onclick = function hello() {
    audio2.play();
    audio2.currentTime = 0;
}
document.getElementById('demo3').onclick = function hehe() {
    audio3.play();
    audio3.currentTime = 0;
}
document.getElementById('demo4').onclick = function audio() {
    audio4.play();
    audio4.currentTime = 0;
}
document.getElementById('demo5').onclick = function ring() {
    audio5.play();
    audio5.currentTime = 0;
}
document.getElementById('demo6').onclick = function drum() {
    audio6.play();
    audio6.currentTime = 0;
}
document.getElementById('demo7').onclick = function changeContent() {
    audio7.play();
    audio7.currentTime = 0;
}

document.getElementById('demo8').onclick = function playSound() {
    audio8.play();
    audio8.currentTime = 0;
}

document.getElementById('demo9').onclick = function a() {
    audio9.play();
    audio9.currentTime = 0;
}



// document.getElementById('play').onclick = function abc() {
//     audio.play();
//     // audio.currentTime = 0;

//     document.getElementById('play').onclick = function abc() {
//         audio.pause();
//         // audio.currentTime = 0;

//         document.getElementById('play').onclick = function abc() {
//             audio.play();
//             // audio.currentTime = 0;

//             document.getElementById('play').onclick = function abc() {
//                 audio.pause();
//                 // audio.currentTime = 0;
//             }
//         }
        
//     }
// }

// var clicked = false;

// function myFunction() {
//    var element = document.getElementById('play');
  
//   if (element.click()) {
//       audio.play();
//   } 
  
//   else {
//     audio.pause();
//   }
// }




// window.addEventListener('load', (event) => {
//     var audio = new Audio("sounds/Imagine Dragons - Believer.mp3");
//     // audio.play();
//     audio.currentTime = 0;
//   });






// document.getElementById('play').onclick = function abc() {
//     audio.play();
//     // audio.currentTime = 0;

//     document.getElementById('play').onclick = function abc() {
//         audio.pause();
//         // audio.currentTime = 0;
//     }
// }





var clicked = false;

function myFunction() {
  var element = document.getElementById('play');
  if (clicked) {
    clicked = false;
    audio.pause();
  } else {
    clicked = true;
    audio.play();
  }
}


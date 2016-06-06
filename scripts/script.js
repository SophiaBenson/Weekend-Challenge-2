console.log("bird is primed and ready");
var classJ;
var classIndex = 0;
// var classSwitch;
$(document).ready(function() {
  $('#ajaxButton' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
          classJ = data;
          takeOff();//call functions
          // loadPicture();
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button
function takeOff(){
console.log("picture loaded");
$('#header').append("<p>Nu Cohort</p>");
  // $('#buttons').append("<div id='newDiv'><p id='Classmate'></p><button id='previousButton' >Previous Classmate</button><button id='nextButton' >Next Classmate</button></div>");
  $('#classmateHolder').text(classJ.students[classIndex].first_name + " " + classJ.students[classIndex].last_name);
  $('#classmateInfo').text(classJ.students[classIndex].city + " " + classJ.students[classIndex].shoutout);
$('#currentClassmate').text(Number(classIndex + 1) + "/20 Newbs");
}
//next classmate button function
// $('#nextButton').click(function(){
// console.log("next button clicked");
// // if (classIndex == classJ.students.length - 1){classIndex = -1;}
// //   classIndex++;
// //   takeOff();
// });
// });

// $('#nextButton').click(function() {
//
//   // $('#imgClassmate').fadeOut(1000, function() {
//     // if (classIndex == classJ.students.length-1) {classIndex = -1;}
//     // $('#newDiv').remove();
//     // slideShowDirection = "next";
//     // classIndex++;
//     // clearTimeout(timer);
//     takeOff();
// console.log("next button clicked");
//   });


$('#nextButton').click(function(){
  console.log("next button clicked");
  if (classIndex == classJ.students.length - 1){classIndex = -1;}
  $('#newDiv').remove();
  $('#header').remove();
    classIndex++;
  takeOff();
});
$('#previousButton').click(function(){
  console.log("previous button clicked");
  if (classIndex == 0) {classIndex = classJ.students.length;}
  $('#newDiv').remove();
  $('#header').remove();
    classIndex--;
  takeOff();
});
});
// classSwitch =

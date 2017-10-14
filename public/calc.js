$('#clear').click(function(e) {
  $('#display').text("");
});

$('#0').click(function(e) {
  if (e.target.id === 0); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 0;
    $('#display').text(currentDisplay);
  }
});
$('#1').click(function(e) {
  if (e.target.id === 1); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 1;
    $('#display').text(currentDisplay);
  }
});
$('#2').click(function(e) {
  if (e.target.id === 2); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 2;
    $('#display').text(currentDisplay);
  }
});
$('#3').click(function(e) {
  if (e.target.id === 3); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 3;
    $('#display').text(currentDisplay);
  }
});
$('#4').click(function(e) {
  if (e.target.id === 4); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 4;
    $('#display').text(currentDisplay);
  }
});
$('#5').click(function(e) {
  if (e.target.id === 5); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 5;
    $('#display').text(currentDisplay);
  }
});
$('#6').click(function(e) {
  if (e.target.id === 6); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 6;
    $('#display').text(currentDisplay);
  }
});
$('#7').click(function(e) {
  if (e.target.id === 7); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 7;
    $('#display').text(currentDisplay);
  }
});
$('#8').click(function(e) {
  if (e.target.id === 8); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 8;
    $('#display').text(currentDisplay);
  }
});
$('#9').click(function(e) {
  if (e.target.id === 9); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 9;
    $('#display').text(currentDisplay);
  }
});

$('#add').click(function(e) {
  var currentDisplay = $('#display').text();
  currentDisplay += " + ";
  $('#display').text(currentDisplay);
});
$('#subtract').click(function(e){
  var currentDisplay = $('#display').text();
  currentDisplay += " - ";
  $('#display').text(currentDisplay);
});
$('#multiply').click(function(e){
  var currentDisplay = $('#display').text();
  currentDisplay += " * ";
  $('#display').text(currentDisplay);
});
$('#divide').click(function(e){
  var currentDisplay = $('#display').text();
  currentDisplay += " / ";
  $('#display').text(currentDisplay);
});
$('#decimal').click(function(e){
  var currentDisplay = $('#display').text();
  currentDisplay += ".";
  $('#display').text(currentDisplay);
});

$('#sqRoot').click(function(e){
  var currentDisplay = $('#display').text();
  currentDisplay += " √ ";
  $('#display').text(currentDisplay);
});

$('#equals').click(function(e){
  var currentDisplay = $('#display').text();
  var arr = currentDisplay.split(" ");
  switch(arr[1]){
    case '+': $('#display').text(parseFloat(arr[0]) + parseFloat(arr[2]));
    break;
    case '-': $('#display').text(arr[0] - arr[2]);
    break;
    case '*': $('#display').text(arr[0] * arr[2]);
    break;
    case '/': $('#display').text(arr[0] / arr[2]);
    break;
    case '√': $('#display').text(Math.sqrt(parseFloat(arr[0])));
    break;
  }
  });

  // $('#powerOff').click(function(e){
  //   $('#display').css('background-color', '#034500');
  // });

  $('#powerOn').click(function(e){
    $('#display').css('background-color', '#c3d941');
  });

//   $( '.number' ).mouseover(function() {
//   $('.number').css('background-color', 'white');
// });

// $( '.number' ).hover(function() {
//   $( this ).fadeOut( 100);
//   $( this ).fadeIn( 0 );
// });

// $( '.number.id' ).hover(function() {
//   $('.number.id').css('background-color', 'white');
// });

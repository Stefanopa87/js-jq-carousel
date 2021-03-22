
//CAROUSEL IMAGES

// function per il tasto next
function nextClick(){

  // seleziono elemento ACTIVE
  var activeImg = $('.active');

  // creo 2 casistiche per il loop:
  if (activeImg.hasClass('last')) { // .hasClass è una function di JQ per chiedere
                                    // se un elemento ha quella classe
    var nextImg = $('.first');
    // quindi se incontri LAST la next sarà img.first

    activeImg.removeClass('active');
    nextImg.addClass('active');
  } else{
    var nextImg = activeImg.next('img');
    // seleziona elemento successivo all'ACTIVE

    activeImg.removeClass('active');
    nextImg.addClass('active');
    // con remove e add vado a spostare la classe ACTIVE
  }
}

function nextClickCircle(){

  var activeCircle = $('.active_circle');

  if (activeCircle.hasClass('last')) {

    var nextCircle = $('.first')

    activeCircle.removeClass('active_circle');
    nextCircle.addClass('active_circle');
  }else{

    var nextCircle = activeCircle.next('i');

    activeCircle.removeClass('active_circle');
    nextCircle.addClass('active_circle');
  }
}

// function per il tasto prev
function prevClick(){

  var activeImg = $('.active');

  if (activeImg.hasClass('first')) {

    var prevImg = $('.last');

    activeImg.removeClass('active');
    prevImg.addClass('active');
  } else{
    var prevImg = activeImg.prev('img');

    activeImg.removeClass('active');
    prevImg.addClass('active');
  }
}

function prevClickCircle(){

  var activeCircle = $('.active_circle');

  if (activeCircle.hasClass('first')) {

    var prevCircle = $('.last')

    activeCircle.removeClass('active_circle');
    prevCircle.addClass('active_circle');
  }else{
    var prevCircle = activeCircle.prev('i');

    activeCircle.removeClass('active_circle');
    prevCircle.addClass('active_circle');
  }
}

function init (){

  $('.prev').click(prevClickCircle);
  $('.prev').click(prevClick);
  // creo 2 collegamenti in ready,
  // uno per PREV e uno per NEXT
  $('.next').click(nextClick);
  $('.next').click(nextClickCircle);
}

// questo è il modo per richiamare il JS quando in html
// si mette il collegamento in HEAD.
$(document).ready(init);

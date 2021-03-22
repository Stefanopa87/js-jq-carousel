
//CAROUSEL IMAGES

// function per il tasto next
function nextClick(){

  // seleziono elemento ACTIVE
  var activeImg = $('.active');

  // creo 2 casistiche per il loop:
  if (activeImg.hasClass('last')) { // .hasClass è una function di JQ per chiedere
                                    // se un elemento ha quella classe
    var nextImg = $('img.first');
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

// function per il tasto prev
function prevClick(){

  var activeImg = $('.active');

  if (activeImg.hasClass('first')) {

    var prevImg = $('img.last');

    activeImg.removeClass('active');
    prevImg.addClass('active');
  } else{
    var prevImg = activeImg.prev('img');

    activeImg.removeClass('active');
    prevImg.addClass('active');
  }
}

function init (){

  $('.prev').click(prevClick);
  // creo 2 collegamenti in ready,
  // uno per PREV e uno per NEXT
  $('.next').click(nextClick);
}

// questo è il modo per richiamare il JS quando in html
// si mette il collegamento in HEAD.
$(document).ready(init);

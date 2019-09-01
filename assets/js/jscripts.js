window.onload = ()=> {
  document.querySelector("#navbtn").addEventListener("click", ()=> {
    document.querySelector("#mobileHeader").classList.toggle("header--active");
  })
}

/*
window.onload = ()=> {
  document.querySelector(".footer_Contact").addEventListener("click", ()=> {
  document.querySelector("#footer").classList.toggle("js--active");
  document.querySelector(".contact").scrollIntoView();
  })
}

$(document).ready(function(){
  $('.footer_Contact').click(function(){
    var offset = $('.contact').offset();

    $('#footer').toggleClass('js--active');
    $('.side_bar').animate({scrollTop : offset.bottom}, 500);
  })

  $('.galleryList_all').click(function(){
    var offset = $('.gallerySelector').offset();

    $('#gallery').addClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 500);
  })

  $('.galleryList_ux_ui').click(function(){
    var offset = $('.gallerySelector').offset();

    $('#gallery').removeClass('all');
    $('#gallery').addClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 500);
  })

  $('.galleryList_editorial').click(function(){
    var offset = $('.gallerySelector').offset();

    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').addClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 500);
  })

  $('.galleryList_product').click(function(){
    var offset = $('.gallerySelector').offset();

    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').addClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 500);
  })

  $('.galleryList_videography').click(function(){
    var offset = $('.gallerySelector').offset();

    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').addClass('videography');
    $('html').animate({scrollTop : offset.top}, 500);
  })

  $('#btn_nav').click(function(){
    if($("#btn_nav").hasClass("js--nav-deactive") === true) {
      $('#btn_nav').removeClass('js--nav-deactive');
      $('#btn_nav').addClass('js--nav-active');
      $('body').addClass('js--active');
      $('.content_box').off('scroll touchmove mousewheel');
    } else if($("#btn_nav").hasClass("js--nav-active") === true) {
      $('#btn_nav').addClass('js--nav-deactive');
      $('#btn_nav').removeClass('js--nav-active');
      $('body').removeClass('js--active');
      $('.content_box').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  })

  $(window).scroll(function(event){
    if($("body").hasClass("js--active") === false) {
      $('#btn_nav').removeClass('js--nav-deactive');
      $('#btn_nav').addClass('js--nav-active');
      $('body').addClass('js--active');
      $('.content_box').off('scroll touchmove mousewheel');
    }
  })
})
*/

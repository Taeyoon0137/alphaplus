//window.onload = ()=> {
  //document.querySelector(".footer_Contact").addEventListener("click", ()=> {
  //document.querySelector("#footer").classList.toggle("js--active");
  //document.querySelector(".contact").scrollIntoView();
  //})
//}

$(document).ready(function(){
  var offset = $('.gallerySelector').offset();

  $('.footer_Contact').click(function(){
    var offset = $('.contact').offset();

    $('#footer').toggleClass('js--active');
    $('html').animate({scrollTop : offset.top}, 1000);
  })

  $('.galleryList_all').click(function(){
    $('#gallery').addClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 1000);
  })

  $('.galleryList_ux_ui').click(function(){
    $('#gallery').removeClass('all');
    $('#gallery').addClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 1000);
  })

  $('.galleryList_editorial').click(function(){
    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').addClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 1000);
  })

  $('.galleryList_product').click(function(){
    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').addClass('product');
    $('#gallery').removeClass('videography');
    $('html').animate({scrollTop : offset.top}, 1000);
  })

  $('.galleryList_videography').click(function(){
    $('#gallery').removeClass('all');
    $('#gallery').removeClass('ux_ui');
    $('#gallery').removeClass('editorial');
    $('#gallery').removeClass('product');
    $('#gallery').addClass('videography');
    $('html').animate({scrollTop : offset.top}, 1000);
  })
})

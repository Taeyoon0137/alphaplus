
window.addEventListener('scroll', function() {
var el = document.querySelector('.header_background');

if(window.scrollY >= 300px) el.classList.add('background');
else el.classList.remove('background');
});

window.onload = ()=> {
  //header color


  //nav button
  document.querySelector(".nav-button-border").addEventListener("click", ()=> {
  document.querySelector("#header").classList.toggle("nav--active");
  document.querySelector("#navigation").classList.toggle("nav--active");
  document.querySelector("#wrapper").classList.toggle("nav--active");
  })

  })
}

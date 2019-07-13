window.onload = ()=> {
  //header color


  //nav button
  document.querySelector(".al-navbutton").addEventListener("click", ()=> {
  document.querySelector("#al-header").classList.toggle("nav--active");
  document.querySelector("#al-navigation").classList.toggle("nav--active");
  })
}

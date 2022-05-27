const button = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const img  = document.querySelector(".menu-mobile img");
button.addEventListener("click", function() {
  const fechar =  menu.classList.toggle("mobile-ativo");
  if (fechar) {
    img.setAttribute("src","close.svg");
  } else {
    img.setAttribute("src","menu.svg");
  }
});
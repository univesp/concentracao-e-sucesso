$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        $("nav").show();
      } else {
        $("nav").hide();
      }
    });

  //////////////////////////////////////////////////////////////////



$("#startBtn").click(function() {
      $("#pagina2").show();
      $('html, body').animate({
         scrollTop: $("#pagina2").offset().top
     }, 500);
    });

$(".botao").click(function() {
      $("#pagina3").show();
      $('html, body').animate({
         scrollTop: $("#pagina3").offset().top
     }, 500);
    });


$(".botao2").click(function() {
      $("#carrossel").show();
   //   $("#faixa_branca").show();
      $('html, body').animate({
         scrollTop: $("#carrossel").offset().top
     }, 500);
    });


$(".start-button").click(function() {
      $("#exercicio").show();
      $('html, body').animate({
         scrollTop: $("#exercicio").offset().top
     }, 500);
    });

$(".botao3").click(function() {
      $("#pagina4").show();
      $("#cabeca").show();
      $(".hero").show();
      $('html, body').animate({
         scrollTop: $("#pagina4").offset().top
     }, 500);
    });


});


////////////////////////////////carrossel////////////////////////////////////////
 let indice = 0;
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  function atualizarIndicadores() {
    const indicadores = document.getElementById("indicadores");
    indicadores.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
      const span = document.createElement("span");
      span.textContent = i + 1; // Mostra de 1 a 6
      span.classList.toggle("ativo", i === indice);
      span.onclick = () => irParaSlide(i);
      indicadores.appendChild(span);
    }
  }

  function mudarSlide(n) {
    indice = (indice + n + totalSlides) % totalSlides;
    atualizar();
  }

  function irParaSlide(n) {
    indice = n;
    atualizar();
  }

  function atualizar() {
    slides.style.transform = `translateX(-${indice * 100}%)`;
    atualizarIndicadores();
  }

  atualizar();
////////////////////////////////////////////////////////////////////


function trocarImagemDeFundo() {
  const imagem = document.getElementById('header');
  if (window.innerWidth <= 768) {
    imagem.src = 'assets/back_mobile.png';
  } else {
    imagem.src = 'assets/back.png';
  }
}

window.addEventListener('resize', trocarImagemDeFundo);
window.addEventListener('load', trocarImagemDeFundo);


function atualizarImagem() {
  const img = document.getElementById("startBtn");
  const isMobile = window.innerWidth <= 768;

  img.src = isMobile ? "assets/inicio.png" : "assets/inicio.png";
}

// Chama no carregamento
document.addEventListener("DOMContentLoaded", atualizarImagem);

// Chama quando redimensionar a janela
window.addEventListener("resize", atualizarImagem);


function removerClasseNoMobile() {
  const elementos = document.querySelectorAll(".dot-pattern3");

  if (window.innerWidth <= 768) {
    elementos.forEach(el => el.classList.remove("dot-pattern3"));
  }
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", removerClasseNoMobile);

// Também executa se o usuário redimensionar a janela (opcional)
window.addEventListener("resize", removerClasseNoMobile);
function scrollWin(x, y) {
  window.scrollBy(x, y);
  
}

var mensagem = document.querySelector(".botao");

function alerta(){
    alert("Obrigado pelo FeedBack");
}

mensagem.onclick = alerta;
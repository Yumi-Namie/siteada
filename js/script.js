document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value !=""){
    alert("prontinho! Você recebrá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e seu telefone!")
  }
}



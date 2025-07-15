function salvarDados(event) {
    event.preventDefault(); 

    let dadosBancarios = { 
        numeroCartao: document.getElementById('numerocartao').value,
        validade: document.getElementById('validade').value,
        codSeguranca: document.getElementById('codigo').value,
        nomeCartao: document.getElementById('nomecartao').value // Adicionado o nome do cartão
    };

    sessionStorage.setItem('dadosBancarios', JSON.stringify(dadosBancarios));

    alert("Dados bancários salvos com sucesso!");
    
   
    window.location.href = "review.html";
}
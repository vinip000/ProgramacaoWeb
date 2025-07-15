function salvarDados(event) {
    event.preventDefault(); // Previne qualquer comportamento padrão

    let dadosBancarios = { 
        numeroCartao: document.getElementById('numerocartao').value,
        validade: document.getElementById('validade').value,
        codSeguranca: document.getElementById('codsegurança').value
    };

    sessionStorage.setItem('dadosBancarios', JSON.stringify(dadosBancarios));

    alert("Dados bancários salvos com sucesso!");
}

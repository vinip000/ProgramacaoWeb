const container = document.getElementById("assentosContainer");
    const btnContinuar = document.getElementById("btnContinuar");
    const rows = "ABCDEFGHIJ";

  
    for (let i = 0; i < 10; i++) {
      for (let j = 1; j <= 10; j++) {
        const assento = document.createElement("div");
        assento.className = "assento";
        assento.innerText = `${rows[i]}${j}`; 
        assento.onclick = () => assento.classList.toggle("selecionado");
        container.appendChild(assento);
      }
    }

    
    btnContinuar.addEventListener("click", () => {
      const selecionados = Array.from(document.querySelectorAll(".assento.selecionado"))
                                .map(a => a.innerText);

      if (selecionados.length === 0) {
        alert("Por favor, selecione pelo menos um assento.");
        return;
      }

      
      sessionStorage.setItem("assentosSelecionados", JSON.stringify(selecionados));

      
      window.location.href = "combos.html";
    });
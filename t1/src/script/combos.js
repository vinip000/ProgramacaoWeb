const combos = [
    {
      nome: "Combo 1",
      conteudo: "Pipoca Grande, Refrigerante médio, Chocolate Pequeno",
      preco: "R$ 39,90"
    },
    {
      nome: "Combo 2",
      conteudo: "Pipoca Média, Refrigerante Pequeno",
      preco: "R$ 29,90"
    },
    {
      nome: "Combo 3",
      conteudo: "Pipoca Grande, Refrigerante Grande, Nachos",
      preco: "R$ 49,90"
    },
    {
      nome: "Combo 4",
      conteudo: "2 Pipocas Médias, 2 Refrigerantes Médios",
      preco: "R$ 59,90"
    },
    {
      nome: "Combo 5",
      conteudo: "Pipoca Média, Água, Chocolate",
      preco: "R$ 32,90"
    },
    {
      nome: "Combo 6",
      conteudo: "Hot Dog, Refrigerante Médio, Pipoca Pequena",
      preco: "R$ 45,90"
    }
  ];

  function criarCardsCombos() {
    const container = document.getElementById("combosContainer");

    combos.forEach(combo => {
      const card = document.createElement("div");
      card.className = "section__grid_combos__card";

      card.innerHTML = `
        <img class="section__grid_combos__card__image" src="/api/placeholder/378/250" alt="Imagem do ${combo.nome}">
        <div class="section__grid__combos__card__informs">
          <p class="section__grid__combos__card__informs__title">${combo.nome}</p>
          <p class="section__grid__combos__card__informs__content">${combo.conteudo}</p>
          <div class="section__grid__combos__card__informs__container_in">
            <p class="combo-price">${combo.preco}</p>
            <button class="add-button" data-combo="${combo.nome}" data-preco="${combo.preco}">Add to Cart</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
    
    
    addButtonEventListeners();
  }
  
  function addButtonEventListeners() {
    const buttons = document.querySelectorAll('.add-button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const comboName = this.getAttribute('data-combo');
        const comboPrice = this.getAttribute('data-preco');
        
        
        sessionStorage.setItem('selectedCombo', comboName);
        sessionStorage.setItem('comboPrice', comboPrice);
        
     
        showNotification();
        
       
        setTimeout(() => {
          window.location.href = 'pagamento.html';
        }, 1000);
      });
    });
  }
  
  function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    
    
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }

  document.addEventListener("DOMContentLoaded", criarCardsCombos);
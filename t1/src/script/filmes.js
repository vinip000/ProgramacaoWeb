const filmes = [
    {
      nome: "A Origem",
      duracao: "2h 28min",
      genero: "Ficção Científica"
    },
    {
      nome: "O Lobo de Wall Street",
      duracao: "3h",
      genero: "Biografia, Comédia, Crime"
    },
    {
      nome: "Divertida Mente",
      duracao: "1h 35min",
      genero: "Animação, Aventura, Comédia"
    },
    {
      nome: "Titanic",
      duracao: "3h 15min",
      genero: "Drama, Romance"
    },
    {
      nome: "Pantera Negra",
      duracao: "2h 14min",
      genero: "Ação, Aventura, Ficção Científica"
    },
    {
      nome: "O Poderoso Chefão",
      duracao: "2h 55min",
      genero: "Crime, Drama"
    }
  ];

  function criarCardsFilmes() {
    const container = document.getElementById("filmsContainer");

    filmes.forEach(filme => {
      const card = document.createElement("div");
      card.className = "section__grid_films__card";
      
      card.innerHTML = `
        <div style="text-decoration: none; color: inherit;">
          <img class="section__grid_films__card__image" src="https://placehold.co/378x400" alt="image film">
          <div class="section__grid__films__card__informs">
            <p class="section__grid__films__card__informs__title">${filme.nome}</p>
            <div class="section__grid__films__card__informs__container_in">
              <p>${filme.genero}</p>
              <p>${filme.duracao}</p>
            </div>
          </div>
        </div>
      `;
      
      
      card.addEventListener("click", function() {
        
        const filmeEscolhido = {
          nome: filme.nome,
          duracao: filme.duracao,
          genero: filme.genero
        };
        
        sessionStorage.setItem('filmeEscolhido', JSON.stringify(filmeEscolhido));
        
        
        window.location.href = `escolherAssentos.html?filme=${encodeURIComponent(filme.nome)}`;
      });
      
      container.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", criarCardsFilmes);
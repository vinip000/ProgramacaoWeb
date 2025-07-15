document.addEventListener("DOMContentLoaded", function() {

    const filmeEscolhido = JSON.parse(sessionStorage.getItem('filmeEscolhido')) || {};
    const assentosSelecionados = JSON.parse(sessionStorage.getItem('assentosSelecionados')) || [];
    const selectedCombo = sessionStorage.getItem('selectedCombo') || '';
    const comboPrice = sessionStorage.getItem('comboPrice') || '';
    const dadosBancarios = JSON.parse(sessionStorage.getItem('dadosBancarios')) || {};
    
    
    const ticketPricePerSeat = 24.90;
    const totalTicketsPrice = ticketPricePerSeat * assentosSelecionados.length;
    
    const comboPriceValue = comboPrice ? parseFloat(comboPrice.replace('R$ ', '').replace(',', '.')) : 0;
    
    const totalPriceValue = totalTicketsPrice + comboPriceValue;
    
   
    const movieDetails = document.getElementById('movieDetails');
    if (filmeEscolhido.nome) {
      movieDetails.innerHTML = `
        <div class="review__item">
          <span class="review__label">Titulo:</span>
          <span class="review__value">${filmeEscolhido.nome}</span>
        </div>
        <div class="review__item">
          <span class="review__label">Genero:</span>
          <span class="review__value">${filmeEscolhido.genero || 'N/A'}</span>
        </div>
        <div class="review__item">
          <span class="review__label">Duração:</span>
          <span class="review__value">${filmeEscolhido.duracao || 'N/A'}</span>
        </div>
        <div class="review__item">
          <span class="review__label">Preço por ingresso:</span>
          <span class="review__value">R$ 24,90</span>
        </div>
      `;
    } else {
      movieDetails.innerHTML = '<p>Sem informações sobre o filme disponiveis.</p>';
    }
    
    const seatsDetails = document.getElementById('seatsDetails');
    if (assentosSelecionados.length > 0) {
      assentosSelecionados.forEach(seat => {
        const seatTag = document.createElement('div');
        seatTag.className = 'seat__tag';
        seatTag.textContent = seat;
        seatsDetails.appendChild(seatTag);
      });
    } else {
      seatsDetails.innerHTML = '<p>Nenhum assento selecionado.</p>';
    }
    
    const comboDetails = document.getElementById('comboDetails');
    if (selectedCombo) {
      comboDetails.innerHTML = `
        <div class="review__item">
          <span class="review__label">Combo Escolhido:</span>
          <span class="review__value">${selectedCombo}</span>
        </div>
        <div class="review__item">
          <span class="review__label">Preço:</span>
          <span class="review__value">${comboPrice}</span>
        </div>
      `;
    } else {
      comboDetails.innerHTML = '<p>Nenhum Combo selecionado.</p>';
    }
    
    const paymentDetails = document.getElementById('paymentDetails');
    if (dadosBancarios.numeroCartao) {
      const lastFourDigits = dadosBancarios.numeroCartao.slice(-4);
      const maskedCardNumber = '**** **** **** ' + lastFourDigits;
      
      paymentDetails.innerHTML = `
        <div class="payment__card">
          <div class="review__item">
            <span class="review__label">Número do Cartão:</span>
            <span class="review__value card__number">${maskedCardNumber}</span>
          </div>
          <div class="review__item">
            <span class="review__label">Nome:</span>
            <span class="review__value">${dadosBancarios.nomeCartao || 'N/A'}</span>
          </div>
          <div class="review__item">
            <span class="review__label">Data de Validade:</span>
            <span class="review__value">${dadosBancarios.validade || 'N/A'}</span>
          </div>
        </div>
      `;
    } else {
      paymentDetails.innerHTML = '<p>Sem informações sobre o pagamento disponiveis.</p>';
    }
    
  
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = `Total: R$ ${totalPriceValue.toFixed(2).replace('.', ',')}`;
    
   
    document.getElementById('confirmButton').addEventListener('click', function() {
      alert('Compra foi concluida com sucesso! Aproveite o Filme!');
     
   
      
    
      sessionStorage.clear();
      
      window.location.href = 'index.html';
    });
  });
window.onload = function() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;
  const hora = new Date().getHours();
  let saudacao = '';
  if (hora >= 5 && hora < 12) {
    saudacao = 'Bom dia';
  } else if (hora >= 12 && hora < 18) {
    saudacao = 'Boa tarde';
  } else {
    saudacao = 'Boa noite';
  }
  const textoCompleto = `${saudacao}, bem-vindo ao meu Portfólio`;
  heroTitle.textContent = '';
  let i = 0;
  function digitar() {
    if (i < textoCompleto.length) {
      heroTitle.textContent += textoCompleto.charAt(i);
      i++;
      setTimeout(digitar, 60); 
    }
  }
  digitar();
};

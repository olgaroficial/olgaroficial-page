/* ============================================================
   OLGAR IMPORTS — script.js
   ============================================================ */

/* -------------------------------------------------------
   LOGOS — caminhos das imagens
   Edite só aqui se mover ou renomear os arquivos.
   ------------------------------------------------------- */
const LOGO_NAV_CLARA    = 'img/site/logo_colorido.png';  /* nav tema claro  */
const LOGO_NAV_ESCURA   = 'img/site/logo_branca.png';    /* nav tema escuro */
const LOGO_SOBRE_FOOTER = 'img/site/logo_preta.png';     /* sobre e footer  */

/* -------------------------------------------------------
   Inicialização do tema — roda antes do DOM para evitar
   flash de tema errado ao carregar a página
   ------------------------------------------------------- */
(function initTema() {
  const temaSalvo     = localStorage.getItem('olgar-tema');
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const tema = temaSalvo || (prefereEscuro ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', tema);
})();

/* -------------------------------------------------------
   DOM pronto
   ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  const btnTema    = document.getElementById('btn-tema');
  const logoNav    = document.getElementById('logo-nav');
  const logoSobre  = document.getElementById('logo-sobre');
  const logoFooter = document.querySelector('.footer-logo-img');

  /* Logos fixas (sobre e footer não mudam com o tema) */
  if (logoSobre)  logoSobre.src  = LOGO_SOBRE_FOOTER;
  if (logoFooter) logoFooter.src = LOGO_SOBRE_FOOTER;

  /* Logo do nav muda conforme tema */
  function aplicarLogoNav() {
    const tema = document.documentElement.getAttribute('data-theme');
    if (logoNav) logoNav.src = tema === 'dark' ? LOGO_NAV_ESCURA : LOGO_NAV_CLARA;
    if (btnTema) btnTema.textContent = tema === 'dark' ? '☀️' : '🌙';
  }

  /* Botão de alternar tema */
  if (btnTema) {
    btnTema.addEventListener('click', () => {
      const tema = document.documentElement.getAttribute('data-theme');
      const novo = tema === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', novo);
      localStorage.setItem('olgar-tema', novo);
      aplicarLogoNav();
    });
  }

  aplicarLogoNav();

  /* Asterisco nos labels de campos obrigatórios */
  document.querySelectorAll('input[required], select[required], textarea[required]').forEach(campo => {
    const label = document.querySelector(`label[for="${campo.id}"]`);
    if (label && !label.querySelector('.obrigatorio')) {
      const asterisco = document.createElement('span');
      asterisco.className = 'obrigatorio';
      asterisco.textContent = ' *';
      asterisco.style.cssText = 'color: #e74c3c; font-weight: 700;';
      label.appendChild(asterisco);
    }
  });

  /* -------------------------------------------------------
     Filtros do catálogo
     Usa data-categoria em cada .produto-card
     ------------------------------------------------------- */
  const filtrosBtns = document.querySelectorAll('.filtro-btn');

  filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtrosBtns.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');

      const filtro = btn.textContent.trim();

      document.querySelectorAll('.produto-card').forEach(card => {
        const cat = card.getAttribute('data-categoria') || '';
        card.style.display = (filtro === 'Todos' || cat === filtro) ? '' : 'none';
      });
    });
  });

  /* -------------------------------------------------------
     EMAILJS — envio do formulário de contato
     Chaves configuradas:
       Service ID  : service_ahah9dk
       Template ID : template_3s1da5l
       Public Key  : aSf1AcDjvfLJ7pE63
     ------------------------------------------------------- */
  emailjs.init('aSf1AcDjvfLJ7pE63');

  const form = document.querySelector('.contato-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn      = form.querySelector('button[type="submit"]');
      const original = btn.textContent;

      /* Coleta os valores do formulário */
      const templateParams = {
        nome:      document.getElementById('nome').value.trim(),
        telefone:  document.getElementById('tel').value.trim(),
        email:     document.getElementById('email').value.trim(),
        interesse: document.getElementById('interesse').value,
        mensagem:  document.getElementById('msg').value.trim(),
      };

      /* Estado de carregando */
      btn.textContent = '⏳ Enviando...';
      btn.style.background = '#555';
      btn.disabled = true;

      emailjs.send('service_ahah9dk', 'template_3s1da5l', templateParams)
        .then(() => {
          /* Sucesso */
          btn.textContent = '✅ Mensagem enviada!';
          btn.style.background = '#1a8a4a';
          form.reset();

          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.disabled = false;
          }, 4000);
        })
        .catch((erro) => {
          /* Erro */
          console.error('EmailJS erro:', erro);
          btn.textContent = '❌ Erro ao enviar. Tente novamente.';
          btn.style.background = '#c0392b';

          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.disabled = false;
          }, 4000);
        });
    });
  }

  /* -------------------------------------------------------
     Botão "Quero esta" → scroll para contato
     ------------------------------------------------------- */
  const btnMini = document.querySelector('.btn-mini');
  if (btnMini) {
    btnMini.addEventListener('click', () => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------------
     Navbar — sombra ao rolar
     ------------------------------------------------------- */
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    navEl?.classList.toggle('nav-scrolled', window.scrollY > 60);
  });

});
/* ============================================================
   OLGAR IMPORTS — script.js  (Copa do Mundo 2026 Edition)
   ============================================================ */

/* ── LOGOS ── */
const LOGO_NAV_CLARA    = 'img/site/logo_colorido.png';
const LOGO_NAV_ESCURA   = 'img/site/logo_branca.png';
const LOGO_SOBRE_FOOTER = 'img/site/logo_preta.png';

/* ── EMAILJS ── */
const EMAILJS_SERVICE  = 'service_ahah9dk';
const EMAILJS_TEMPLATE = 'template_3s1da5l';
const EMAILJS_KEY      = 'aSf1AcDjvfLJ7pE63';

/* ============================================================
   DADOS DAS SELEÇÕES
   arq1 = camisa principal | arq2 = camisa visitante (null se não tiver)
   ============================================================ */
const SELECOES = [
  { id:'brasil',        nome:'Brasil',          bandeira:'🇧🇷', arq1:'brasil1.jpg',        arq2:'brasil2.jpg',        preco:'R$ 199,90' },
  { id:'argentina',     nome:'Argentina',       bandeira:'🇦🇷', arq1:'argentina1.jpg',      arq2:'argentina2.jpg',     preco:'R$ 199,90' },
  { id:'portugal',      nome:'Portugal',        bandeira:'🇵🇹', arq1:'portugal.jpg',        arq2:'portugal2.jpg',      preco:'R$ 199,90' },
  { id:'franca',        nome:'França',          bandeira:'🇫🇷', arq1:'frança1.jpg',         arq2:'frança2.jpg',        preco:'R$ 199,90' },
  { id:'espanha',       nome:'Espanha',         bandeira:'🇪🇸', arq1:'espanha1.jpg',        arq2:'espanha2.jpg',       preco:'R$ 199,90' },
  { id:'alemanha',      nome:'Alemanha',        bandeira:'🇩🇪', arq1:'alemanha1.jpg',       arq2:'alemanha2.jpg',      preco:'R$ 199,90' },
  { id:'holanda',       nome:'Holanda',         bandeira:'🇳🇱', arq1:'holanda1.jpg',        arq2:'holanda2.jpg',       preco:'R$ 199,90' },
  { id:'belgica',       nome:'Bélgica',         bandeira:'🇧🇪', arq1:'belgica1.jpg',        arq2:'belgica2.jpg',       preco:'R$ 199,90' },
  { id:'uruguai',       nome:'Uruguai',         bandeira:'🇺🇾', arq1:'uruguai1.jpg',        arq2:'uruguai2.jpg',       preco:'R$ 199,90' },
  { id:'colombia',      nome:'Colômbia',        bandeira:'🇨🇴', arq1:'colombia1.jpg',       arq2:'colombia2.jpg',      preco:'R$ 199,90' },
  { id:'mexico',        nome:'México',          bandeira:'🇲🇽', arq1:'mexico1.jpg',         arq2:'mexico2.jpg',        preco:'R$ 199,90' },
  { id:'usa',           nome:'EUA',             bandeira:'🇺🇸', arq1:'usa1.jpg',            arq2:'usa2.jpg',           preco:'R$ 199,90' },
  { id:'canada',        nome:'Canadá',          bandeira:'🇨🇦', arq1:'canada1.jpg',         arq2:'canada2.jpg',        preco:'R$ 199,90' },
  { id:'marrocos',      nome:'Marrocos',        bandeira:'🇲🇦', arq1:'marrocos1.jpg',       arq2:'marrocos2.jpg',      preco:'R$ 199,90' },
  { id:'senegal',       nome:'Senegal',         bandeira:'🇸🇳', arq1:'senegal1.jpg',        arq2:'senegal2.jpg',       preco:'R$ 199,90' },
  { id:'coreiadosul',   nome:'Coreia do Sul',   bandeira:'🇰🇷', arq1:'coreiadosul1.jpg',    arq2:'coreiadosul2.jpg',   preco:'R$ 199,90' },
  { id:'japao',         nome:'Japão',           bandeira:'🇯🇵', arq1:'japão1.jpg',          arq2:null,                 preco:'R$ 199,90' },
  { id:'australia',     nome:'Austrália',       bandeira:'🇦🇺', arq1:'australia1.jpg',      arq2:'australia2.jpg',     preco:'R$ 199,90' },
  { id:'equador',       nome:'Equador',         bandeira:'🇪🇨', arq1:'equador1.jpg',        arq2:'equador2.jpg',       preco:'R$ 199,90' },
  { id:'paraguai',      nome:'Paraguai',        bandeira:'🇵🇾', arq1:'paraguai1.jpg',       arq2:'paraguai2.jpg',      preco:'R$ 199,90' },
  { id:'turquia',       nome:'Turquia',         bandeira:'🇹🇷', arq1:'turquia1.jpg',        arq2:'turquia2.jpg',       preco:'R$ 199,90' },
  { id:'suecia',        nome:'Suécia',          bandeira:'🇸🇪', arq1:'suecia1.jpg',         arq2:'suecia2.jpg',        preco:'R$ 199,90' },
  { id:'noruega',       nome:'Noruega',         bandeira:'🇳🇴', arq1:'noruega1.jpg',        arq2:'noruega2.jpg',       preco:'R$ 199,90' },
  { id:'suica',         nome:'Suíça',           bandeira:'🇨🇭', arq1:'suica1.jpg',          arq2:'suica2.jpg',         preco:'R$ 199,90' },
  { id:'austria',       nome:'Áustria',         bandeira:'🇦🇹', arq1:'austria1.jpg',        arq2:'austria2.jpg',       preco:'R$ 199,90' },
  { id:'escocia',       nome:'Escócia',         bandeira:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', arq1:'escocia1.jpg',       arq2:'escocia2.jpg',      preco:'R$ 199,90' },
  { id:'tchequia',      nome:'Tchéquia',        bandeira:'🇨🇿', arq1:'tchequia1.jpg',       arq2:'tchequia2.jpg',      preco:'R$ 199,90' },
  { id:'bosnia',        nome:'Bósnia',          bandeira:'🇧🇦', arq1:'bosnia1.jpg',         arq2:'bosnia2.jpg',        preco:'R$ 199,90' },
  { id:'tunisia',       nome:'Tunísia',         bandeira:'🇹🇳', arq1:'tunisia1.jpg',        arq2:'tunisia2.jpg',       preco:'R$ 199,90' },
  { id:'egito',         nome:'Egito',           bandeira:'🇪🇬', arq1:'egito1.jpg',          arq2:'egito2.jpg',         preco:'R$ 199,90' },
  { id:'africa',        nome:'África do Sul',   bandeira:'🇿🇦', arq1:'africa1.jpg',         arq2:'africa2.jpg',        preco:'R$ 199,90' },
  { id:'rdcongo',       nome:'RD Congo',        bandeira:'🇨🇩', arq1:'rdcongo1.jpg',        arq2:'rdcongo2.jpg',       preco:'R$ 199,90' },
  { id:'caboverde',     nome:'Cabo Verde',      bandeira:'🇨🇻', arq1:'caboverde1.jpg',      arq2:'caboverde2.jpg',     preco:'R$ 199,90' },
  { id:'costadomarfim', nome:'Costa do Marfim', bandeira:'🇨🇮', arq1:'costadomarfim.jpg',   arq2:'costadomarfim2.jpg', preco:'R$ 199,90' },
  { id:'arabiasaudita', nome:'Arábia Saudita',  bandeira:'🇸🇦', arq1:'arabiasaudita1.jpg',  arq2:'arabiasaudita2.jpg', preco:'R$ 199,90' },
  { id:'iraque',        nome:'Iraque',          bandeira:'🇮🇶', arq1:'iraque1.jpg',         arq2:'iraque2.jpg',        preco:'R$ 199,90' },
  { id:'ira',           nome:'Irã',             bandeira:'🇮🇷', arq1:'ira1.jpg',            arq2:'ira2.jpg',           preco:'R$ 199,90' },
  { id:'jordania',      nome:'Jordânia',        bandeira:'🇯🇴', arq1:'jordania1.jpg',       arq2:null,                 preco:'R$ 199,90' },
  { id:'qatar',         nome:'Qatar',           bandeira:'🇶🇦', arq1:'qatar1.jpg',          arq2:'qatar2.jpg',         preco:'R$ 199,90' },
  { id:'novazelandia',  nome:'Nova Zelândia',   bandeira:'🇳🇿', arq1:'novazelandia1.jpg',   arq2:'novazelandia2.jpg',  preco:'R$ 199,90' },
  { id:'uzbequistao',   nome:'Uzbequistão',     bandeira:'🇺🇿', arq1:'uzbequistão1.jpg',    arq2:null,                 preco:'R$ 199,90' },
  { id:'argelia',       nome:'Argélia',         bandeira:'🇩🇿', arq1:'argelia1.jpg',        arq2:'argelia2.jpg',       preco:'R$ 199,90' },
  { id:'haiti',         nome:'Haiti',           bandeira:'🇭🇹', arq1:'haiti1.jpg',          arq2:'haiti2.jpg',         preco:'R$ 199,90' },
  { id:'curacao',       nome:'Curaçao',         bandeira:'🇨🇼', arq1:'curacao1.jpg',        arq2:'curacao2.jpg',       preco:'R$ 199,90' },
];

const PASTA = 'img/camisas/sele\u00e7\u00e3o/';

const CLUBES = [
  // Clubes serão adicionados em breve
];

/* ============================================================
   TEMA — inicializa antes do DOM para evitar flash
   ============================================================ */
(function initTema() {
  const salvo = localStorage.getItem('olgar-tema');
  const prefEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', salvo || (prefEscuro ? 'dark' : 'light'));
})();

/* ============================================================
   CONTADOR DE DIAS ATÉ A COPA (começa 11 jun 2026)
   ============================================================ */
(function contadorCopa() {
  const inicio = new Date('2026-06-11T00:00:00');
  const hoje   = new Date();
  const diff   = Math.ceil((inicio - hoje) / 86400000);
  const el     = document.getElementById('diasCopa');
  if (el) el.textContent = diff > 0 ? diff : '🏆';
})();

/* ============================================================
   DOM PRONTO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Logos ── */
  const btnTema    = document.getElementById('btn-tema');
  const logoNav    = document.getElementById('logo-nav');
  const logoSobre  = document.getElementById('logo-sobre');
  const logoFooter = document.querySelector('.footer-logo-img');

  if (logoSobre)  logoSobre.src  = LOGO_SOBRE_FOOTER;
  if (logoFooter) logoFooter.src = LOGO_SOBRE_FOOTER;

  function aplicarLogoNav() {
    const tema = document.documentElement.getAttribute('data-theme');
    if (logoNav) logoNav.src = tema === 'dark' ? LOGO_NAV_ESCURA : LOGO_NAV_CLARA;
    if (btnTema) btnTema.textContent = tema === 'dark' ? '☀️' : '🌙';
  }

  if (btnTema) {
    btnTema.addEventListener('click', () => {
      const novo = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', novo);
      localStorage.setItem('olgar-tema', novo);
      aplicarLogoNav();
    });
  }
  aplicarLogoNav();

  /* ── Asterisco em campos obrigatórios ── */
  document.querySelectorAll('input[required], select[required], textarea[required]').forEach(campo => {
    const label = document.querySelector(`label[for="${campo.id}"]`);
    if (label && !label.querySelector('.obrigatorio')) {
      const ast = document.createElement('span');
      ast.className = 'obrigatorio';
      ast.textContent = ' *';
      ast.style.cssText = 'color:#e74c3c;font-weight:700;';
      label.appendChild(ast);
    }
  });

  /* ── Filtros do catálogo ── */
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      const filtro = btn.textContent.trim();
      document.querySelectorAll('.produto-card').forEach(card => {
        const cat = card.getAttribute('data-categoria') || '';
        card.style.display = (filtro === 'Todos' || cat === filtro) ? '' : 'none';
      });
    });
  });

  /* ── EmailJS ── */
  emailjs.init(EMAILJS_KEY);
  const form = document.querySelector('.contato-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn  = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      const params = {
        nome:      document.getElementById('nome').value.trim(),
        telefone:  document.getElementById('tel').value.trim(),
        email:     document.getElementById('email').value.trim(),
        interesse: document.getElementById('interesse').value,
        mensagem:  document.getElementById('msg').value.trim(),
      };
      btn.textContent = '⏳ Enviando...';
      btn.style.background = '#555';
      btn.disabled = true;
      emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, params)
        .then(() => {
          btn.textContent = '✅ Mensagem enviada!';
          btn.style.background = '#1a8a4a';
          form.reset();
          setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
        })
        .catch(() => {
          btn.textContent = '❌ Erro ao enviar. Tente novamente.';
          btn.style.background = '#c0392b';
          setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
        });
    });
  }

  /* ── Navbar sombra ao rolar ── */
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    navEl?.classList.toggle('nav-scrolled', window.scrollY > 60);
  });

  /* ==========================================================
     CARROSSEL HERO — todas as camisas principais
     ========================================================== */
  const track  = document.getElementById('carrosselTrack');
  const dotsEl = document.getElementById('carrosselDots');

  if (track) {
    SELECOES.forEach(s => {
      const slide = document.createElement('div');
      slide.className = 'copa-slide';
      slide.innerHTML = `
        <div class="copa-slide-img">
          <img src="${PASTA}${s.arq1}" alt="${s.nome}" loading="lazy">
        </div>
        <div class="copa-slide-info">
          <div class="copa-slide-pais">${s.bandeira} ${s.nome}</div>
          <div class="copa-slide-tipo">Uniforme Principal</div>
          <div class="copa-slide-preco">${s.preco}</div>
        </div>
      `;
      track.appendChild(slide);
    });

    let carrosselAtual = 0;

    function visiveis() {
      return window.innerWidth <= 420 ? 1 : window.innerWidth <= 640 ? 2 : 3;
    }
    function totalPaginas() { return Math.ceil(SELECOES.length / visiveis()); }

    function buildDots() {
      dotsEl.innerHTML = '';
      for (let i = 0; i < totalPaginas(); i++) {
        const dot = document.createElement('button');
        dot.className = 'copa-dot' + (i === carrosselAtual ? ' ativo' : '');
        dot.addEventListener('click', () => irPara(i));
        dotsEl.appendChild(dot);
      }
    }

    function irPara(p) {
      carrosselAtual = Math.max(0, Math.min(p, totalPaginas() - 1));
      const vis   = visiveis();
      const slideW = track.querySelector('.copa-slide')?.offsetWidth || 0;
      const gap   = 12;
      track.style.transform = `translateX(-${carrosselAtual * vis * (slideW + gap)}px)`;
      dotsEl.querySelectorAll('.copa-dot').forEach((d, i) => d.classList.toggle('ativo', i === carrosselAtual));
    }

    buildDots();
    window.addEventListener('resize', () => { carrosselAtual = 0; buildDots(); irPara(0); });

    let timer = setInterval(() => irPara((carrosselAtual + 1) % totalPaginas()), 4000);
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', () => {
      timer = setInterval(() => irPara((carrosselAtual + 1) % totalPaginas()), 4000);
    });

    // swipe touch
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive:true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) irPara(carrosselAtual + (diff > 0 ? 1 : -1));
    });

    window.moverCarrossel = (dir) => {
      clearInterval(timer);
      irPara((carrosselAtual + dir + totalPaginas()) % totalPaginas());
      timer = setInterval(() => irPara((carrosselAtual + 1) % totalPaginas()), 4000);
    };
  }

  /* ==========================================================
     SEÇÃO COPA — abas + visualizador principal/visitante
     ========================================================== */
  const abasEl  = document.getElementById('selecaoAbas');
  const cardsEl = document.getElementById('selecaoCards');

  if (abasEl && cardsEl) {
    SELECOES.forEach((s, idx) => {

      /* ── Aba ── */
      const aba = document.createElement('button');
      aba.className = 'selecao-aba' + (idx === 0 ? ' ativa' : '');
      aba.setAttribute('data-selecao', s.id);
      aba.textContent = `${s.bandeira} ${s.nome}`;
      aba.addEventListener('click', () => {
        document.querySelectorAll('.selecao-aba').forEach(a => a.classList.remove('ativa'));
        aba.classList.add('ativa');
        document.querySelectorAll('.selecao-card').forEach(c => {
          c.classList.toggle('ativa', c.getAttribute('data-selecao') === s.id);
        });
        // scroll suave para o viewer
        cardsEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
      });
      abasEl.appendChild(aba);

      /* ── Card ── */
      const temVisitante = !!s.arq2;
      const card = document.createElement('div');
      card.className = 'selecao-card' + (idx === 0 ? ' ativa' : '');
      card.setAttribute('data-selecao', s.id);

      card.innerHTML = `
        <div class="uniforme-viewer">

          <!-- Camisa Principal -->
          <div class="uniforme-item" id="${s.id}-principal">
            <div class="uniforme-img">
              <div class="uniforme-badge">Principal</div>
              <img src="${PASTA}${s.arq1}" alt="${s.nome} Principal" loading="lazy">
            </div>
            <div class="uniforme-info">
              <div class="uniforme-pais">${s.bandeira} ${s.nome} — Uniforme Principal</div>
              <h3 class="uniforme-nome">${s.nome} 2026</h3>
              <p class="uniforme-desc">Uniforme oficial da seleção de ${s.nome} para a Copa do Mundo 2026. Tecido premium com acabamento impecável.</p>
              <div class="uniforme-preco">${s.preco}</div>
              <div class="uniforme-tamanhos">
                <div class="tam">P</div><div class="tam">M</div><div class="tam">G</div><div class="tam">GG</div>
              </div>
              <a href="#contato" class="btn-primario" style="margin-top:1.5rem;display:inline-block;">Encomendar esta camisa</a>
            </div>
          </div>

          ${temVisitante ? `
          <!-- Botão trocar -->
          <div class="uniforme-nav">
            <button class="uniforme-btn" id="${s.id}-btn" onclick="trocarUniforme('${s.id}')">
              <span class="uniforme-btn-icon">⚡</span>
              <span class="uniforme-btn-label" id="${s.id}-label">Ver Uniforme Visitante</span>
            </button>
          </div>

          <!-- Camisa Visitante -->
          <div class="uniforme-item oculto" id="${s.id}-visitante">
            <div class="uniforme-img">
              <div class="uniforme-badge visitante">Visitante</div>
              <img src="${PASTA}${s.arq2}" alt="${s.nome} Visitante" loading="lazy">
            </div>
            <div class="uniforme-info">
              <div class="uniforme-pais">${s.bandeira} ${s.nome} — Uniforme Visitante</div>
              <h3 class="uniforme-nome">${s.nome} Visitante 2026</h3>
              <p class="uniforme-desc">Segundo uniforme oficial de ${s.nome} para a Copa do Mundo 2026. Design alternativo com a mesma qualidade premium.</p>
              <div class="uniforme-preco">${s.preco}</div>
              <div class="uniforme-tamanhos">
                <div class="tam">P</div><div class="tam">M</div><div class="tam">G</div><div class="tam">GG</div>
              </div>
              <a href="#contato" class="btn-primario" style="margin-top:1.5rem;display:inline-block;">Encomendar esta camisa</a>
            </div>
          </div>` : ''}

        </div>
      `;
      cardsEl.appendChild(card);
    });
  }

  /* ==========================================================
     CATÁLOGO COMPLETO
     ========================================================== */
  const grid = document.getElementById('produtosGrid');

  if (grid) {
    SELECOES.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.setAttribute('data-categoria', 'Seleções');
      card.innerHTML = `
        <div class="produto-img">
          ${idx === 0 ? '<span class="produto-badge badge-destaque">Destaque</span>' : ''}
          <img src="${PASTA}${s.arq1}" alt="${s.nome}" loading="lazy">
        </div>
        <div class="produto-info">
          <div class="produto-cat">Seleções</div>
          <h3 class="produto-nome">${s.bandeira} ${s.nome} 2026</h3>
          <p class="produto-desc">Uniforme oficial — principal${s.arq2 ? ' + visitante disponível' : ''}.</p>
          <div class="produto-footer">
            <div class="produto-preco">${s.preco}</div>
            <div class="tamanhos">
              <div class="tam">P</div><div class="tam">M</div><div class="tam">G</div><div class="tam">GG</div>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    CLUBES.forEach(c => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.setAttribute('data-categoria', 'Clubes');
      card.innerHTML = `
        <div class="produto-img">
          <span class="produto-badge ${c.badge}">${c.badgeLabel}</span>
          <img src="${c.arq}" alt="${c.nome}" loading="lazy">
        </div>
        <div class="produto-info">
          <div class="produto-cat">Clubes</div>
          <h3 class="produto-nome">${c.nome}</h3>
          <p class="produto-desc">Camisa oficial do clube com qualidade premium.</p>
          <div class="produto-footer">
            <div class="produto-preco">${c.preco}</div>
            <div class="tamanhos">
              <div class="tam">P</div><div class="tam">M</div><div class="tam">G</div><div class="tam">GG</div>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

});

/* ============================================================
   TROCA PRINCIPAL ↔ VISITANTE
   ============================================================ */
const estadoUniforme = {};
window.trocarUniforme = function(id) {
  const mostraVisitante = !estadoUniforme[id];
  estadoUniforme[id] = mostraVisitante;

  const principal = document.getElementById(`${id}-principal`);
  const visitante = document.getElementById(`${id}-visitante`);
  const label     = document.getElementById(`${id}-label`);
  const btn       = document.getElementById(`${id}-btn`);

  if (mostraVisitante) {
    principal?.classList.add('oculto');
    visitante?.classList.remove('oculto');
    visitante?.classList.add('entrando');
    if (label) label.textContent = 'Ver Uniforme Principal';
    if (btn) btn.querySelector('.uniforme-btn-icon').textContent = '⚡';
  } else {
    visitante?.classList.add('oculto');
    principal?.classList.remove('oculto');
    principal?.classList.add('entrando');
    if (label) label.textContent = 'Ver Uniforme Visitante';
    if (btn) btn.querySelector('.uniforme-btn-icon').textContent = '⚡';
  }
  setTimeout(() => {
    principal?.classList.remove('entrando');
    visitante?.classList.remove('entrando');
  }, 400);
};

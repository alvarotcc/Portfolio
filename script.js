// Scroll suave para navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dados para destaques
const destaques = [
 {
  titulo: "Gerenciador Uber",
  descricao: "Sistema completo para controlar ganhos, despesas e resultados financeiros de motoristas de aplicativos.",
  video: "assets/gerenciador-uber.webm",
  link: "https://alvarotcc.github.io/Portfolio/"
},
{
  titulo: "Portifólios",
  descricao: "Portfólios modernos com animações, identidade visual exclusiva e design alinhado à sua profissão.",
  video: "assets/portifolio.webm",
  link: "https://alvarotcc.github.io/Portfolio/"
},
{
  titulo: "Agregador de links",
  descricao: "Centralize todos os seus links em uma única página com tema claro, escuro e visual personalizado para sua marca.",
  video: "assets/fast-links.webm",
  link: "https://alvarotcc.github.io/Fast-Work/"
},
{
  titulo: "Agentes de IA",
  descricao: "Automatize tarefas com agentes de IA inteligentes, aumentando produtividade e eficiência em processos.",
  imagem: "assets/agent-ia.jpg",
  link: "https://alvarotcc.github.io/Portfolio/"
},
{
  titulo: "Logomarcas",
  descricao: "Design de logomarcas  e slogans memoráveis que fortalecem a identidade visual e a presença da sua empresa.",
  imagem: "assets/logomarcas.jpg",
  link: "https://alvarotcc.github.io/Portfolio/"
},
{
  titulo: "Excellence page",
  descricao: "Landing page criada para destacar os serviços da empresa com design moderno e comunicação eficiente.",
  imagem: "assets/Excellence.jpg",
  link: "https://alvarotcc.github.io/Excellence-page/"
},
{
  titulo: "Site Tecnoar",
  descricao: "Website institucional desenvolvido para transmitir confiança, qualidade e fortalecer a presença digital.",
  imagem: "assets/Tecnoar.jpg",
  link: "https://alvarotcc.github.io/tecnoar_site/"
},
{
  titulo: "Mostruário digital",
  descricao: "Catálogo digital para apresentar produtos de forma prática, elegante e acessível em qualquer dispositivo.",
  imagem: "assets/Mostruario.jpg",
  link: "https://alvarotcc.github.io/photo_showcase/"
}
];

// Inserir destaques dinamicamente
const container = document.getElementById("destaques-container");
destaques.forEach(dest => {
  const card = document.createElement("a");
  card.href = dest.link;
  card.target = "_blank";
  card.className = "destaque-card";

const media = dest.video
  ? `
    <video autoplay loop muted playsinline>
      <source src="${dest.video}" type="video/webm">
    </video>
  `
  : `<img src="${dest.imagem}" alt="${dest.titulo}">`;

card.innerHTML = `
  ${media}
  <div class="destaque-texto">
    <h3>${dest.titulo}</h3>
    <p>${dest.descricao}</p>
  </div>
`;

  container.appendChild(card);
});
// Contadores animados ao entrar na tela — reinicia toda vez que entra
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = 100;

  const update = () => {
    const increment = target / speed;
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  // Reset visual para 0 antes de reiniciar
  counter.innerText = '0';
  update();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
      }
    });
  },
  {
    threshold: 0.6 // ativa quando 60% da seção estiver visível
  }
);

// Observar todos os contadores
counters.forEach(counter => observer.observe(counter));

// Mantenha apenas o event listener para os botões de scroll
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 768) {  // Apenas para desktop
    const sponsors = document.querySelector('.sponsors');
    const btnLeft = document.getElementById('scrollLeft');
    const btnRight = document.getElementById('scrollRight');

    btnLeft?.addEventListener('click', () => {
      sponsors.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnRight?.addEventListener('click', () => {
      sponsors.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});

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
    titulo: "Agregador de links",
    descricao: "Aloque todos seus links em um so lugar com tema dia e noite.",
    imagem: "assets/Agregador_links.jpg",
    link: "https://alvarotcc.github.io/Fast-Work/"
  },
  {
    titulo: "Excellence page",
    descricao: "Uma pagina desenvolvida para levar toda gama de serviços da empresa Excellence Restaurações.",
    imagem: "assets/Excellence.jpg",
    link: "https://alvarotcc.github.io/Excellence-page/"
  },
  {
    titulo: "Mostruario digital",
    descricao: "Uma opção para quem vende em casa e precisa mostrar seus produtos sem sair de casa.",
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

  card.innerHTML = `
    <img src="${dest.imagem}" alt="${dest.titulo}">
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

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    const sponsors = document.querySelector('.sponsors');
    const projects = [...sponsors.querySelectorAll('.project')];

    projects.forEach(proj => {
      const clone = proj.cloneNode(true);
      sponsors.appendChild(clone);
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const sponsors = document.querySelector('.sponsors');
  const btnLeft = document.getElementById('scrollLeft');
  const btnRight = document.getElementById('scrollRight');

  btnLeft.addEventListener('click', () => {
    sponsors.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    sponsors.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

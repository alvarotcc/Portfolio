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
    titulo: "Projeto em Destaque 1",
    descricao: "Descrição breve do projeto ou trabalho importante.",
    imagem: "assets/backgroundExellence.jpg",
    link: "https://link-destaque1.com"
  },
  {
    titulo: "Projeto em Destaque 2",
    descricao: "Outra descrição relevante e atrativa.",
    imagem: "assets/backgroundExellence.jpg",
    link: "https://link-destaque2.com"
  },
  {
    titulo: "Projeto em Destaque 3",
    descricao: "Um breve resumo visual e envolvente do projeto.",
    imagem: "assets/backgroundExellence.jpg",
    link: "https://link-destaque3.com"
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

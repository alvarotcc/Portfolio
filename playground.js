const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const queryBtns = document.querySelectorAll('.query-btn');

// Base de Conhecimento do Chatbot (com variação e follow-ups)
const knowledgeBase = {
  greetings: [
    "Olá! Como posso ajudar você e sua empresa hoje? 😊",
    "Oi! Bem-vindo ao Playground da Fast Work. O que você quer melhorar no seu negócio? 🚀",
    "Hey! Bora deixar seu atendimento e captação mais inteligentes? Me diz qual é o seu objetivo. ✨",
    "Fala! Quero entender rapidinho: você está buscando mais leads, mais vendas ou suporte mais ágil?"
  ],

  about: [
    "Eu sou o assistente virtual da Fast Work. Minha função é mostrar como IA e automação deixam o atendimento mais rápido e ajudam na captação de clientes.",
    "Sou o assistente do Playground da Fast Work. Posso te orientar sobre agentes de IA, automações e websites/landing pages voltados para conversão.",
    "Meu papel aqui é te ajudar a transformar conversa em processo: responder, qualificar e encaminhar com muito menos esforço.",
    "Eu ajudo a organizar sua demanda e sugerir o melhor caminho: IA/Agentes, automações, landing page ou integrações."
  ],

  services: [
    "A Fast Work entrega um ecossistema completo:\n🚀 IA e Agentes Inteligentes\n⚙️ Automações de Processos\n🌐 Websites e Landing Pages\n🎨 Identidade Visual e Design\n📊 Dashboards e Banco de Dados.",
    "Trabalhamos com:\n• Agentes de IA e chatbots com lógica\n• Automação de fluxos (WhatsApp/CRM/etc.)\n• Landing pages e websites para converter\n• Identidade visual e design\n• Dashboards e dados para decisão.",
    "Dá pra construir tudo em módulos: primeiro o fluxo e a mensagem certa, depois integrações, e por fim páginas e dashboards pra acompanhar resultados.",
    "Nosso foco é criar soluções que gerem impacto: atendimento mais rápido, lead qualificado e conversão mensurável."
  ],

  ia: [
    "Nossos Agentes de IA vão além do “chat simples”. Eles conseguem: \n• entender intenção do cliente\n• coletar dados essenciais\n• executar ações (ex.: classificar lead, sugerir próximos passos)\n• integrar com ferramentas do seu dia a dia.",
    "Agentes de IA podem analisar contexto, seguir roteiros, e automatizar tarefas repetitivas — para você focar no que é estratégico.",
    "Um agente de IA bem desenhado faz triagem, responde dúvidas comuns e encaminha com contexto (evita retrabalho).",
    "Se você já tem perguntas frequentes, a IA pode virar atendimento 24/7 e ainda registrar informações do lead pro seu time."
  ],

  automacao: [
    "Automatizamos fluxos repetitivos. Exemplo: lead chega no WhatsApp → IA qualifica → envia para o CRM → dispara follow-up. Você perde menos oportunidades e ganha tempo.",
    "Dá pra automatizar quase tudo que é repetitivo: triagem, perguntas frequentes, agendamento, captura de dados, atualização de CRM e notificações.",
    "Com automação, você reduz “fila invisível”: a mensagem chega, a ação acontece e o lead não fica sem resposta.",
    "Podemos automatizar etapas do seu funil: recepção → qualificação → proposta → agendamento → pós-venda."
  ],

  orcamento: [
    "Cada projeto é único — depende do objetivo e da complexidade. Para eu te orientar melhor, me diga:\n1) qual canal (WhatsApp, site, Instagram, etc.)?\n2) qual o objetivo (captar leads, suporte, agendamento, vendas)?\n3) existe prazo/urgência?",
    "Consigo estimar melhor quando entendo sua demanda. Me conta rapidinho: o que você quer automatizar (ou criar) e qual resultado você quer em 30 dias?",
    "Para orçamento eu preciso de 3 informações:\n1) seu cenário atual\n2) seu objetivo\n3) o que você já tem pronto (texto, imagens, CRM, etc.)",
    "Vamos fazer do jeito certo: você tem um exemplo real de lead/mensagem? Se tiver, me manda a ideia e eu te digo o melhor formato (agente, chatbot, landing page ou fluxo)."
  ],

  contato: [
    "Você pode falar diretamente com o Álvaro via WhatsApp ou e-mail. Os links estão no portfólio principal. Quer que eu te diga quais canais normalmente funcionam melhor para seu caso?",
    "Se preferir, fale com o Álvaro. No portfólio você encontra WhatsApp e e-mail. Me diga seu segmento que eu te direciono por onde começar.",
    "Pra começar rápido, me diga seu melhor canal: WhatsApp ou e-mail. Com isso eu já te aponto o caminho mais curto.",
    "Você prefere atendimento por mensagens (WhatsApp/Instagram) ou um fluxo por site/landing page?"
  ],

  thanks: [
    "Por nada! Quando quiser evoluir atendimento, captação ou automação, é só chamar. 🚀",
    "Imagina! Se surgir qualquer dúvida, eu sigo aqui pra ajudar.",
    "Valeu! Quando quiser, posso te sugerir uma estrutura de fluxo em etapas (bem prática).",
    "Obrigado! Quer que eu te ajude com o próximo passo: agente de IA ou automação no WhatsApp?"
  ],

  farewell: [
    "Até logo! Sucesso nos seus negócios! 👋",
    "Foi um prazer! Volte quando quiser. Estamos prontos pra te ajudar a escalar. 🚀",
    "Fechou! Quando quiser retomar, é só chamar.",
    "Até! Boa evolução no seu projeto — e vamos transformando conversa em resultado."
  ],

  howWorks: [
    "Como costuma funcionar:\n1) Entendemos sua dor e seu processo atual\n2) Mapeamos o fluxo (gatilhos, dados e regras)\n3) Criamos o agente/integrações necessários\n4) Testamos e ajustamos até ficar redondo\n5) Lançamos e fazemos melhorias contínuas.",
    "O caminho é bem prático: diagnóstico → protótipo/fluxo → implementação → testes → entrega. Dependendo do escopo, podemos iterar por etapas.",
    "A gente começa pelo que mais traz retorno: quais mensagens chegam, quais respostas convertem e onde o lead trava. Depois automatiza e mede.",
    "Funciona assim: você me mostra o cenário → eu organizo a jornada do lead → entregamos um fluxo que reduz trabalho e aumenta respostas úteis."
  ],

  followupLead: [
    "Pra eu te orientar melhor: esse lead chega por onde (WhatsApp, site, Instagram)?",
    "Qual seu produto/serviço principal e qual é o ticket médio (aproximado)?",
    "Você quer só responder dúvidas ou também qualificar e encaminhar pro seu time?",
    "Qual meta em 30 dias: mais leads, mais agendamentos, ou maior taxa de resposta?"
  ],

  default: [
    "Boa! Para eu te dar a resposta mais útil, me diga em qual área você quer evoluir:\n• IA/Agentes\n• Automações\n• Landing page/Website\n• Design/Identidade\n• Dashboards/Dados",
    "Entendi. Se quiser, eu te faço 2 perguntas rápidas pra te orientar melhor:\n1) qual seu objetivo?\n2) qual canal você quer usar primeiro (WhatsApp ou site)?",
    "Me conta o cenário: hoje você atende como (mensagens, formulário, CRM)? E o que está travando mais?",
    "Se você preferir, posso sugerir 3 caminhos: (1) agente de IA, (2) automação de mensagens, (3) landing page focada em conversão. Qual faz mais sentido agora?"
  ]
};

function createMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message');
  msgDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
  if (text) msgDiv.innerHTML = text;
  return msgDiv;
}

// Typewriter que NÃO mostra tags HTML literais (inclui <strong>)
async function typeWriter(element, text) {
  const raw = String(text);
  const parts = raw.split(/\n/);

  let partIndex = 0;
  let charIndex = 0;
  element.innerHTML = '';

  return new Promise(resolve => {
    function tick() {
      if (partIndex >= parts.length) {
        resolve();
        return;
      }

      const currentPart = parts[partIndex];

      if (charIndex < currentPart.length) {
        const ch = currentPart.charAt(charIndex);
        // Escapa < e > para não renderizar tags
        element.innerHTML += ch
          .replace(/</g, '<')
          .replace(/>/g, '>');

        charIndex++;
        setTimeout(tick, 20);
        return;
      }

      if (partIndex < parts.length - 1) {
        element.innerHTML += '<br>';
      }

      partIndex++;
      charIndex = 0;
      setTimeout(tick, 20);
    }

    tick();
  });
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function normalizeText(s) {
  return s
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

async function getBotResponse(input) {
  const cleanInput = normalizeText(input);

  const intents = [
    { name: 'greetings', match: ['oi', 'ola', 'olá', 'eai', 'bom dia', 'boa tarde', 'boa noite'] },
    { name: 'about', match: ['quem e voce', 'quem é voce', 'quem e você', 'quem voce', 'quem voce e', 'o que voce faz', 'quem e o bot', 'assistente'] },
    { name: 'services', match: ['servico', 'servicos', 'o que voces fazem', 'o que voce faz', 'vocês fazem', 'o que fazem', 'produtos', 'ecossistema', 'solucoes', 'soluções'] },
    { name: 'ia', match: ['ia', 'agente', 'agentes', 'chatbot', 'chat bot', 'inteligencia artificial', 'inteligencia'] },
    { name: 'automacao', match: ['automacao', 'automaçao', 'automacoes', 'automatico', 'fluxo', 'integracao', 'integração', 'crm', 'whatsapp', 'agendar', 'agendamento'] },
    { name: 'orcamento', match: ['preco', 'precos', 'preço', 'orcamento', 'orçamento', 'quanto custa', 'custa', 'valor', 'budget'] },
    { name: 'contato', match: ['contato', 'email', 'e-mail', 'whatsapp', 'falar', 'ligar', 'mensagem', 'canais'] },
    { name: 'thanks', match: ['obrigado', 'valeu', 'agradeco', 'agradeço', 'tmj', 'obrigada'] },
    { name: 'farewell', match: ['tchau', 'ate logo', 'até logo', 'bye', 'vou sair', 'sair'] },
    { name: 'howWorks', match: ['como funciona', 'processo', 'etapas', 'passo a passo', 'fazer', 'criacao', 'criação', 'como e feito'] },
  ];

  let matchedName = null;
  for (const intent of intents) {
    if (intent.match.some(term => cleanInput.includes(normalizeText(term)))) {
      matchedName = intent.name;
      break;
    }
  }

  let response;
  if (matchedName && knowledgeBase[matchedName]) {
    response = pickRandom(knowledgeBase[matchedName]);
    if (['orcamento', 'contato', 'services', 'ia', 'automacao'].includes(matchedName)) {
      if (Math.random() < 0.55 && knowledgeBase.followupLead?.length) {
        response += `\n${pickRandom(knowledgeBase.followupLead)}`;
      }
    }
  } else {
    response = pickRandom(knowledgeBase.default);
    if (Math.random() < 0.45 && knowledgeBase.followupLead?.length) {
      response += `\n${pickRandom(knowledgeBase.followupLead)}`;
    }
  }

  const typingDiv = document.createElement('div');
  typingDiv.classList.add('typing');
  typingDiv.innerText = 'Bot está digitando...';
  chatWindow.appendChild(typingDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  await new Promise(resolve => setTimeout(resolve, 650 + Math.random() * 850));

  chatWindow.removeChild(typingDiv);

  const botMsg = createMessage('', 'bot');
  chatWindow.appendChild(botMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  await typeWriter(botMsg, response);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function handleSendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = '';

  const userMsg = createMessage(text, 'user');
  chatWindow.appendChild(userMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  await getBotResponse(text);
}

sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSendMessage();
});

queryBtns.forEach(btn => {
  btn.addEventListener('click', async () => {
    if (btn.id === 'faq-toggle') return;
    const text = btn.dataset.suggest || btn.innerText;
    userInput.value = text;
    await handleSendMessage();
  });
});

const faqToggle = document.getElementById('faq-toggle');
const faqList = document.getElementById('faq-list');
if (faqToggle && faqList) {
  faqToggle.addEventListener('click', () => {
    const isHidden = faqList.style.display === 'none' || getComputedStyle(faqList).display === 'none';
    faqList.style.display = isHidden ? 'flex' : 'none';
  });

  if (window.innerWidth <= 480) {
    faqList.style.display = 'none';
  }
}

let didHideSuggestions = false;
async function hideSuggestionsOnce() {
  if (didHideSuggestions) return;
  const suggested = document.getElementById('suggested-queries');
  if (!suggested) return;
  if (window.innerWidth <= 480) {
    suggested.style.display = 'none';
    didHideSuggestions = true;
  }
}

const originalHandleSendMessage = handleSendMessage;
handleSendMessage = async function () {
  await hideSuggestionsOnce();
  return originalHandleSendMessage();
};


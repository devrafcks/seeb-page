  const chatbotButton = document.getElementById("chatbot-button");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChat = document.getElementById("close-chat");
  const messages = document.getElementById("messages");
  const quickButtons = document.querySelectorAll(".quick-btn");

  const respostas = {
    "O que é o SeeB?": "O SeeB é uma extensão gratuita que torna sites mais acessíveis para pessoas com deficiência visual, ajustando contraste, tamanho de fonte e leitura automática.",
    "Como instalar a extensão?": "Você pode instalar o SeeB diretamente pela Chrome Web Store. Basta buscar por 'SeeB - Acessibilidade Web' e clicar em 'Adicionar ao Chrome'.",
    "É gratuito?": "Sim! O SeeB é 100% gratuito e sempre será. Nosso objetivo é democratizar a acessibilidade na web.",
    "Como o SeeB ajuda na acessibilidade?": "O SeeB identifica elementos de baixa visibilidade e melhora contraste, tipografia e leitura de tela para usuários com deficiência visual parcial ou total."
  };

  chatbotButton.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
    chatbotButton.style.display = "none";
    addMessage("bot", "👋 Olá! Eu sou o assistente do SeeB. Posso te explicar como o projeto funciona ou ajudar com dúvidas rápidas. Selecione uma das opções abaixo:");
  });

  closeChat.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
    chatbotButton.style.display = "block";
    messages.innerHTML = "";
  });

  quickButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pergunta = btn.textContent;
      addMessage("user", pergunta);
      setTimeout(() => {
        addMessage("bot", respostas[pergunta]);
      }, 600);
    });
  });

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}
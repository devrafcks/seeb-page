document.addEventListener("DOMContentLoaded", function () {
    // FAQ 
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", function () {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    });
  
    // Scroll 
    document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  
    // Efeito de Texto 
    const revealText = document.getElementById("reveal-text");
    const container = document.getElementById("text-spotlight-container");
    let size = 0;
  
    if (revealText && container) {
      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        revealText.style.webkitMaskPosition = `${x - size / 2}px ${y - size / 2}px`;
      });
  
      container.addEventListener("mouseenter", () => {
        size = 200;
        revealText.style.webkitMaskSize = `${size}px`;
      });
  
      container.addEventListener("mouseleave", () => {
        size = 0;
        revealText.style.webkitMaskSize = `${size}px`;
        revealText.style.webkitMaskPosition = `-9999px -9999px`;
      });
    }
    
  
    // Chatbot
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotWindow = document.getElementById("chatbot-window");
    const closeChat = document.getElementById("close-chat");
    const messages = document.getElementById("messages");
    const quickButtons = document.querySelectorAll(".quick-btn");
  
    const respostas = {
      "O que é o SeeB?":
        "O SeeB é uma extensão gratuita que torna sites mais acessíveis para pessoas com deficiência visual, ajustando contraste, tamanho de fonte e leitura automática.",
      "Como instalar a extensão?":
        "Você pode instalar o SeeB diretamente pela Chrome Web Store. Basta buscar por 'SeeB - Acessibilidade Web' e clicar em 'Adicionar ao Chrome'.",
      "É gratuito?":
        "Sim! O SeeB é 100% gratuito e sempre será. Nosso objetivo é democratizar a acessibilidade na web.",
      "Como o SeeB ajuda na acessibilidade?":
        "O SeeB identifica elementos de baixa visibilidade e melhora contraste, tipografia e leitura de tela para usuários com deficiência visual parcial ou total.",
    };
  
    if (chatbotButton && chatbotWindow && closeChat && messages) {
      chatbotButton.addEventListener("click", () => {
        chatbotWindow.style.display = "flex";
        chatbotButton.style.display = "none";
        addMessage(
          "bot",
          "👋 Olá! Eu sou o assistente do SeeB. Posso te explicar como o projeto funciona ou ajudar com dúvidas rápidas. Selecione uma das opções abaixo:"
        );
      });
  
      closeChat.addEventListener("click", () => {
        chatbotWindow.style.display = "none";
        chatbotButton.style.display = "block";
        messages.innerHTML = "";
      });
  
      quickButtons.forEach((btn) => {
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
    }
  
    // Tema
    const html = document.documentElement;
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
  
    if (toggleBtn && icon) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        html.setAttribute("dark", "");
        icon.textContent = "light_mode";
      }
  
      toggleBtn.addEventListener("click", () => {
        const isDark = html.hasAttribute("dark");
  
        if (isDark) {
          html.removeAttribute("dark");
          localStorage.setItem("theme", "light");
          icon.textContent = "dark_mode";
        } else {
          html.setAttribute("dark", "");
          localStorage.setItem("theme", "dark");
          icon.textContent = "light_mode";
        }
      });
    }
  });

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 2000);
});


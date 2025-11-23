document.addEventListener("DOMContentLoaded", function () {
    
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
  
    
    document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          
          if (typeof gsap !== 'undefined' && gsap.to) {
            gsap.to(window, {
              duration: 1,
              scrollTo: target,
              ease: "power2.inOut"
            });
          } else {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  
    
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
    
  
    
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotWindow = document.getElementById("chatbot-window");
    const closeChat = document.getElementById("close-chat");
    const messages = document.getElementById("messages");
    const quickButtons = document.querySelectorAll(".quick-btn");
  
    const respostas = {
      "O que é o SeeB?":
        "O SeeB é uma extensão de acessibilidade que adapta qualquer site para melhorar leitura, contraste e foco diretamente no navegador.",

      "Por que ser open source importa?":
        "Por ser open source, todo o código do SeeB é público e auditável. Isso garante transparência total, elimina riscos de coleta oculta de dados e permite que desenvolvedores externos revisem, corrijam e aprimorem a extensão continuamente.",

      "Como o Seeb faz as alterações?":
        "O Seeb atua apenas na camada de apresentação do site. Ele injeta regras de estilo diretamente no DOM através do próprio navegador, utilizando CSS dinâmico e observadores de mutação para acompanhar mudanças na página. Nada do código original do site é modificado ou sobrescrito.",

      "Como posso ajudar?":
        "Você pode contribuir com melhorias, correções ou sugestões no repositório oficial do projeto. O link para o GitHub está disponível ao final da página.",
    };


    if (chatbotButton && chatbotWindow && closeChat && messages) {
      chatbotButton.addEventListener("click", () => {
        chatbotWindow.style.display = "flex";
        chatbotButton.style.display = "none";
        addMessage(
          "bot",
          "👋 Olá! Sou o assistente do SeeB. Estou aqui para explicar como a extensão funciona e responder dúvidas rápidas. Escolha uma das opções abaixo para continuar:"
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
    }, 1200);
});

 
document.addEventListener("DOMContentLoaded", function () {
    const copyBtn = document.getElementById("widget-copy-btn");
    const codeBlock = document.getElementById("widget-code-block");

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener("click", function () {
            const codeText = codeBlock.innerText;
            
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span class="material-symbols-outlined copy-icon">check</span><span class="copy-text">Copiado!</span>';
                copyBtn.style.background = "var(--color-accent)";
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            }).catch(() => {
                const textArea = document.createElement("textarea");
                textArea.value = codeText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                
                copyBtn.innerHTML = '<span class="material-symbols-outlined copy-icon">check</span><span class="copy-text">Copiado!</span>';
                copyBtn.style.background = "var(--color-accent)";
                
                setTimeout(() => {
                    copyBtn.innerHTML = '<span class="material-symbols-outlined copy-icon">content_copy</span><span class="copy-text">Copiar</span>';
                }, 2000);
            });
        });
    }
});


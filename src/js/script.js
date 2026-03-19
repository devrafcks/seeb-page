document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navbar = document.querySelector(".navbar");

    if (hamburgerBtn && navbar) {
        hamburgerBtn.addEventListener("click", () => {
            const isOpen = navbar.classList.toggle("open");
            hamburgerBtn.classList.toggle("open", isOpen);
            hamburgerBtn.setAttribute("aria-expanded", isOpen);
        });

        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target)) {
                navbar.classList.remove("open");
                hamburgerBtn.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            }
        });

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                navbar.classList.remove("open");
                hamburgerBtn.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                navbar.classList.remove("open");
                hamburgerBtn.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

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
    
    const html = document.documentElement;
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
  
    if (toggleBtn && icon) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== "light") {
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

document.getElementById("footer-year").textContent = new Date().getFullYear();

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


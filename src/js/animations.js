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
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });


    const revealText = document.getElementById('reveal-text');
    const container = document.getElementById('text-spotlight-container');
    let size = 0;

    if (revealText && container) {
        container.addEventListener('mousemove', e => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            revealText.style.webkitMaskPosition = `${x - size / 2}px ${y - size / 2}px`;
        });

        container.addEventListener('mouseenter', () => {
            size = 200; 
            revealText.style.webkitMaskSize = `${size}px`;
        });

        container.addEventListener('mouseleave', () => {
            size = 0; 
            revealText.style.webkitMaskSize = `${size}px`;
            revealText.style.webkitMaskPosition = `-9999px -9999px`;
        });
    }
});



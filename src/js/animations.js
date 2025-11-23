gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", function () {
    
    gsap.to("#stats-section .stat-card", {
        scrollTrigger: {
            trigger: "#stats-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "back.out",
        stagger: 0.15,
    });

    gsap.set("#stats-section .stat-card", {
        y: 50,
        opacity: 0,
    });

    gsap.utils.toArray("#stats-section .stat-number").forEach((element) => {
        const text = element.textContent;
        const isPercentage = text.includes("%");
        const numericValue = parseFloat(text);

        gsap.to(
            { value: 0 },
            {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    once: true,
                },
                value: numericValue,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                    if (isPercentage) {
                        element.textContent = this.targets()[0].value.toFixed(1) + "%";
                    } else {
                        element.textContent = this.targets()[0].value.toFixed(2);
                    }
                },
                onComplete: function () {
                    element.textContent = text;
                },
            }
        );
    });

});

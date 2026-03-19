



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


(function heroEntrance() {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-eyebrow",      { y: 16,  opacity: 0, duration: 0.5 })
          .from(".hero-title",        { y: 32,  opacity: 0, duration: 0.7 }, "-=0.3")
          .from(".hero-description",  { y: 22,  opacity: 0, duration: 0.6 }, "-=0.45")
          .from(".hero-actions",      { y: 18,  opacity: 0, duration: 0.5 }, "-=0.4")
          .from(".hero-media",        { y: 40,  opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .from(".hero-scroll-hint",  { opacity: 0, duration: 0.5 }, "-=0.1");
    });
})();


(function galleryReveal() {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".gallery-title", {
            y: 24, opacity: 0, duration: 0.65,
            scrollTrigger: { trigger: ".gallery-section", start: "top 78%", once: true },
        });

        ScrollTrigger.batch(".gallery-item", {
            onEnter: (els) =>
                gsap.from(els, {
                    opacity: 0,
                    scale: 0.94,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power2.out",
                }),
            start: "top 85%",
            once: true,
        });
    });
})();


(function sectionEntrances() {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {

        
        gsap.from(".features-text", {
            x: -40, opacity: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: ".features-section", start: "top 74%", once: true },
        });
        gsap.from(".features-image", {
            x: 40, opacity: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: ".features-section", start: "top 74%", once: true },
        });

        
        ScrollTrigger.batch(".stat-card", {
            onEnter: (els) =>
                gsap.from(els, { y: 30, opacity: 0, stagger: 0.12, duration: 0.65, ease: "power2.out" }),
            start: "top 86%",
            once: true,
        });

        
        gsap.from(".widget-header", {
            y: 28, opacity: 0, duration: 0.7,
            scrollTrigger: { trigger: ".widget-section", start: "top 76%", once: true },
        });
        ScrollTrigger.batch(".widget-card", {
            onEnter: (els) =>
                gsap.from(els, { y: 30, opacity: 0, stagger: 0.13, duration: 0.65, ease: "power2.out" }),
            start: "top 85%",
            once: true,
        });
        gsap.from(".widget-code-section", {
            y: 22, opacity: 0, duration: 0.65,
            scrollTrigger: { trigger: ".widget-code-section", start: "top 84%", once: true },
        });
        ScrollTrigger.batch(".widget-benefit", {
            onEnter: (els) =>
                gsap.from(els, { x: -20, opacity: 0, stagger: 0.1, duration: 0.55, ease: "power2.out" }),
            start: "top 87%",
            once: true,
        });

        
        gsap.from(".contribute-header", {
            y: 28, opacity: 0, duration: 0.7,
            scrollTrigger: { trigger: ".contribute-section", start: "top 76%", once: true },
        });
        ScrollTrigger.batch(".contribute-card", {
            onEnter: (els) =>
                gsap.from(els, { y: 30, opacity: 0, stagger: 0.13, duration: 0.65, ease: "power2.out" }),
            start: "top 85%",
            once: true,
        });

        
        gsap.from(".testimonial-content", {
            scale: 0.97, opacity: 0, duration: 0.75, ease: "power2.out",
            scrollTrigger: { trigger: ".testimonial-section", start: "top 75%", once: true },
        });

        
        gsap.from(".browsers-header", {
            y: 22, opacity: 0, duration: 0.65,
            scrollTrigger: { trigger: ".browsers-section", start: "top 80%", once: true },
        });
        ScrollTrigger.batch(".browser-icon", {
            onEnter: (els) =>
                gsap.from(els, { y: 22, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.4)" }),
            start: "top 87%",
            once: true,
        });

        
        gsap.from(".faq-header", {
            y: 22, opacity: 0, duration: 0.65,
            scrollTrigger: { trigger: ".faq-section", start: "top 80%", once: true },
        });
        ScrollTrigger.batch(".faq-item", {
            onEnter: (els) =>
                gsap.from(els, { x: -18, opacity: 0, stagger: 0.07, duration: 0.5, ease: "power2.out" }),
            start: "top 88%",
            once: true,
        });

        
        gsap.from(".footer-cta-box", {
            y: 30, opacity: 0, duration: 0.7,
            scrollTrigger: { trigger: ".footer-cta-section", start: "top 82%", once: true },
        });
    });
})();


gsap.utils.toArray("#features-section .stat-number").forEach((element) => {
    const finalText = element.textContent.trim();
    const isPercentage = finalText.includes("%");
    const cleanNumber = finalText.replace("%", "");
    const finalValue = parseFloat(cleanNumber);
    const decimalMatch = cleanNumber.match(/\.(\d+)/);
    const decimals = decimalMatch ? decimalMatch[1].length : 0;
    const counter = { value: 0 };

    gsap.to(counter, {
        scrollTrigger: { trigger: element, start: "top 85%", once: true },
        value: finalValue,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
            element.textContent = isPercentage
                ? counter.value.toFixed(decimals) + "%"
                : counter.value.toFixed(decimals);
        },
        onComplete: () => { element.textContent = finalText; },
    });
});

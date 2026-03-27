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

gsap.utils.toArray("#features-section .stat-number").forEach((element) => {
    const finalText = element.textContent.trim();
    const isPercentage = finalText.includes("%");

    const cleanNumber = finalText.replace("%", "");
    const finalValue = parseFloat(cleanNumber);
    const decimalMatch = cleanNumber.match(/\.(\d+)/);
    const decimals = decimalMatch ? decimalMatch[1].length : 0;

    const counter = { value: 0 };

    gsap.to(counter, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
        },
        value: finalValue,
        duration: 2.2, 
        ease: "power2.out",
        onUpdate: () => {
            const current = counter.value.toFixed(decimals);
            element.textContent = isPercentage ? current + "%" : current;
        },
        onComplete: () => {
            element.textContent = finalText; 
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#main1-a").classList.add("visible");

    const sections = [
        "#main1-a",
        "#main1-b",
        "#main1-c",
        
    ];

    function handleScrollEffect() {
        const windowHeight = window.innerHeight;
        const triggerShow = windowHeight * 0.9;
        const triggerHide = windowHeight * 0.2;

        sections.forEach((selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();

                if (rect.top < triggerShow && rect.bottom > triggerHide) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            });
        });
    }

    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const optimizedScroll = debounce(handleScrollEffect, 10);
    window.addEventListener("scroll", optimizedScroll);

    
    handleScrollEffect();
});
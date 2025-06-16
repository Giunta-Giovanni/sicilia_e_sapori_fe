export default function SlowScrollTo(elementRef, duration = 1000, offset = 0) {
    if (!elementRef?.current) return;

    const targetY = elementRef.current.getBoundingClientRect().top + window.scrollY + offset;
    const startY = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, startY + (targetY - startY) * easeInOutQuad(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
}
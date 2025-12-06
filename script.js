// Simple fade-in animation for sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "1s";
    observer.observe(sec);
});

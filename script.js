const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav?.classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    if (!topbar) return;
    topbar.classList.toggle("scrolled", window.scrollY > 6);

    let current = "";
    document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.getAttribute("id");
    });

    navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${current}`;
        link.classList.toggle("active", active);
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
);

document.addEventListener("DOMContentLoaded", () => {
    const revealNodes = document.querySelectorAll(
        ".hero-grid > *, .project, .timeline-item, .skill-block, .contact-panel > *, .card"
    );

    revealNodes.forEach((node) => {
        node.setAttribute("data-reveal", "true");
        observer.observe(node);
    });
});

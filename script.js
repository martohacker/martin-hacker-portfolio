const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

function setMenuOpen(isOpen) {
    if (!menuToggle || !mainNav) return;
    mainNav.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        setMenuOpen(!mainNav.classList.contains("open"));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);
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
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({
            behavior: prefersReduced ? "auto" : "smooth",
            block: "start"
        });
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
        ".hero-index li, .work-item, .about-grid > *, .rail-item, .freelance-block, .skill-line, .contact-panel > *"
    );

    revealNodes.forEach((node) => {
        node.setAttribute("data-reveal", "true");
        observer.observe(node);
    });

    wireContactForm();
});

function wireContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    const status = form.querySelector(".form-status");
    const submitBtn = form.querySelector('[type="submit"]');

    form.addEventListener("submit", async (event) => {
        if (!status) return;
        event.preventDefault();
        status.className = "form-status";
        status.textContent = "Enviando…";
        if (submitBtn) submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (!response.ok) throw new Error("form-error");
            status.textContent = "Mensaje enviado. Te respondo a la brevedad.";
            status.className = "form-status success";
            form.reset();
        } catch (error) {
            status.textContent = "No se pudo enviar. Probá de nuevo o escribime por email.";
            status.className = "form-status error";
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}

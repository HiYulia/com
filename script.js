document.addEventListener("DOMContentLoaded", () => {
  // Section fade-in on scroll
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((s) => observer.observe(s));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Typewriter effect for tagline
window.addEventListener("load", () => {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;
  const text = tagline.textContent;
  tagline.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    tagline.textContent += text[i++];
    if (i >= text.length) clearInterval(timer);
  }, 60);
});

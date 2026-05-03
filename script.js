// Purpose: Keep footer year current and add lightweight UI behavior enhancements.
(function initializeSiteUi() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const nav = document.getElementById("mainNav");
  const onScroll = () => {
    if (!nav) {
      return;
    }
    nav.classList.toggle("scrolled", window.scrollY > 8);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Purpose: Animate key sections as they enter view for a polished experience.
  const revealItems = document.querySelectorAll(
    ".section-space .container, .hero-image-card, .about-highlight, .service-card, .reason-item, .contact-panel"
  );

  revealItems.forEach((element) => {
    element.classList.add("fade-in-up");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -20px 0px",
    }
  );

  revealItems.forEach((element) => observer.observe(element));
})();

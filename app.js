document.querySelectorAll('.reveal').forEach((el) => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }).observe(el);
});

const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const comparison = document.querySelector('.comparison');
if (comparison) {
  comparison.onerror = () => {
    comparison.alt = 'Uploaded before/after image missing';
    comparison.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%230f172a' text-anchor='middle' dominant-baseline='middle' font-family='Inter,sans-serif'%3EUpload your before-after image to assets/before-after-uploaded.png%3C/text%3E%3C/svg%3E";
  };
}

document.getElementById('year')?.append(new Date().getFullYear());
const observer = new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('show')), {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const hero = document.querySelector('.hero');
if (hero) {
  const probe = new Image();
  probe.onload = () => hero.classList.remove('no-image');
  probe.onerror = () => hero.classList.add('no-image');
  probe.src = 'hero-image.svg';
}
const compare = document.querySelector('.comparison-img');
if (compare) {
  compare.onerror = () => {
    compare.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,sans-serif' font-size='44' fill='%230f172a'%3EBefore/After Image Missing%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,sans-serif' font-size='28' fill='%23334155'%3EAdd before-after.svg in repo root%3C/text%3E%3C/svg%3E";
  };
}

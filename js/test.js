
  const diagramSides = document.querySelectorAll('.diagram-side');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.4 });

  diagramSides.forEach(el => observer.observe(el));


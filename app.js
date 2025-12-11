const sections = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

sections.forEach(sec => observer.observe(sec));

// Optional features: theme toggle, project filters, modal, contact form validation
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => document.body.classList.toggle('dark'));
}

const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project');
if (buttons.length && cards.length) {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      cards.forEach(card => {
        card.style.display =
          type === 'all' || card.dataset.type === type ? 'block' : 'none';
      });
    });
  });
}

const projects = document.querySelectorAll('.project');
if (projects.length) {
  projects.forEach(project => {
    project.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      if (modal) modal.classList.add('open');
    });
  });
}

// contact form validation (guarded)
const form = document.querySelector('form');
if (form) {
  const email = form.querySelector('input[type="email"], input[name="email"]');
  if (email) {
    form.addEventListener('submit', (e) => {
      if (!email.value.includes('@')) {
        e.preventDefault();
        alert('Invalid email!');
      }
    });
  }
}

// ===== Navigation: mobile toggle, sticky nav, and scrollspy =====
(function(){
  const nav = document.querySelector('nav.main-nav');
  if(!nav) return;

  const toggle = document.getElementById('nav-toggle');
  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  // Toggle mobile menu
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Close mobile menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', ()=>{
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        if(toggle) toggle.setAttribute('aria-expanded','false');
      }
    });
  });

  // Scrollspy and sticky nav
  let navTop = nav.getBoundingClientRect().top + window.scrollY;

  function onScroll(){
    const fromTop = window.scrollY + 120; // offset to consider header height

    // Sticky class
    if(window.scrollY >= navTop){
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }

    // Active link highlighting
    let currentIndex = -1;
    sections.forEach((sec, i) => {
      if(!sec) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if(fromTop >= top && fromTop < bottom){
        currentIndex = i;
      }
    });

    links.forEach((link, i) => {
      if(i === currentIndex){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', ()=>{
    navTop = nav.getBoundingClientRect().top + window.scrollY;
  });

  // Initialize on load
  document.addEventListener('DOMContentLoaded', onScroll);
})();

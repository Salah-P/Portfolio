const loader = document.getElementById("loader");
const content = document.getElementById("content");
const progress = document.querySelector(".progress");
const cursorGlow = document.querySelector(".cursor-glow");
const themeToggle = document.getElementById("themeToggle");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

const certCards = document.querySelectorAll(".cert-card");
const certModal = document.getElementById("certModal");
const closeCert = document.getElementById("closeCert");
const modalTitle = document.getElementById("modalTitle");
const modalIssuer = document.getElementById("modalIssuer");
const modalCode = document.getElementById("modalCode");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
    content.classList.add("show");
  }, 1300);
});

/* Scroll Progress */

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progress.style.width = `${scrollPercent}%`;
});

/* Mouse Glow */

window.addEventListener("mousemove", e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

/* Theme Toggle */

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀";
});

/* Reveal Animations */

const revealItems = document.querySelectorAll(
  ".reveal, .skill-card, .project-card, .timeline-item, .edu-card, .cert-card"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");

          if (entry.target.classList.contains("timeline-item")) {
            entry.target.closest(".timeline").classList.add("show-line");
          }
        }, index * 90);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach(item => revealObserver.observe(item));

/* Certification Modal */

certCards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalIssuer.textContent = card.dataset.issuer;
    modalCode.textContent = card.dataset.code;
    certModal.classList.add("active");
  });
});

closeCert.addEventListener("click", () => {
  certModal.classList.remove("active");
});

certModal.addEventListener("click", e => {
  if (e.target === certModal) {
    certModal.classList.remove("active");
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    certModal.classList.remove("active");
  }
});

/* Particles */

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const count = Math.floor(window.innerWidth / 18);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.7,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(139, 92, 246, 0.65)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 120})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

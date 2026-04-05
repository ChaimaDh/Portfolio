function toggleMenu() { document.getElementById('sidebar').classList.toggle('active'); }
function scrollToSection(id) { document.getElementById(id).scrollIntoView(); }
const text = "CHAIMA";
let i = 0;
function typing() { if (i < text.length) { document.getElementById('typing').innerHTML += text.charAt(i); i++; setTimeout(typing, 80); } }
typing();
const skills = document.querySelectorAll('.skill-fill');
skills.forEach(skill => {
  skill.style.width = skill.getAttribute('data-skill') + '%';
});
const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1 });
faders.forEach(el => observer.observe(el));
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('formMsg').innerText = "Message sent 💖";
  e.target.reset();
}

// Scroll Reveal
const items = 
document.querySelectorAll(".section, .hero, .cta");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15}
);
items.forEach(item => {
    item.classList.add("fade-up");
    observer.observe(item);
});


// FAQ Accordion
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector("p");
        const isOpen = 
        answer.classList.contains("open");
    document.querySelectorAll(".faq-item p").forEach(p => {
        p.classList.remove("open");
    });
     if (!isOpen) {
        answer.classList.add("open");
     }
    });
});
// Contact Form
document.querySelector(".contact-form").addEventListener("submit", e =>{
    e.preventDefault();
    alert("Message sent successfully 🚀");
});

// Toggle theme
const toggleBtn = 
document.getElementById("theme-toggle");
             // Load saved theme
const savedTheme =
localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
} else {
    toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => { 
    const isDark =
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";   
});

// Scroll  to Top
const scrollBtn =
document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (window.scrollY> 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behavior: "smooth"});
});
// Scroll Spy
const sections = 
document.querySelectorAll("section");
const navLinks =
document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop -120;
     if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
     }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
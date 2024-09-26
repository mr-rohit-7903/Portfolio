//Navbar starts
//Change Active menu start
const listItems = document.querySelectorAll('.navbar li a');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        listItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

const sections = document.querySelectorAll('section');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height) {
                listItems.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar li a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
//Change Active menu ends
//Navbar Ends

// Menu toggle starts
const menuIcon = document.querySelector("#menu");
const navbar = document.querySelector("header .navbar");
const navLinks = document.querySelectorAll("header .navbar ul li a");

menuIcon.addEventListener("click", function() {
  navbar.classList.toggle("nav-toggle");
});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navbar.classList.remove("nav-toggle");
    });
  });
  
// Menu toggle ends
//Navbar ends

//Hero Section Starts
// Background Particles stats
// Used Particle Library
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000" // Particle color
        },
        "shape": {
            "type": "circle", // Shape of particles
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 10, 
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push" 
            },
            "resize": true
        }
    },
    "retina_detect": true
});
// background particles end  

// typed js effect starts
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "competitive programming"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// typed js effect ends

// tilt image starts
const tiltElements = document.querySelectorAll('.tilt');

tiltElements.forEach((tiltElement) => {
  tiltElement.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = tiltElement.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;

    const tiltX = (y / height) * 20 - 10; // tilt range from -10 to 10
    const tiltY = -(x / width) * 20 + 10; // tilt range from 10 to -10

    tiltElement.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  tiltElement.addEventListener('mouseleave', () => {
    tiltElement.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)'; // Reset tilt
  });
});

//tilt image ends
//Hero Section ends

//Skills Section Starts
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}
//Skills Section Ends

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

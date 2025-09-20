document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("s_9kXo4kO1AAsE41I");
    window.addEventListener("scroll", revealServices);
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    if (sectionId !== "home") {
        document.getElementById("footer").classList.add("hidden-footer");
    } else {
        document.getElementById("footer").classList.remove("hidden-footer");
    }
}

function startJourney() {
    alert("Welcome to FitZone Gym! Redirecting to Services...");
    showSection('services');
}

function showMembershipOptions() {
    document.getElementById('membership-options').style.display = 'block';
}const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Sending...';

  emailjs.sendForm('service_069fmzw', 'template_0zd2gg1', this)
    .then(() => {
      btn.value = 'Send';
      alert('✅ Your message has been sent successfully!');
      form.reset();
    }, (error) => {
      btn.value = 'Send';
      alert('❌ Failed to send message. Please try again.');
      console.error('FAILED...', error);
    });
});





function revealServices() {
    let serviceBoxes = document.querySelectorAll(".service-box");
    let windowHeight = window.innerHeight;

    serviceBoxes.forEach((box, index) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight - 50) {
            setTimeout(() => {
                box.classList.add("show");
                box.classList.remove("hide");
            }, index * 100);
        } else {
            box.classList.add("hide");
            box.classList.remove("show");
        }
    });
}

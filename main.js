//date time

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const spans = [
        document.getElementById('liveDateTime'),
        document.getElementById('liveDateTimeAbout'),
        document.getElementById('liveDateTimeContact'),
        document.getElementById('liveDateTimeFAQ')
    ];

    spans.forEach(el => {
        if (el) 
            el.textContent = formatted;
    })
}

updateDateTime();
setInterval(updateDateTime, 1000);


const currentlocation = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll('.nav-link').forEach(link => {
    let href = link.getAttribute('href');
    if(href && href.includes(currentlocation) && currentlocation !== "") {
        link.classList.add('active');
    }else if(href === "index.html" && currentlocation === "index.html") {
        link.classList.add('active');
    }

});

// submit form popup
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}


// FAQ Accordion
const faqquestions = document.querySelectorAll('.faq-question');
faqquestions.forEach(btn => {
    btn.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    });
});
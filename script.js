document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            const name = bookingForm.name.value.trim();
            const phone = bookingForm.phone.value.trim();
            if (name === "" || phone === "") {
                alert("Proszę wypełnić wszystkie pola!");
                e.preventDefault();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .banner-text, main h2, main p');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});


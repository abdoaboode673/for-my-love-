const events = document.querySelectorAll('.timeline-event');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.3
    }
);

events.forEach(event => {
    observer.observe(event);
});

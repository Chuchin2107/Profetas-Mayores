document.querySelectorAll('.more-info-button').forEach(button => {
    button.addEventListener('click', () => {
        const timelineItem = button.closest('.timeline-item');
        timelineItem.classList.toggle('active');
    });
});

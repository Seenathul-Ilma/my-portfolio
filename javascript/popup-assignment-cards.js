// Select all modal open buttons
const openButtons = document.querySelectorAll('.openModalBtn');
const closeButtons = document.querySelectorAll('.pop-close');
const modals = document.querySelectorAll('.modal-overlay');

// Open modal
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        // Show the modal
        modal.style.display = 'flex';

        // Add modal-open class to body
        document.body.classList.add('modal-open');
    });
});

// Close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-overlay');

        // Hide the modal
        modal.style.display = 'none';

        // Remove modal-open class from body if no other modals are visible
        const anyOpen = Array.from(modals).some(m => m.style.display === 'flex');
        if (!anyOpen) {
            document.body.classList.remove('modal-open');
        }
    });
});

// Optional: close modal when clicking outside modal-content
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});


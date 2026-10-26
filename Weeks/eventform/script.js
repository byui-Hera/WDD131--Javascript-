document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('type');
    const dynamicContainer = document.getElementById('dynamicFieldContainer');
    const dynamicLabel = document.getElementById('dynamicLabel');
    const dynamicInput = document.getElementById('dynamicInput');
    const eventDateInput = document.getElementById('eventDate');
    const ticketForm = document.getElementById('ticketForm');
    const errorContainer = document.getElementById('errorContainer');
    const ticketOutput = document.getElementById('ticketOutput');

    // Set minimum date for eventDate to tomorrow (later than current date)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    eventDateInput.min = `${yyyy}-${mm}-${dd}`;

    // Handle Type change event to show/modify dynamic fields
    typeSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'student') {
            dynamicContainer.classList.remove('hidden');
            dynamicLabel.textContent = 'Student I#';
            dynamicInput.value = '';
        } else if (selectedValue === 'guest') {
            dynamicContainer.classList.remove('hidden');
            dynamicLabel.textContent = 'Access Code';
            dynamicInput.value = '';
        } else {
            dynamicContainer.classList.add('hidden');
            dynamicInput.value = '';
        }
    });

    // Form Submission and Validation
    ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors = [];

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const type = typeSelect.value;
        const eventDate = eventDateInput.value;
        const dynamicValue = dynamicInput.value.trim();

        // Basic validations
        if (!firstName) errors.push('First Name is required.');
        if (!lastName) errors.push('Last Name is required.');
        if (!email) errors.push('Email is required.');
        if (!type) errors.push('Please select a ticket type.');

        // Date validation (must be later than current date)
        if (!eventDate) {
            errors.push('Event Date is required.');
        } else {
            const selectedDate = new Date(eventDate);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            if (selectedDate <= currentDate) {
                errors.push('Event Date must be later than the current date.');
            }
        }

        // Conditional validations
        if (type === 'student') {
            const studentRegex = /^\d{9}$/;
            if (!studentRegex.test(dynamicValue)) {
                errors.push('Student I# must be 9 digits.');
            }
        } else if (type === 'guest') {
            if (dynamicValue !== 'EVENT131') {
                errors.push('Access Code must be EVENT131.');
            }
        }

        // Display Errors or Success
        if (errors.length > 0) {
            errorContainer.innerHTML = '<ul>' + errors.map(err => `<li>${err}</li>`).join('') + '</ul>';
            errorContainer.classList.remove('hidden');
            ticketOutput.classList.add('hidden');
        } else {
            errorContainer.classList.add('hidden');
            errorContainer.innerHTML = '';

            // Show Ticket Information
            ticketOutput.innerHTML = `
                <h2>Ticket Created</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Date:</strong> ${eventDate}</p>
            `;
            ticketOutput.classList.remove('hidden');
        }
    });
});
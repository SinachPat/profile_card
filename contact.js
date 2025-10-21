// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    // Error message elements
    const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
    const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
    const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
    const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

    // Validation functions
    function validateName(name) {
        if (!name || name.trim() === '') {
            return 'Please enter your full name.';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters long.';
        }
        return '';
    }

    function validateEmail(email) {
        if (!email || email.trim() === '') {
            return 'Please enter your email address.';
        }
        // RFC 5322 compliant email regex (simplified)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address (e.g., name@example.com).';
        }
        return '';
    }

    function validateSubject(subject) {
        if (!subject || subject.trim() === '') {
            return 'Please enter a subject.';
        }
        if (subject.trim().length < 3) {
            return 'Subject must be at least 3 characters long.';
        }
        return '';
    }

    function validateMessage(message) {
        if (!message || message.trim() === '') {
            return 'Please enter your message.';
        }
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters long.';
        }
        return '';
    }

    // Show error message
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
    }

    // Clear error message
    function clearError(input, errorElement) {
        errorElement.textContent = '';
        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
    }

    // Real-time validation on blur
    nameInput.addEventListener('blur', function() {
        const error = validateName(this.value);
        if (error) {
            showError(this, nameError, error);
        } else {
            clearError(this, nameError);
        }
    });

    emailInput.addEventListener('blur', function() {
        const error = validateEmail(this.value);
        if (error) {
            showError(this, emailError, error);
        } else {
            clearError(this, emailError);
        }
    });

    subjectInput.addEventListener('blur', function() {
        const error = validateSubject(this.value);
        if (error) {
            showError(this, subjectError, error);
        } else {
            clearError(this, subjectError);
        }
    });

    messageInput.addEventListener('blur', function() {
        const error = validateMessage(this.value);
        if (error) {
            showError(this, messageError, error);
        } else {
            clearError(this, messageError);
        }
    });

    // Clear errors on input
    nameInput.addEventListener('input', function() {
        if (nameError.textContent) {
            clearError(this, nameError);
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailError.textContent) {
            clearError(this, emailError);
        }
    });

    subjectInput.addEventListener('input', function() {
        if (subjectError.textContent) {
            clearError(this, subjectError);
        }
    });

    messageInput.addEventListener('input', function() {
        if (messageError.textContent) {
            clearError(this, messageError);
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Hide success message if visible
        successMessage.hidden = true;

        // Validate all fields
        const nameErrorMsg = validateName(nameInput.value);
        const emailErrorMsg = validateEmail(emailInput.value);
        const subjectErrorMsg = validateSubject(subjectInput.value);
        const messageErrorMsg = validateMessage(messageInput.value);

        let hasErrors = false;

        // Display errors
        if (nameErrorMsg) {
            showError(nameInput, nameError, nameErrorMsg);
            hasErrors = true;
        } else {
            clearError(nameInput, nameError);
        }

        if (emailErrorMsg) {
            showError(emailInput, emailError, emailErrorMsg);
            hasErrors = true;
        } else {
            clearError(emailInput, emailError);
        }

        if (subjectErrorMsg) {
            showError(subjectInput, subjectError, subjectErrorMsg);
            hasErrors = true;
        } else {
            clearError(subjectInput, subjectError);
        }

        if (messageErrorMsg) {
            showError(messageInput, messageError, messageErrorMsg);
            hasErrors = true;
        } else {
            clearError(messageInput, messageError);
        }

        // If there are errors, focus on the first error field
        if (hasErrors) {
            if (nameErrorMsg) {
                nameInput.focus();
            } else if (emailErrorMsg) {
                emailInput.focus();
            } else if (subjectErrorMsg) {
                subjectInput.focus();
            } else if (messageErrorMsg) {
                messageInput.focus();
            }
            return;
        }

        // If validation passes, show success message
        successMessage.hidden = false;
        
        // Announce success to screen readers
        if (typeof announceToScreenReader === 'function') {
            announceToScreenReader('Your message has been sent successfully!');
        }

        // Log form data (in production, you would send this to a server)
        console.log('Form submitted successfully:');
        console.log({
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            timestamp: new Date().toISOString()
        });

        // Reset form after successful submission
        setTimeout(() => {
            form.reset();
            successMessage.hidden = true;
        }, 5000);

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        successMessage.focus();
    });
});

console.log('Contact form validation initialized');
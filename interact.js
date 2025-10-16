// Update current time in milliseconds
        function updateTime() {
            const timeElement = document.querySelector('[data-testid="test-user-time"]');
            const currentTime = Date.now();
            timeElement.textContent = currentTime;
            timeElement.setAttribute('datetime', new Date(currentTime).toISOString());
        }

        // Initialize time on load
        updateTime();

        // Update time every second
        setInterval(updateTime, 1000);

        // Optional: Image upload functionality
        const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
        
        // You can add file upload functionality here if needed
        // This is a placeholder for potential enhancement
        function handleImageUpload(file) {
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        // Keyboard accessibility enhancement
        document.addEventListener('keydown', (e) => {
            // Ensure all interactive elements are properly accessible
            const focusableElements = document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
            
            if (e.key === 'Tab') {
                // Tab navigation works by default, but we can add custom behavior if needed
            }
        });

        // Announce dynamic content changes to screen readers
        function announceToScreenReader(message) {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }

        // Log component initialization for debugging
        console.log('Profile Card Component Initialized');
        console.log('Current timestamp:', Date.now());
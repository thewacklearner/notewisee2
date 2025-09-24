 // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Download functions
        function downloadNotes(subject) {
            alert(`Downloading notes for: ${subject.replace('-', ' ').toUpperCase()}\nThis would normally trigger a download in a real implementation.`);
        }

        function downloadPaper(type) {
            alert(`Downloading ${type.replace('-', ' ')} papers\nThis would normally trigger a download in a real implementation.`);
        }

        // Active nav link highlighting
        window.addEventListener('scroll', function () {
            const sections = ['home', 'notes', 'papers'];
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Add click handlers for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

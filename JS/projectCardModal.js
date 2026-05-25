document.addEventListener('DOMContentLoaded', () => {
    // Get the modal elements
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modal-img');         // Get img element
    const modalTitle = document.getElementById('modal-title');     // Get h3 element
    const modalDescription = document.getElementById('modal-description'); // Get p element
    const modalLiveDemo = document.getElementById('modal-live-demo');
    const modalGitHub = document.getElementById('modal-github');
    const closeButton = document.querySelector('.close-button');

    // Get all project cards
    const projectCards = document.querySelectorAll('.projectCard');

    // Data for each project (include all details here now)
    const projectsData = {
        1: {
            img: './images/upgradedTicTacToeGame.jpg',
            title: 'Upgraded Tic-Tac-Toe: Fire vs Ice',
            description: 'A complete visual and functional reimagining of the classic strategy game. Built with a dynamic elemental theme, this project elevates standard game logic into an immersive, responsive frontend experience featuring animated character states, interactive mode selections, and local state tracking.',
            liveDemo: 'https://firevsice.netlify.app/', // REPLACE WITH REAL LINKS
            github: 'https://github.com/ArielArchitech/TicTacToe' // REPLACE WITH REAL LINKS
        },
        2: {
            img: './images/ToDoApp.jpg',
            title: 'Task Manager App',
            description: 'A responsive task management application that allows users to easily create, update, and delete tasks. Key features include priority setting, due dates, and filtering options to help users stay organized and productive.',
            liveDemo: 'https://arielarchitech.github.io/ToDoListApp/',
            github: 'https://github.com/ArielArchitech/ToDoListApp'
        },
        3: {
            img: './images/DictionaryAPI.jpg',
            title: 'Dictionary API',
            description: 'A sleek, responsive web application that fetches and delivers real-time language data. Built to handle complex asynchronous data streams, the app allows users to instantly search definitions, phonetic pronunciations, synonyms, and audio examples through a clean, minimalist user interface. It features a persistent user search history tracker, leveraging local storage to allow quick access to recently viewed terms across sessions.',
            liveDemo: 'https://dictionariapi.netlify.app',
            github: 'https://github.com/ArielArchitech/dictionaryAPI'
        },
        4: {
            img: './images/PhotoGalleryApp.jpg',
            title: 'Photo Gallery',
            description: 'An App that make you cherish the great moments of your life. Save an album cover and write the details of every picture to remember.',
            liveDemo: 'https://picgalleryapp.netlify.app/',
            github: 'https://github.com/ArielArchitech/pictureGalleryApp'
        },
        5: {
            img: './images/portfolioImgCard.jpg',
            title: 'Portfolio Website',
            description: 'This very portfolio website you are currently viewing! It is designed with a clean, modern aesthetic to showcase my skills, projects, and provide a comprehensive overview of my work and experience.',
            liveDemo: 'https://arielarchitech.github.io/PortfolioProject/',
            github: 'https://github.com/ArielArchitech/PortfolioProject'
        },
        6: {
            img: '../images/princessFrogger.jpg',
            title: 'Frogger Game',
            description: 'Enchanted Princess Frogger is a responsive, canvas-based web game built entirely from scratch using vanilla HTML5, CSS3, and JavaScript. The project takes the foundational mechanics of the classic 1981 arcade game Frogger and wraps them in an immersive fantasy narrative.',
            liveDemo: 'https://arielarchitech.github.io/theFrogPrince/',
            github: 'https://github.com/ArielArchitech/theFrogPrince'
        },
        7: {
            img: './images/chatApp.jpg',
            title: 'Chat Application',
            description: 'A real-time chat application built with WebSockets, enabling instant communication between users. It supports multiple chat rooms and a responsive design for various devices.',
            liveDemo: 'https://example.com/chat-demo',
            github: 'https://github.com/your-repo/chat-application'
        },
        8: {
            img: './images/HangMan.jpg',
            title: 'Hangman Game',
            description: 'A fully responsive Hangman game that fetches random words live from an external REST API, renders a progressive SVG gallows, and manages complete game state — guesses, wins, losses, and end conditions. Built with vanilla HTML, CSS, and JavaScript, structured across three separate files for clean separation of concerns.',
            liveDemo: 'https://arielarchitech.github.io/HangedMan/',
            github: 'https://github.com/ArielArchitech/HangedMan'
        }
    };

    // Add click event listener to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            const project = projectsData[projectId];

            // Console logs for debugging (keep them for now)
            console.log('Card clicked! Project ID:', projectId);

            if (project) {
                modalImg.src = project.img;
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;

                // Set links and show/hide buttons
                if (project.liveDemo && project.liveDemo !== '#') {
                    modalLiveDemo.href = project.liveDemo;
                    modalLiveDemo.style.display = 'inline-block';
                } else {
                    modalLiveDemo.style.display = 'none'; // Hide if no valid link
                }

                if (project.github && project.github !== '#') {
                    modalGitHub.href = project.github;
                    modalGitHub.style.display = 'inline-block';
                } else {
                    modalGitHub.style.display = 'none'; // Hide if no valid link
                }

                modal.style.display = 'flex'; // Use flex to center the modal-content
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                console.log('Modal display set to flex.'); // Debug log
            } else {
                console.error('Project data not found for ID:', projectId); // Debug log
            }
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        console.log('Modal closed by close button.'); // Debug log
    });

    // When the user clicks anywhere outside of the modal content, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            console.log('Modal closed by outside click.'); // Debug log
        }
    });

    // Optional: Add keyboard accessibility (Escape key to close modal)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Modal closed by Escape key.'); // Debug log
        }
    });
});

// ===== EmailJS Contact Form =====
(function () {
    emailjs.init({ publicKey: 'YgnO9qJdIiShuUMHa' });

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const notification = document.getElementById('formNotification');

    function showNotification(type, message) {
        notification.innerHTML = message;
        notification.className = 'formNotification ' + type;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameVal = document.getElementById('fullName').value;
        const emailVal = document.getElementById('email').value;
        const messageVal = document.getElementById('message').value;

        const now = new Date();
        const timeVal = now.toLocaleString('en-IL', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span><i class="fa fa-spinner fa-spin" aria-hidden="true"></i></span> Sending…';

        emailjs.send('service_h9imvuh', 'template_brl8obc', {
            name: nameVal,
            email: emailVal,
            message: messageVal,
            time: timeVal,
        })
            .then(function () {
                showNotification('success', `✅ Message sent! I\'ll get back to you soon. <br><br><br>`);
                form.reset();
            })
            .catch(function (error) {
                console.error('EmailJS error:', error);
                showNotification('error', ` Something went wrong. <br> Please try again or email me directly at <br> ariel.architech@gmail.com <br><br><br>`);
                document.getElementById('fullName').value = nameVal;
                document.getElementById('email').value = emailVal;
                document.getElementById('message').value = messageVal;
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span><i class="fa fa-paper-plane" aria-hidden="true"></i></span> Send message';
            });
    });
})();

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
            img: './images/projectE-C.jpg',
            title: 'E-commerce Store',
            description: 'A full-featured e-commerce platform with user authentication, product listings, a shopping cart, and secure checkout functionality. Built with modern web technologies for a seamless user experience.',
            liveDemo: 'https://example.com/ecommerce-demo', // REPLACE WITH REAL LINKS
            github: 'https://github.com/your-repo/ecommerce-store' // REPLACE WITH REAL LINKS
        },
        2: {
            img: '/images/projectManageApp.jpg',
            title: 'Task Manager App',
            description: 'A responsive task management application that allows users to easily create, update, and delete tasks. Key features include priority setting, due dates, and filtering options to help users stay organized and productive.',
            liveDemo: 'https://example.com/taskmanager-demo',
            github: 'https://github.com/your-repo/task-manager-app'
        },
        3: {
            img: 'https://placehold.co/400x300/00e6c2/1a1a1a?text=Weather+App',
            title: 'Weather Dashboard',
            description: 'An interactive weather dashboard that fetches real-time weather data using a public API. It displays current weather conditions and a 5-day forecast for any city, providing essential weather information at a glance.',
            liveDemo: 'https://example.com/weather-demo',
            github: 'https://github.com/your-repo/weather-dashboard'
        },
        4: {
            img: 'https://placehold.co/400x300/00e6c2/1a1a1a?text=Recipe+Finder',
            title: 'Recipe Finder',
            description: 'A culinary application that allows users to search for recipes by ingredients or dish name. It integrates with a powerful recipe API to provide a wide array of delicious and easy-to-follow recipes.',
            liveDemo: 'https://example.com/recipe-demo',
            github: 'https://github.com/your-repo/recipe-finder'
        },
        5: {
            img: './images/portfolioImgCard.jpg',
            title: 'Portfolio Website',
            description: 'This very portfolio website you are currently viewing! It is designed with a clean, modern aesthetic to showcase my skills, projects, and provide a comprehensive overview of my work and experience.',
            liveDemo: 'https://example.com/portfolio-demo',
            github: 'https://github.com/your-repo/portfolio-website'
        },
        6: {
            img: 'https://placehold.co/400x300/00e6c2/1a1a1a?text=Blog+Platform',
            title: 'Blog Platform',
            description: 'A simple yet robust blog platform where users can create, edit, and publish their posts. It features a user-friendly interface for content management and article display.',
            liveDemo: 'https://example.com/blog-demo',
            github: 'https://github.com/your-repo/blog-platform'
        },
        7: {
            img: 'https://placehold.co/400x300/00e6c2/1a1a1a?text=Chat+App',
            title: 'Chat Application',
            description: 'A real-time chat application built with WebSockets, enabling instant communication between users. It supports multiple chat rooms and a responsive design for various devices.',
            liveDemo: 'https://example.com/chat-demo',
            github: 'https://github.com/your-repo/chat-application'
        },
        8: {
            img: 'https://placehold.co/400x300/00e6c2/1a1a1a?text=Games',
            title: 'Game Showcase',
            description: 'A collection of small, engaging web-based games designed to demonstrate interactive front-end development skills and creative problem-solving in game design.',
            liveDemo: 'https://example.com/games-demo',
            github: 'https://github.com/your-repo/game-showcase'
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
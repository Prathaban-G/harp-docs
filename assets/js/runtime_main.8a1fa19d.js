document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.clean-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.closest('.codeBlockContainer_Ckt0').querySelector('pre');
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(() => {
                // Change icon and show "Copied" message
                const icons = button.querySelector('.copyButtonIcons_eSgA');
                let message = button.closest('.buttonGroup__atx').querySelector('.copyMessage');
                
                // Create message div if it doesn't exist
                if (!message) {
                    message = document.createElement('div');
                    message.className = 'copyMessage';
                    message.innerText = 'Copied!';
                    button.closest('.buttonGroup__atx').appendChild(message);
                }

                icons.classList.add('copied');
                message.classList.add('show');
                
                // Remove "show" class and "copied" icon class after 2 seconds
                setTimeout(() => {
                    icons.classList.remove('copied');
                    message.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current URL path
    const currentPath = window.location.pathname;
    console.log(`Current Path: ${currentPath}`);

    // Select all sidebar links
    const sidebarLinks = document.querySelectorAll('.menu__link');

    // Loop through each link and compare the href with the current URL path
    sidebarLinks.forEach(link => {
        console.log(`Checking link: ${link.href}`);
        if (link.href.includes(currentPath)) {
            console.log(`Match found: ${link.href}`);

            // Remove active class from all links
            sidebarLinks.forEach(link => link.classList.remove('menu__link--active'));

            // Add active class to the current link
            link.classList.add('menu__link--active');

            // Expand the parent submenu if necessary
            let parentUl = link.closest('ul.menu__list');
            if (parentUl) {
                let parentDiv = parentUl.previousElementSibling;
                if (parentDiv && parentDiv.classList.contains('menu__list-item-collapsible')) {
                    parentDiv.querySelector('a').setAttribute('aria-expanded', 'true');
                    parentUl.style.display = 'block';
                }
            }
        }
    });

    // Collapsible sidebar sections
    const collapsibleLinks = document.querySelectorAll('.menu__list-item-collapsible > .menu__link');

    collapsibleLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const sublist = link.parentElement.nextElementSibling;
            const isExpanded = link.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                sublist.style.display = 'none';
                link.setAttribute('aria-expanded', 'false');
            } else {
                sublist.style.display = 'block';
                link.setAttribute('aria-expanded', 'true');
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', (event) => {
    // Get all section headers (h2 elements in this case)
    const sections = document.querySelectorAll('.anchor');
    const tocLinks = document.querySelectorAll('.table-of-contents__link');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                tocLinks.forEach(link => link.classList.remove('table-of-contents__link--active'));

                // Add active class to the link that corresponds to the current section
                const id = entry.target.id;
                const activeLink = document.querySelector(`.table-of-contents__link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('table-of-contents__link--active');
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", function() {
    const button =  document.querySelectorAll('.backToTopButton_sjWU');
    button.addEventListener('click', function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) { // Adjust 300 to the desired scroll position to show the button
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
});


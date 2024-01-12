/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('main');

    const navbar = document.createElement('nav');
    navbar.className = 'navbar__menu';

    const navList = document.createElement('ul');
    navList.id = 'navbar__list';

    const sections = mainContainer.querySelectorAll('section');

    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#section${index + 1}`;
        anchor.textContent = section.getAttribute('data-nav');

        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });

        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navbar.appendChild(navList);
    document.querySelector('.page__header').appendChild(navbar);

    window.addEventListener('scroll', function () {
        let currentSectionId = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSectionId = section.id;
            }
        });

        navList.querySelectorAll('li').forEach((li) => {
            li.classList.remove('your-active-class');
        });

        if (currentSectionId) {
            const activeListItem = navList.querySelector(`[href="#${currentSectionId}"]`).parentNode;
            activeListItem.classList.add('your-active-class');
        }
    });
});

// Select all sections
const sections = document.querySelectorAll('section');

// Select the navigation list
const navList = document.getElementById('navbar__list');

// Populate the navbar with section links
sections.forEach((section) => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.href = `#${section.id}`;
  navLink.classList.add('menu__link');
  navLink.textContent = section.dataset.nav;

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
});

// Add event listener to each link for smooth scroll behavior
document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetSection = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  });
});

// Add scroll event listener to highlight active section
window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // Add active class to the navigation link that corresponds to the current section
  document.querySelectorAll('.menu__link').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });

  // Add active class to the current section
  sections.forEach((section) => {
    section.classList.remove('your-active-class');
    if (section.id === currentSection) {
      section.classList.add('your-active-class');
    }
  });
});


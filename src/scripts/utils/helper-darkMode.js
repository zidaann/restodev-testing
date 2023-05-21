const HelperDarkMode = () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const btnMode = document.querySelectorAll('.btn-mode');
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.nav');
  const footer = document.querySelector('.footer');
  // const hamburger = document.querySelector('.hamburger');

  dropdown.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
  const darkMode = (isDark) => {
    if (isDark === 'true') {
      document.body.classList.add('darkmode');
      navbar.classList.add('darkmode');
      footer.classList.add('darkmode');
      navMenu.classList.add('darkmode');
      // hamburger.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
      navbar.classList.remove('darkmode');
      footer.classList.remove('darkmode');
      navMenu.classList.remove('darkmode');
      // hamburger.classList.remove('darkmode');
    }
  };
  btnMode.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      darkMode(e.target.value);
    });
  });
};

export default HelperDarkMode;

// script.js
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const tab = this.getAttribute('data-tab');

      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));

      // Add active class to the clicked nav item
      this.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(content => content.style.display = 'none');

      // Show the selected tab content
      const selectedTab = document.getElementById(tab);
      if (selectedTab) {
        selectedTab.style.display = 'block';
      } else {
        console.error(`No element found with ID: ${tab}`);
      }
    });
  });
});

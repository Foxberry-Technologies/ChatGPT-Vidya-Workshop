function showTab(tabIndex) {
  const tabs = document.querySelectorAll('.navigation-tabs .tab');
  const tabContents = document.querySelectorAll('.tab-content .course-container');

  // Remove active class from all tabs and tab contents
  tabs.forEach(tab => tab.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  // Add active class to the selected tab and tab content
  tabs[tabIndex].classList.add('active');
  tabContents[tabIndex].classList.add('active');
}

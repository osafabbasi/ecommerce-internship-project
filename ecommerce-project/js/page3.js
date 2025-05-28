
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.addEventListener('click', function() {
        // Remove "active" from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add "active" to clicked tab
        this.classList.add('active');
      });
    });
  });

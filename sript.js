// Button behaviors

document.getElementById('open-link').addEventListener('click', function () {
  // open the same link as the first anchor but in a new tab
  window.open('https://www.wikipedia.org', '_blank', 'noopener');
});

document.getElementById('show-message').addEventListener('click', function () {
  alert('Hello! This is a sample message from Button 2.');
});
// script.js
document.getElementById('tahlilanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the death date from the input
  const deathDateInput = document.getElementById('deathDate').value;
  const deathDate = new Date(deathDateInput);

  // Calculate the event dates
  const eventDates = calculateTahlilanDates(deathDate);

  // Display the results
  displayResults(eventDates);
});

function calculateTahlilanDates(deathDate) {
  const events = [
    { name: 'Day 1', days: 0 },
    { name: 'Day 2', days: 1 },
    { name: 'Day 3', days: 2 },
    { name: 'Day 4', days: 3 },
    { name: 'Day 5', days: 4 },
    { name: 'Day 6', days: 5 },
    { name: 'Day 7', days: 6 },
    { name: '40th Day', days: 39 },
    { name: '100th Day', days: 99 },
    { name: '1000th Day', days: 999 },
  ];

  return events.map(event => {
    const eventDate = new Date(deathDate);
    eventDate.setDate(deathDate.getDate() + event.days);
    return { name: event.name, date: formatDate(eventDate) };
  });
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function displayResults(eventDates) {
  const resultsDiv = document.getElementById('results');
  const eventList = document.getElementById('eventList');

  // Clear previous results
  eventList.innerHTML = '';

  // Populate the list with event dates
  eventDates.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name}: ${event.date}`;
    eventList.appendChild(li);
  });

  // Show the results section
  resultsDiv.classList.remove('hidden');
}

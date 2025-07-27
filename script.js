let chart;

function logData() {
  const calories = parseInt(document.getElementById("caloriesInput").value);
  const steps = parseInt(document.getElementById("stepsInput").value);

  // Save to backend here using fetch (optional for now)
  updateChart(calories, steps);
}

function updateChart(calories, steps) {
  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("progressChart"), {
    type: 'bar',
    data: {
      labels: ['Calories', 'Steps'],
      datasets: [{
        label: 'Daily Progress',
        data: [calories, steps],
        backgroundColor: ['orange', 'blue']
      }]
    }
  });
}

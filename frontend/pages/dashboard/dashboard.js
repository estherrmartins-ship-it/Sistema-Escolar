/* Dashboard charts and minor interaction handling */
document.addEventListener('DOMContentLoaded', function(){
	// Growth chart (line)
	const growthCtx = document.getElementById('growthChart').getContext('2d');
	const growthData = {
		labels: ['0','1','2','3','4','5'],
		datasets: [{
			label: 'Alunos por mês',
			data: [260, 360, 310, 370, 335, 455],
			borderColor: '#0b6b72',
			pointBackgroundColor: '#0b6b72',
			pointBorderColor: '#fff',
			tension: 0.3,
			fill: false,
			pointRadius: 6,
			borderWidth: 2
		}]
	};
	const growthOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {legend: { display: false }},
		scales: {
			x: {
				grid: { display:false },
				ticks: { color: '#77878a' }
			},
			y: {
				beginAtZero: true,
				grid: { color: 'rgba(0,0,0,0.04)' },
				ticks: { color: '#77878a' }
			}
		}
	};
	new Chart(growthCtx, { type: 'line', data: growthData, options: growthOptions });

	// Performance (pie)
	const perfCtx = document.getElementById('performanceChart').getContext('2d');
	const perfData = {
		labels: ['Bom','Satisfatório','Excelente','Insuficiente'],
		datasets: [{
			data: [45, 15, 35, 5],
			backgroundColor: ['#0b4f56', '#1fc27a', '#f3734f', '#ff5244']
		}]
	};
	const perfOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: { legend: { display: false } }
	};
	new Chart(perfCtx, { type: 'pie', data: perfData, options: perfOptions });

	// Small behavioral nicety: highlight active nav item
	const navItems = document.querySelectorAll('.nav-item');
	navItems.forEach(item => item.addEventListener('click', (e) => {
		navItems.forEach(i => i.classList.remove('active'));
		e.currentTarget.classList.add('active');
	}));
});

const form = document.getElementById('login-form');
const btn = document.querySelector('.btn-submit');

if(form){
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		btn.disabled = true;
		const originalText = btn.textContent;
		btn.textContent = 'Entrando...';
		setTimeout(() => {
			btn.textContent = originalText;
			btn.disabled = false;
			alert('Simulação de login: implementação de backend pendente.');
		}, 1000);
	});
}


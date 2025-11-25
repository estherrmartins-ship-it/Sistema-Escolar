const form = document.getElementById('cad-form');
const btn = document.querySelector('#cad-form .btn-submit');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const password = form.querySelector('#password').value;
    const confirm = form.querySelector('#confirm').value;

    if (!name || !email || !password || !confirm) {
      alert('Preencha todos os campos.');
      return;
    }
    if (password.length < 8) {
      alert('Senha deve ter pelo menos 8 caracteres.');
      return;
    }
    if (password !== confirm) {
      alert('As senhas não coincidem.');
      return;
    }

    btn.disabled = true;
    const orig = btn.textContent;
    btn.textContent = 'Cadastrando...';
    setTimeout(() => {
      alert('Conta criada (simulação).');
      btn.disabled = false;
      btn.textContent = orig;
      window.location.href = '../../index.html';
    }, 900);
  });
}

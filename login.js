const students = {
  "Dilshad Hussain": "12320674"
};

function validateLogin() {
  const nameInput = document.getElementById('student-name').value.trim();
  const regNoInput = document.getElementById('reg-no').value.trim();
  const loginError = document.getElementById('login-error');
  const appSection = document.getElementById('app');
  const loginSection = document.getElementById('login-section');

  if (students[nameInput] && students[nameInput] === regNoInput) {
    loginSection.style.display = 'none';
    appSection.style.display = 'block';

    const welcomeMessage = document.createElement('p');
    welcomeMessage.id = 'welcome-message';
    welcomeMessage.className = 'text-lg font-semibold text-center mb-4';
    welcomeMessage.textContent = `Welcome, ${nameInput} (${regNoInput})!`;
    appSection.insertBefore(welcomeMessage, appSection.firstChild);

    console.log('Login successful');
  } else {
    loginError.classList.remove('hidden');
    loginError.textContent = 'Invalid name or registration number.';
  }
}


function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

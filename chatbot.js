const chatWindow = document.getElementById('chat-window');
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

function logout() {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const userMessage = input.value.trim();
  if (!userMessage) return;
  const sourceLang = document.getElementById('source-lang').value;
  const targetLang = document.getElementById('target-lang').value;
  displayMessage("You", userMessage);
  input.value = '';
  fetchTranslation(userMessage, sourceLang, targetLang);
}

function displayMessage(sender, message) {
  const messageEl = document.createElement('div');
  messageEl.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(messageEl);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function fetchTranslation(text, sourceLang, targetLang) {
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
  const data = await response.json();
  const translated = data.responseData.translatedText;
  displayMessage("Tutor", translated);
}

function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Speech recognition not supported');
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = document.getElementById('source-lang').value;
  recognition.start();
  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    document.getElementById('user-input').value = voiceText;
    sendMessage();
  };
  recognition.onerror = function (e) {
    alert("Voice recognition error: " + e.error);
  };
}

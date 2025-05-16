const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorEl = document.getElementById('error');
const togglePasswordBtn = document.getElementById('togglePassword');
const spinner = document.getElementById('spinner');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Load remembered username
window.onload = () => {
  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberMeCheckbox.checked = true;
  }
};

// Toggle password visibility
togglePasswordBtn.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePasswordBtn.textContent = type === 'password' ? 'Show' : 'Hide';
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  errorEl.textContent = "";

  // Basic validation
  if (username.length < 3 || password.length < 6) {
    errorEl.textContent = "Username must be 3+ chars and password 6+ chars.";
    return;
  }

  // Dummy credentials
  const validUsername = "admin";
  const validPassword = "password123";

  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";

    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      errorEl.textContent = "";

      // Save to localStorage if "Remember Me" is checked
      if (rememberMeCheckbox.checked) {
        localStorage.setItem('savedUsername', username);
      } else {
        localStorage.removeItem('savedUsername');
      }

      // You can redirect here
    } else {
      errorEl.textContent = "Invalid username or password.";
    }
  }, 1000); // simulate loading
});

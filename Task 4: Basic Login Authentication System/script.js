const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" }
];

function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");
  
  const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
  
  if (user) {
      // Successful login
      messageDiv.innerHTML = "Login successful!";
      messageDiv.style.color = "green";
      setTimeout(() => {
          window.location.href = "secure.html"; // Redirect to the secure page
      }, 1000);
  } else {
      // Failed login
      messageDiv.innerHTML = "Invalid username or password.";
      messageDiv.style.color = "red";
  }
}

function register() {
  const newUsernameInput = document.getElementById("new-username").value;
  const newPasswordInput = document.getElementById("new-password").value;
  const messageDiv = document.getElementById("message");

  // Check if the username is already taken
  const isUsernameTaken = users.some(u => u.username === newUsernameInput);

  if (!isUsernameTaken) {
      // Register the user (for simplicity, we're adding it to the local array)
      users.push({ username: newUsernameInput, password: newPasswordInput });
      messageDiv.innerHTML = "Registration successful!";
      messageDiv.style.color = "green";
      setTimeout(() => {
          window.location.href = "secure.html"; // Redirect to the secure page
      }, 1000);
  } else {
      // Username is already taken
      messageDiv.innerHTML = "Username is already taken.";
      messageDiv.style.color = "red";
  }
}

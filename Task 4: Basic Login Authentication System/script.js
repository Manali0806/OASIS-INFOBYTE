// Dummy user data (replace with a secure backend)
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user credentials are valid
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
}

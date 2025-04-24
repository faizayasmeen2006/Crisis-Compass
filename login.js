document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Simulate checking login (normally this would be from database)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.email === email && u.password === password);
  
    if (user) {
      alert('Login successful!');
      window.location.href = 'index.html'; // Back to home
    } else {
      alert('Invalid credentials.');
    }
  });
  
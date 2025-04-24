document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if user already exists
    const exists = users.some(u => u.email === email);
    if (exists) {
      alert('User already exists. Please login.');
      return;
    }
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful! You can now login.');
    window.location.href = 'login.html';
  });
  
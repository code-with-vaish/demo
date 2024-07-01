document.getElementById('loginForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    if (!email && !password)
        {
        errorElement.textContent = 'Both fields are empty';
        return;
    }

    if (!email) {
        errorElement.textContent = 'Email is invalid';
        return;
    }

    if (email && !password) {
        errorElement.textContent = 'Password is empty';
        return;
    }

    if (password.length < 6) {
        errorElement.textContent = 'Password length is less than 6';
        return;
    }

    alert('Login Successful');
});
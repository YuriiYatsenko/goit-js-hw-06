
const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled!');
} else {
    const formData = {
    email: emailInput.value,
    password: passwordInput.value,
    };

    console.log(formData);
}

  loginForm.reset();
});
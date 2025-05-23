// Submit form logic
document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    alert('The form is submitted');

    // Clear inputs
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    // Redirect to home.html after form submission
    window.location.href = 'home.html';
});

// Google Sign-in success handler
function onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 

    // Redirect to home.html after successful login
    window.location.href = 'home.html';
}

// Google Sign-in failure handler
function onFailure(error) {
    console.log(error);
}

// Render the Google sign-in button
function renderButton() {
    gapi.signin2.render('customBtn', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onSuccess,
        onfailure: onFailure
    });
}

// Initialize Google auth2
function start() {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        renderButton();
    });
}

window.onload = start;

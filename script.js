let users = [
    {
        email: 'joachim@test.de',
        password: '1234'
    }
];

function verifyUser() {
    console.log('verifyUser()');
    let givenPassword = document.getElementById('password').value;
    let givenUsername = document.getElementById('email').value;

    let user = users.find(u => u.email == givenUsername && u.password == givenPassword);

    if(user) {
        console.log(`User ${givenUsername} found.`);
        document.getElementById('msg').innerHTML = /*html*/`
        <span>User <b>${givenUsername}</b> found.</span>
        `;
    }
}


function addUser() {
    let newPassword = document.getElementById('new-password').value;
    let newUsername = document.getElementById('new-email').value;

    users.push({email: newUsername, password: newPassword});

    console.log(users);
    window.location.href = 'login.html?msg=' + newUsername + ' Du hast Dich erfolgreich registriert';
}
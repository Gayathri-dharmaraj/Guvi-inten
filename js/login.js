let checkname = localStorage.getItem('name') ? localStorage.getItem('name') : ''


function auth() {
    let email, psw;
    email = document.getElementById("email").value;
    console.log(email);
    pwd = document.getElementById("pwd").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email && v.pwd == pwd })) {
        alert("Login Pass");
        window.location.href = 'http://localhost/guvi/profile.html';
        let current_user = user_records.filter((v) => { return v.email == email && v.psw == pwd })[0]
        localStorage.setItem('name', current_user.name);
        localStorage.setItem('email', current_user.email);

    } else {
        alert('Login Fail');
    }

}
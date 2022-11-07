let checkname = localStorage.getItem('name') ? localStorage.getItem('name') : ''

console.log(checkname);
if (checkname != '') {
    alert('U need to Login First');
    window.location.href = "login.html";
}

function logout() {

    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href = "index.html";
}
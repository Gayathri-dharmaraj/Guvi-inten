var username = document.getElementById('email').value;
var password = document.getElementById('pwd').value;


var form = document.getElementById("registerform");

// function handleForm(event) {

//     event.preventDefault();
// }
// form.addEventListener('submit', handleForm);

function send() {

    let name, email, phone, pwd;
    name = document.getElementById("storename").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    pwd = document.getElementById("pwd").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email || v.pwd == pwd || v.phone == phone })) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "phone": phone,
            "pwd": pwd
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        // window.location.href = "http://localhost/guvi/login.html"
    }


    // localStorage.setItem("name", name)
    // localStorage.setItem("email", email)
    // localStorage.setItem("password", pwd)

    console.log("stored");


    $(document).ready(function() {
        console.log("vanthuten");
        $.ajax({
            url: 'http://localhost/guvi/php/register.php',
            type: 'POST',
            data: {

                name: $("input[name=name]").val(),
                phone: $("input[name=phone]").val(),
                email: $("input[name=email]").val(),
                password: $("input[name=password]").val(),
                action: "send"
            },
            success: function(response) {
                    console.log('sucesss')

                    alert('Your account has been created');
                    window.location.href = 'http://localhost/guvi/login.html';
                }
                // else if (response == 2) {
                //     alert("email is not Available");
                // } else {
                //     alert("failed");

        })
    })
}
// $("#register-form").submit(function(event) {
//     event.preventDefault();

//     $.ajax({

//         url: "/php/register.php",
//         type: post,
//         data: $("$register-form").serialize(),
//         beforeSend: function() {
//             $("register-form").find("input[type='submit']").val('Loading....');
//         },
//         success: function() {

//         }
//     })
// })



// $(document).ready(function() {
//     $('#save').click(function() {
//         $.ajax({

//             url: "register.php",
//             type: "post",
//             data: $("#registerform").serialize(),
//             success: function(d) {
//                 alert(d);
//             }
//         })
//     });
// });
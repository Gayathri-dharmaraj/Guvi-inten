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
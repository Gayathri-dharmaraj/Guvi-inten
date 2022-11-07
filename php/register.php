<?php

error_reporting(0);

echo"hellloo";
$conn = mysqli_connect("localhost" , "root" ,"","guvi");

if($_POST["action"] == "send"){
    send();
}
// send();
function send(){

    global $conn;

    $name = ($_POST["name"]);
$phone = ($_POST["phone"]);
$email = ($_POST["email"]);
$password = ($_POST["password"]);

if(empty($name) || empty($phone) || empty($email) || empty($password) ){

    echo "<script>alert('!Please Fill All the Field !')</script>";
    // exit;
}

$samemail = mysqli_query($conn, "SELECT * FROM users WHERE email = '$email'");
if(mysqli_num_rows($samemail) > 0 )
{
    echo "2";
    // exit;
}
$sql = "INSERT INTO users(name,phone,email,password) VALUES('$name','$phone','$email','$password')";
mysqli_query($conn, $sql);
// Output
// echo "1";
header("Location:/login.html");
}


// print_r($_POST);

// $conn = mysqli("localhost","root","","guvi");

//     $name = $_POST["name"];
// $phone =$_POST["phone"];
// $email = $_POST["email"];
// $password = $_POST["password"];

// $sql = "INSERT INTO users(name,phone,email,password) values('$name','$phone','$email','$password')";


// if($conn->query($sql)){

//     echo"<script>alert('sucesss');<script>";
// }
// else{
//     echo"<script>alert('Nooooooo sucesss');<script>";
// }
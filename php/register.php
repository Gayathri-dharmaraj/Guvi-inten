<?php

// error_reporting(0);

require './assests/vendor/autoload.php';  
// Creating Connection  
$con = new MongoDB\Client("mongodb://localhost:27017");  
// Creating Database  
$db = $con->Intenship;  
// Creating Collection  
$collection = $db->users;  
  
    $userdetails = array (
                
                name => $_POST['name'],
                mobile=>$_POST['phone'],
                email=>$_POST['email'],
                password=>$_POST['password']
            );
        
    // checking empty fields
    $errorMessage = '';
    foreach ($userdetails as $key => $value) {
        if (empty($value)) {
            $errorMessage .= $key . ' field is empty<br />';
        }
    }
    
    if ($errorMessage) {
        // print error message & link to the previous page
        echo '<span style="color:red">'.$errorMessage.'</span>';
        echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";  
    } else {
        //insert data to database table/collection named 'users'
        $collection->insert($userdetails);
        
        //display success message
        echo "<font color='green'>Data added successfully.";
        echo "<br/><a href='index.php'>View Result</a>";
    }




// echo"hellloo";
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



// require  './assests/vendor/autoload.php';

// $mongo = new MongoDBClient();

// $db = $connection->Intenship;
// $db->$mongo->local;
// $guvijob=$db->users;

// if($_POST)
// {
//     $insert = array(
//         name => $_POST['name'],
//         mobile=>$_POST['phone'],
//         email=>$_POST['email'],
//         password=>$_POST['password']
//     );
//     if($collection->insert($insert))
//     echo "<script>alert('Data is Inserted');</script>";

// else{
//     echo "<script>alert('Some Issue');</script>";
// }

// }
// else{
//     echo "<script>alert('No   data is stored');</script>";
// }

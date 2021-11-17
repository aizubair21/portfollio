

<?php 


//connect to database
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "contact_with_me";

$conn_to_server = mysqli_connect($hostname, $username, $password, $dbname);

if ($conn_to_server) {
    # code...
    echo "connect";
} else {
    echo 'not connect';
};


// $sql = "SELECT NAME from user_send_info";
// $result = $conn_to_server->query($sql);
// while ($row = $result->fetch_assoc()) {
//     echo $row["NAME"];
// }

$sender_name = $_POST["sender_name"];
$sender_mail = $_POST["sender_email"];
$sender_reason = $_POST["sender_selected_reason"];
$sender_message = $_POST["sender_message"];


$send_to_server = "INSERT INTO user_send_info (NAME, EMAIL, REASON, MESSAGE) VALUES ('$sender_name', '$sender_mail', '$sender_reason', '$sender_message')";

if ($conn_to_server->query($send_to_server) === TRUE) {
    echo "<br> new data inserted";
} else {
    echo "error :" .$conn_to_server->error;
}



$conn_to_server->close();


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact to me</title>
</head>
<body>
    
</body>
</html>


<?php
ini_set('display_errors',1); error_reporting(E_ALL);

$conn = mysqli_connect('localhost','root','','crisis_compass1');
if(!$conn){ die('DB error: '.mysqli_connect_error()); }

if($_SERVER['REQUEST_METHOD']==='POST'){
  $name   = trim($_POST['name']);
  $email  = trim($_POST['email']);
  $city   = trim($_POST['city']);
  $skills = trim($_POST['skills']);

  if(!$name||!$email||!$city||!$skills){ exit('❌  All required'); }
  if(!filter_var($email,FILTER_VALIDATE_EMAIL)){ exit('❌  Bad email'); }

  $stmt=$conn->prepare(
    'INSERT INTO volunteers (name,email,city,skills) VALUES (?,?,?,?)'
  );
  $stmt->bind_param('ssss',$name,$email,$city,$skills);
  echo $stmt->execute() ? '✅ Volunteer saved.' : '❌ '.$stmt->error;
  $stmt->close();
}
mysqli_close($conn);
?>

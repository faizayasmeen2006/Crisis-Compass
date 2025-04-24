<?php
ini_set('display_errors',1); error_reporting(E_ALL);

$conn = mysqli_connect('localhost','root','','crisis_compass1');
if(!$conn){ die('DB error: '.mysqli_connect_error()); }

if($_SERVER['REQUEST_METHOD']==='POST'){
  $name  = trim($_POST['name']);
  $email = trim($_POST['email']);
  $loc   = trim($_POST['location']);
  $type  = trim($_POST['disaster_type']);
  $desc  = trim($_POST['description']);

  if(!$name||!$email||!$loc||!$type||!$desc){ exit('❌  All required'); }
  if(!filter_var($email,FILTER_VALIDATE_EMAIL)){ exit('❌  Bad email'); }

  $stmt=$conn->prepare(
    'INSERT INTO reports (name,email,location,disaster_type,description) VALUES (?,?,?,?,?)'
  );
  $stmt->bind_param('sssss',$name,$email,$loc,$type,$desc);
  echo $stmt->execute() ? '✅ Report saved.' : '❌ '.$stmt->error;
  $stmt->close();
}
mysqli_close($conn);
?>

<?php
ini_set('display_errors',1); error_reporting(E_ALL);
host="localhost";
user="root";
password="";
db="crisis_compass1";
$conn = mysqli_connect($host, $user, $password, $db);
if ($conn) { 
    echo "sucessfull"; 
} else {
    echo " not connected";
}

/*
if($_SERVER['REQUEST_METHOD']==='POST'){
  $name   = trim($_POST['name']);
  $email  = trim($_POST['email']);
  $amount = floatval($_POST['amount']);
  $pay    = trim($_POST['payment_method']);
  $msg    = trim($_POST['message']);

  if(!$name||!$email||!$amount||!$pay){ exit('❌  All required'); }
  if(!filter_var($email,FILTER_VALIDATE_EMAIL)){ exit('❌  Bad email'); }

  $stmt=$conn->prepare(
    'INSERT INTO donations (name,email,amount,payment_method,message) VALUES (?,?,?,?,?)'
  );
  $stmt->bind_param('ssdss',$name,$email,$amount,$pay,$msg);
  echo $stmt->execute() ? '✅ Donation saved.' : '❌ '.$stmt->error;
  $stmt->close();
}
mysqli_close($conn);
*/
?>

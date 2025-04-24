<?php
session_start(); // Start the session
session_destroy(); // Destroy all session data (logout)
header("Location: login.html"); // Redirect back to login page
exit();
?>

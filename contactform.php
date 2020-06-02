<?php
$email = $_POST['email'];
$subject = $_POST['title'];
$message = $_POST['message'];
$formcontent=" From: $email  \n Subject: $subject \n Message: $message";
$recipient = "admin@jamaalpettway.com";
$subject = "Contact Form";
$mailheader = "From: $recipient \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
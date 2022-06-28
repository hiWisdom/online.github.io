<?php

if($isset($_POST['submit']))
{
$c1name = $_POST['name'];
$c1email = $_POST['email'];
$c1phone = $_POST['phone_number'];
$c1subject = $_POST['subject'];
$c1message = $_POST['message'];

$c1mailTo = "akpotororodje@gmail.com";
$c1headers =  "From: ".$c1email;

mail($c1mailTo, $c1name, $c1phone, $c1subject, $c1message, $c1headers);

header("Location: index.html");
}
?>

<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);


$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$message = urldecode($message);


$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$message = trim($message);

if (mail("plasmadynamics@plasmadynamics.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
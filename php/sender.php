<?php
if($_POST){
    $to = "info@oncapital.com";
    $body = "name: " .$_POST['name']. "\nemail: " .$_POST['email']. "\nphone: " .$_POST['phone']. "\nmessage: " .$_POST['message'];
    mail(
        $to,
        "OnCapital contact form filled",
        $body
    );
}
?>
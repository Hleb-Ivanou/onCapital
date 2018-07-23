<?php
if($_POST){
    $to = "xglebxivanovx@rambler.ru";
    $body = "name: " .$_POST['name']. "\nemail: " .$_POST['email']. "\nphone: " .$_POST['phone']. "\nmessage: " .$_POST['message'];
    mail(
        $to,
        "OnCapital contact form filled",
        $body
    );
}
?>
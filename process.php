<?php

    $to = "florparamidani@gmail.com";
    $from = $_REQUEST['name'];
    $subject = $_REQUEST['subject'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";

    $body = "Here is what was sent:"florparamidani@gmail.com"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send ="florparamidani@gmail.com"($to, $subject, $body, $headers);

?>

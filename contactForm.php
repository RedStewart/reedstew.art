<?php
$name = $_POST["name"];
$email = $_POST['email'];
$message = $_POST['message'];
  
if(!empty($name) && !empty($email) && !empty($message)){
    //all of the text boxes have some content

    if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
        //failed
        echo 1;
    } else {
        $toEmail = "reed@nowlivemail.com";
        $subject = "Contact Request From ".$name;
        $body = "<h2>Contact Request</h2>
            <h4>Name:</h4><p>".$name."</p>
            <h4>Email:</h4><p>".$email."</p>
            <h4>Message:</h4><p>".$message."</p>";

        //set headers
        $headers = "MIME-Version: 1.0"."\r\n";
        $headers .= "Content-Type:text/html;charset=UTF-8"."\r\n";
        $headers .= "From: ".$name."<".$email.">"."\r\n";

        if(mail($toEmail, $subject, $body, $headers)){
            echo 2;
        } else {
            echo 3;
        }
    }   

} else {
    //failed
    echo 0;
}

?>
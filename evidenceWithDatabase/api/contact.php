<?php
include_once('database.php');
$postdata = file_get_contents("php://input");
$result =  json_decode($postdata);

if (isset($result->name) && isset($result->email) && isset($result->message) && isset($result->number)  ) {

    $name =  $result->name;
    $email =  $result->email;
    $number =  $result->number;
    $message =  $result->message;


    $db->query("INSERT INTO inquiry_list VALUES(NULL, '$name' , '$number', '$email',  '$message',  '', now(), '')");


    if ($db->affected_rows > 0) {
        echo json_encode(['msg' => "Successfully Inserted"]);
    }
} else {
    echo json_encode(['msg' => "No fields can be blank"]);
}



?>
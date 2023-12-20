<?php 

$dbc = mysqli_connect('localhost', 'root', '', 'authorization');

$data = json_decode(file_get_contents('php://input'), true);
$login = $data['login']
$password = $data['password'];

$query = "INSERT INTO users(login, password)
VALUES ('$login', '$password')";

$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Feedback has been sent'));

mysqli_close($dbc);
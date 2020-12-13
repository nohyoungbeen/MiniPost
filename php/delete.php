<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);

$sql = "DELETE FROM minipost WHERE id={$_GET['id']}";
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}
//echo "삭제 성공"; // text
//json
// {"result": "success"}

// 1. array
// $json = [];
// $json['result'] = 'success';

$json = array("result" => "success");
// 2. json encode
echo json_encode($json);
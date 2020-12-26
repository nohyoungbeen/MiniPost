<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);

$sql = "UPDATE minipost SET  `like`={$_GET['like']} WHERE id={$_GET['id']}";
// update minipost set like = 0 where id = 16; // black -> red
// echo $sql;
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}
?>
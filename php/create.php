<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);
$title = $_GET['title']; //hi
$content = $_GET['content']; // hello
$sql = "INSERT INTO minipost (title, content) VALUE ('$title','$content')";
$result = mysqli_query($conn, $sql); // insert
// echo $result;

if($result == false){
    echo mysqli_error($conn);
    
}else{
    header( 'Location: http://127.0.0.1/MINI-POSTS/index.html' );
}

// $id = mysqli_insert_id($conn);
// echo $id;
?>

<!-- http://127.0.0.1/MINI-POSTS/php/create.php?title=hi?&content=hello? -->
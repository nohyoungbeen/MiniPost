<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);

$sql = "UPDATE minipost SET title='{$_GET['title']}', content='{$_GET['content']}' WHERE id={$_GET['id']}";
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}else{
    header( 'Location: http://127.0.0.1/MINI-POSTS/index.html' );
}
?>
<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);

// update.php?title=aaa&content=bbb&id=3
$title = $_GET['title'];
$content = $_GET['content'];

$sql = "UPDATE minipost SET title = '{$title}', content = '{$content}' WHERE id={$_GET['id']}";
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}

// header('Location: http://127.0.0.1/MINI-POSTS/index.html');
echo "success";
?>
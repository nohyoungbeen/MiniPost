<?php
// 1. select id
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'study'
);

$sql = "select * from minipost where id =".$_GET['id'];
$result = mysqli_query($conn, $sql); 
// echo $result;
$row = mysqli_fetch_array($result);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/miniposts.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <a href="./index.html">뒤로가기</a>
        <h1>Edit Post</h1>
        <form action="php/update.php" method="get">
            <div class="mainbox">
                <button type="submit" >수정</button>
                <input name="id" type="hidden" value= "<?php echo $row['id']?>">
                <div>
                    <input type="text" name="title" id="title" placeholder="text" value="<?php echo $row['title']?>">
                </div>
                <div>
                    <textarea name="content" id="content" cols="30" rows="10" placeholder="내용"><?php echo $row['content']?></textarea>
                </div>
            </div>
        </form>
    </div>
    <script src="./validation.js"></script> 
    <script>
        const form = document.querySelector('form')

        form.addEventListener('submit', function(e){
            nullCheck(e, form.title.value, form.content.value)
        })
    </script>
</body>
</html>
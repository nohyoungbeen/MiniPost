<?php
$id = $_GET['id'];
$title = $_GET['title'];
$content = $_GET['content'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/miniposts.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <a href="./index.html">뒤로가기</a>
        <h1>Edit Post</h1>
        <div class="mainbox">
            <button id="updateButton">Share</button>
            <div>
                <input type="hidden" id="id" value="<?php echo $id; ?>">
                <input type="text" id="title" placeholder="text" value="<?php echo $title; ?>">
            </div>
            <div>
                <textarea name="" id="content" cols="30" rows="10" placeholder="내용"><?php echo $content; ?></textarea>
            </div>
        </div>
    </div>
    <script>
        const updateButtion = document.querySelector('#updateButton')
        updateButtion.addEventListener('click',function(){
            const id= document.querySelector('#id').value
            const title = document.querySelector('#title').value
            const content = document.querySelector('#content').value
            updateAjax(id, title, content)
        })


    function updateAjax(id, title, content){
        $.ajax({
            url : `http://127.0.0.1/MINI-POSTS/php/update.php?id=${id}&title=${title}&content=${content}`,
            typel: "get",
            dataType : "text",
            success : function(){
                // console.log('성공')
                location.href = "http://127.0.0.1/MINI-POSTS/index.html" 
            }
        })
    }

    </script>
    <script src="./index.js"></script>
</body>
</html>
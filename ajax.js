function selectAjax(){
    $.ajax({
        url : 'http://127.0.0.1/MINI-POSTS/php/select.php', 
        type : "get",
        dataType : "json",
        success : function(minipost){
            for(let i = 0; i < minipost.length; i ++){
                render(minipost[i])
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}

function addAjax(){
    $.ajax({
        url : 'http://127.0.0.1/MINI-POSTS/php/create.php', 
        type : "get",
        dataType : "json",
        success : function(minipost){
            for(let i = 0; i < minipost.length; i ++){
                render(minipost[i])
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}

function removeAjax(e, id){
    $.ajax({
        type:'GET',
        url : 'http://127.0.0.1/MINI-POSTS/php/delete.php?id='+id,
        dataType : 'json',
        success: function(){
            deleteDiv(e.target.parentNode)
        }
    })
}


function likeAjax(id, like, likeButton){
    if(like == 0){
        like = 1;
    }else{
        like = 0;
    }
    $.ajax({
        type:'GET',
        url : `http://127.0.0.1/MINI-POSTS/php/like.php?id=${id}&like=${like}`,
        dataType : 'text',
        success : function(){
            likeButton.classList.toggle("red");
        }
    })
}
function selectAjax(){
    $.ajax({
        url : 'http://127.0.0.1/MINI-POSTS/php/select.php', 
        type : "get",
        dataType : "json",
        success : function(minipost){
            for(let i = 0; i < minipost.length; i ++){
                render(minipost[i])
                console.log(minipost);
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}


http://127.0.0.1/MINI-POSTS/php/create.php?title=?&content=?

function selectAjax(){
    $.ajax({
        url : 'http://127.0.0.1/MINI-POSTS/php/create.php', 
        type : "get",
        dataType : "json",
        success : function(minipost){
            for(let i = 0; i < minipost.length; i ++){
                render(minipost[i])
                console.log(minipost);
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}
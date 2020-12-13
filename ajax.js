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


//http://127.0.0.1/MINI-POSTS/php/create.php?title=?&content=?

function addAjax(){
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


// function updateAjax(e, id, completed){
//     if(completed == 0){
//         completed = 1
//     }else if(completed == 1){
//         completed = 0
//     }
//     $.ajax({
//         type:'GET',
//         url : `http://127.0.0.1/TMINI-POSTS/php/update.php?id=${id}&content=${content}`,
//         dataType : 'json',
//         success: listColor(e)
//     })
// }
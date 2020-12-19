selectAjax()

function selectAjax(){
    $.ajax({
        url : 'http://127.0.0.1/MINI-POSTS/php/select.php', 
        type : "get",
        dataType : "json",
        success : function(minipost){
            for(let i = 0 ; i < minipost.length ; i ++){
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
        dataType : 'text',
        success: function () {
            // deleteDiv(e.target.parentNode)
            e.target.parentNode.remove()
        }
    })
}

// function createAjax(){
//     $.ajax({
//         type:'GET',
//         url : 'http://127.0.0.1/MINI-POST/php/add.php?miniost='+minipostValue.value,
//         dataType : 'json',
//         success: function(id) {
//             createTodo(id, minipostValue.value, 0)
//         }
//     })
// }


function render(minipost) {
    const list = document.querySelector('#list')
    const div = document.createElement('div')
    const id = minipost.id
    const title = minipost.title
    const content = minipost.content
    list.append(div)
    div.innerHTML += `<h2>${minipost.title}</h2><a href="./update.php?id=${id}&title=${title}&content=${content}">수정</a><button id="deleteButton">삭제</button><p>${minipost.content}</p><i class="far fa-heart"></i>`;

    const deleteButton = div.querySelector('button')
    deleteButton.addEventListener('click', function(e){
        //deleteDiv(e.target.parentNode)
        let removeThis = confirm('삭제하시겠습니까?')
        if(removeThis == true){
            // e.target = deleteButton
            // e.target.parentNode = div
        
            removeAjax(e, id)
        }
    })  

    const likeButton = div.querySelector('i')

    likeButton.addEventListener('click', function(e){
        likeButtonClick(e.target)
    })
}

// function deleteDiv(div){
//     div.remove()
// }

function likeButtonRed(likeButton){
    likeButton.classList.add("red")
}

function likeButtonBlack(likeButton){
    likeButton.classList.add("black")
}


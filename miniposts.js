
// delete from minipost where title = '안녕하세요'
function render(minipost) { // 
    const list = document.querySelector('#list')
    const div = document.createElement('div')

    list.append(div)
    div.innerHTML += `<h2>${minipost.title}</h2><a href="./update.php?id=${minipost.id}">수정</a><button id="deleteButton">삭제</button><p>
    ${minipost.content}</p><i class="far fa-heart"></i>`;

    const deleteButton = div.querySelector('button')
    const id = minipost.id
    deleteButton.addEventListener('click', function(e){
        let removeThis = confirm('삭제하시겠습니까?')
        if(removeThis == true){
            removeAjax(e, id)
        }
    })

    const likeButton = div.querySelector('i')

    likeButton.addEventListener('click', function(e){
        likeButtonClick(e.target)
    })
}


function deleteDiv(div){
        div.remove()
}

function likeButtonClick(likeButton){
    likeButton.classList.toggle("red")
}


selectAjax()



// delete from minipost where title = '안녕하세요'
function render(minipost) { // o
    const list = document.querySelector('#list')
    const div = document.createElement('div')

    list.append(div)
    div.innerHTML += `<h2>${minipost.title}</h2><a href="./update.html">수정</a><button id="deleteButton">삭제</button><p>
    ${minipost.content}</p><i class="far fa-heart"></i>`;

    const deleteButton = div.querySelector('button')
    deleteButton.addEventListener('click', function(e){
        deleteDiv(e.target.parentNode)
    })

    const likeButton = div.querySelector('i')

    likeButton.addEventListener('click', function(e){
        likeButtonClick(e.target)
    })
}



function deleteDiv(div){
    let removeThis = confirm('삭제하시겠습니까?')
    if(removeThis == true){
        div.remove()
    }
}

function likeButtonClick(likeButton){
    likeButton.classList.toggle("red")
}

selectAjax()
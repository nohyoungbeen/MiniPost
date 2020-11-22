function render() {
    const list = document.querySelector('#list')
    list.innerHTML += '<div><h2>안녕하세요</h2><a href="./update.html">수정</a><button id="deleteButton">삭제</button><p>내용을 입력부분</p><i class="far fa-heart"></i></div>';

    const deleteButton = document.querySelectorAll('button')

    for(let i = 0 ; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', function(){
            deleteThis(deleteButton[i].parentNode)
        })

    const likeButton = document.querySelectorAll('i')

    for(let i = 0 ; i < likeButton.length; i++ ){
        likeButton[i].addEventListener('click', function(){
            likeButtonClick(div[i])
        })
        }
    }
}
render()
render()
render()

function deleteThis(div){
    let removeThis = confirm('삭제하시겠습니까?')
    if(removeThis == true){
        div.remove()
    }
}

function likeButtonClick(likeButton){
    //alert("좋아요.")
    likeButton.classList.add("red")
}

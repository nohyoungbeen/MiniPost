const data = [
    {
        title: '안녕하세요',
        content: '내용',
        like: 0, // 0: 검은색, 1: 빨간색
    }, {
        title: '안녕하세요2',
        content: '내용2',
        like: 1, // 0: 검은색, 1: 빨간색
    }
]

function render() {
    const list = document.querySelector('#list')
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        list.append(div)
        div.innerHTML += `<h2>${data[i].title}</h2><a href="./update.html">수정</a><button id="deleteButton">삭제</button><p>${data[i].content}</p></p><i class="far fa-heart"></i>`;
        const deleteButton = div.querySelector('button')
        deleteButton.addEventListener('click', function(e){
            deleteDiv(e.target.parentNode)
        })
        const likeButton = div.querySelector('i')
        likeButton.addEventListener('click', function(e){
            if(data[i].like == 0){
                data[i].like = 1
                likeButtonRed(e.target)
            }else if(data[i].like == 1){
                data[i].like = 0
                likeButtonBlack(e.target)
            }
        })
    }
}
render()


function deleteDiv(div){
    let removeThis = confirm('삭제하시겠습니까?')
    if(removeThis == true){
        div.remove()
    }
}

function likeButtonRed(likeButton){
    likeButton.classList.add("red")
}

function likeButtonBlack(likeButton){
    likeButton.classList.add("black")
}

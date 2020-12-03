const data = [
    {title : '안녕하세요' ,
    content : '내용'    
    },
    {title : '안녕하세요2 ',
    content : '내용2'
    },
    {title : '안녕하세요3',
    content : '내용3'
    }
]

function render(data) {
    const list = document.querySelector('#list')
    const div = document.createElement('div')

    list.append(div)
    div.innerHTML += `<h2>${data.title}</h2><a href="./update.html">수정</a><button id="deleteButton">삭제</button><p>${data.content}</p><i class="far fa-heart"></i>`;

    const deleteButton = div.querySelector('button')
    deleteButton.addEventListener('click', function(e){
        deleteDiv(e.target.parentNode)
    })

    const likeButton = div.querySelector('i')

    likeButton.addEventListener('click', function(e){
        likeButtonClick(e.target)
    })
}

for(let i = 0; i < data.length; i++){
    render(data[i])
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

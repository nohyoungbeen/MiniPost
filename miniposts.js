function render() {
    const list = document.querySelector('#list')
    list.innerHTML += '<div><h2>안녕하세요</h2><a href="./update.html">수정</a><button id="deleteButton">삭제</button><p>내용을 입력부분</p><i class="far fa-heart"></i></div>';
    // const div = document.createElement('div')
    // list.append(div)
    // const h2 = document.createElement('h2')
    // h2.append('안녕하세요')
    // div.append(h2)

    // const a = document.createElement('a')
    // a.href = "./update.html"
    // div.append(a)
    // a.append('수정')
    // console.log(list)

    // const deleteButton = document.createElement('button')
    // div.append(deleteButton)
    // deleteButton.append('삭제')
    deleteButton.addEventListener('click',function(){
        deleteThis(div)
    })

    // const p = document.createElement('p')
    // div.append(p)
    // p.append('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque fugit laborum odio corrupti accusamus totam ipsa numquam, vitae ipsam sed repellat quia provident dignissimos vero quam quisquam debitis aliquid.')

    // const likeButton = document.createElement('i')
    // //likeButton.className="far fa-heart"
    // likeButton.classList.add("far", "fa-heart")
    // //<i class="far fa-heart"></i>
    // div.append(likeButton)

    likeButton.addEventListener('click',function(){
        likeButtonClick(likeButton)
    })
}
render()
render()
render()

const button = document.querySelectorAll("#button")
for(let i = 0 ; i < button.length; i++){
    button[i].addEventListener('click', function(){
        alert("!")
    })
}

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

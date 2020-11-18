function render() {
    const list = document.querySelector('#list')
    const div = document.createElement('div')
    list.append(div)
    const h2 = document.createElement('h2')
    h2.append('안녕하세요')
    div.append(h2)


    const a = document.createElement('a')
    a.href = "./update.html"
    div.append(a)
    a.append('수정')
    console.log(list)

    const deleteButton = document.createElement('button')
    div.append(deleteButton)
    deleteButton.append('삭제')
    deleteButton.addEventListener('click',deleteThis)

    const p = document.createElement('p')
    div.append(p)
    p.append('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque fugit laborum odio corrupti accusamus totam ipsa numquam, vitae ipsam sed repellat quia provident dignissimos vero quam quisquam debitis aliquid.')

    const likeButton = document.createElement('button')
    div.append(likeButton)
    likeButton.append('좋아요')

    likeButton.addEventListener('click',likeButtonAlert)
    
    function deleteThis(){
        let removeThis = confirm('삭제하시겠습니까?')
        if(removeThis == true){
            div.remove()
        }
    }
}
render()
render()
render()

function likeButtonAlert(){
    alert("좋아요.")
}


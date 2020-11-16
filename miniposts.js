function render() {
    const list = document.querySelector('#list')

    const h2 = document.createElement('h2')
    h2.append('안녕하세요')
    list.append(h2)

    const a = document.createElement('a')
    a.href = "./update.html"
    list.append(a)
    a.append('수정')
    console.log(list)

    const deleteButton = document.createElement('button')
    list.append(deleteButton)
    deleteButton.append('삭제')

    const p = document.createElement('p')
    list.append(p)
    p.append('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque fugit laborum odio corrupti accusamus totam ipsa numquam, vitae ipsam sed repellat quia provident dignissimos vero quam quisquam debitis aliquid.')

    const likeButton = document.createElement('button')
    list.append(likeButton)
    likeButton.append('좋아요')
}

render()
render()
render()
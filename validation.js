// function nullCheck() {
//     const form = document.querySelector('form')
//     form.addEventListener('submit',function(e){
//     const title = document.querySelector('#title')
//     const content = document.querySelector('#content')
//         if(title.value === ''){
//             e.preventDefault()
//             alert('제목을 입력하세요')
//         }else if(content.value === ''){
//             e.preventDefault()
//             alert('내용을 입력하세요')
//         }
//     });
// }

function nullCheck(e, title, content) {
    if(title === ''){
        e.preventDefault()
        alert('제목을 입력하세요')
    }else if(content === ''){
        e.preventDefault()
        alert('내용을 입력하세요')
    }
}
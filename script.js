let element =document.getElementById('time')

setInterval(() => {
    let date = new Date()
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // console.log(hours, minutes, seconds)
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    element.innerHTML = time
    
}, 1000)

console.log(Math.ceil(4.567))
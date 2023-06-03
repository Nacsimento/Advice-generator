const display = document.querySelector(".h1")
const id = document.querySelector(".span")
const btn = document.querySelector(".button")



btn.addEventListener("click" , ()=>{
    fetch("https://api.adviceslip.com/advice").then(response =>{
    return  response.json()
}).then(data =>{
    const advicedata = data.slip;
    display.innerHTML=advicedata.advice
    id.innerHTML=advicedata.id
}).catch(error =>{
    console.log(error)
})
})



    fetch("https://api.adviceslip.com/advice").then(response =>{
        return  response.json()
    }).then(data =>{
        const advicedata = data.slip;
        display.innerHTML=advicedata.advice
        id.innerHTML=advicedata.id
    }).catch(error =>{
        console.log(error)
    })




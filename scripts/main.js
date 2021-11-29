const button1 = document.querySelector('.btn-1')
const buttonDiv =document.querySelector('.button-div')


const backgroundImagesList = {
    leaf:'https://images.unsplash.com/photo-1638020044941-c0ce76bb449f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'

}

const colorList = {
    blue:'rgba(72, 142, 154, 0.17)',
}

button1.addEventListener('click',()=>{
    // changeBackgroundColor(buttonDiv,['lightblue'])
    buttonDiv.classList.toggle('backgroundOnOff');

});

function changeBackgroundImage(element,image) {
    element.style.background = "url("+ image + ")";
}

function changeBackgroundColor(element,color){
    element.style.background = color
}
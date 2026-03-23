let coursorCordination = document.getElementById('i');
coursorCordination.style.color = 'green';
document.addEventListener('mousemove', (e)=>{
    coursorCordination.innerHTML =
     `По оси Х: ${e.clientX} <br> По оси У: ${e.clientY}`;
});

let outEnterElem = document.querySelector('#mouseOutElem');
let answerMouse = document.getElementById('message-form');
answerMouse.style.color = 'red';
outEnterElem.addEventListener('mouseout', (e)=>{ // лучше mouseleave
   answerMouse.textContent = 'Курсор покинул элемент';
});
outEnterElem.addEventListener('mouseenter', (e)=>{
   answerMouse.textContent = 'Курсор пришел на элемент';
});
let text = document.querySelector('h1');
let reversText = text.textContent.split(" ");
let newText = "";

function reversTextFunc (element){
    let element2 = document.getElementById(element);
    element2.textContent = element2.textContent.split("").reverse().join("");
}
for(let i = 0; i < reversText.length; i++){
    newText += `<span id= 'elemID_${i}' onclick="reversTextFunc('elemID_${i}')">${reversText[i] + " "}</span>`
}
text.innerHTML = newText;
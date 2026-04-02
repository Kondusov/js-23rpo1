function fun(){
    let arr1 = {0: "ноль", 1: "один", 2: "два", 3: "три", 4: "четыре", 5: "пять", 6: "шесть", 7: "семь", 8: "восемь", 9:"девять"};
    let num = document.getElementById('text').value;
    let strNum = arr1[num]; 
    console.log(strNum);
    localStorage.setItem(localStorage.length++, strNum);
    return strNum;
}
let p = document.getElementById('par');
let result = '';
for(let i = 0; i < localStorage.length; i++){
    result += '<p>' + localStorage.getItem(localStorage.key(i))+ '</p>';   
}
p.innerHTML = result;

document.addEventListener('submit', (event)=>{
    // event.preventDefault();
    // p.append(fun() + " ");
    fun();
});

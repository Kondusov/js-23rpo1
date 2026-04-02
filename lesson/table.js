let all_td = document.querySelectorAll('td');

let btn = document.getElementById('btn');

let counter = 0;

function setId(){
    all_td.forEach(element => {
        element.setAttribute('id',counter++);
    });
}

setId();

let uniq_arr = []; 

let user_number;

btn.addEventListener("click",()=>{
     if (uniq_arr.length === all_td.length) {
        btn.disabled = true;
        return;
    }
    user_number = randomColor();
    if(uniq_arr.length != all_td.length){
        all_td[user_number].classList.add('user-color');
        uniq_arr.push(user_number);
    }
});

function randomColor(){
    let random_num;
    do {
        random_num = Math.floor(Math.random() * (all_td.length));
        console.log(random_num);
    } while (uniq_arr.includes(random_num));
    return random_num;
}

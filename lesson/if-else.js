// Используя if-else проверить который час и в зависимости от этого писать доброе утро,
//  добрый день или добрый вечер

let date = new Date();
let currentHour = date.getHours();
let userName = prompt("Введите ваше имя", "дефолтный вариант имени");

if(userName){
    if (currentHour >= 6 && currentHour < 12){
        console.log('Доброе утро'+ ' ' + userName);
    } else if (currentHour >= 12 && currentHour < 18){
        console.log(`Добрый день, ${userName}`);
    } else {
        console.log(`Добрый вечер, ${userName}`);
    }
}
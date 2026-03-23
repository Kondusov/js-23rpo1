
    let i = document.querySelector('#i');
    i.addEventListener('click', () => {
        console.log('Клик по i - событие click');
    });
    // i.onclick = function() {
    //   console.log('Клик по i - событие click');
    // }
    window.addEventListener('keydown', function (event) {
        // Используем объект события,
        // чтобы получить информацию о нажатой клавише
        alert(`Вы нажали на кнопку: ${event.key}`)
    });

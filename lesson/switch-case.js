let operation = null;

operation = +prompt("Введи состояние", 0);

switch(operation) {
    case 1: alert("состояние 1"); break;

    case 2: alert("Состояние 2"); break;

    case 3: alert("состояние 3"); break;

    case 0: alert("Выход"); break;
    
    default: alert("Выброанного состояния нет в списке!");
}
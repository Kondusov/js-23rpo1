//  https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

let location_user;
async function fetchData() {
  try {
    // 1. Отправляем запрос и ждем ответ
    // const response = await fetch('http://ip-api.com/json/?fields=61439');
    const response = await fetch('http://ip-api.com/json/?fields=city');

    // 2. Проверяем, успешен ли ответ (статус 200-299)
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    // 3. Парсим тело ответа в формате JSON
    const data = await response.json();
    location_user = data;
    function getHelloText(location_user) {
    // задаем город (получили из сервиса geo ip)
          const userCity = location_user.city;
          console.log(userCity);
          // Приветствия для разных городов
          let helloText;
          
          switch (userCity) {        
              case "Sochi": // Если userCity === "Москва"
                  helloText = "Добро пожаловать в Сочи!";
                  break;             
              
              case "moscov":
                  helloText = "Добро пожаловать в Санкт-Петербург!";
                  break;
              
              case "kazan":
                  helloText = "Добро пожаловать в Казань!";
                  break;
              default:               
                  helloText = "Добро пожаловать в наш город!";
          }
          
          // Формируем HTML
          const html = `
              <h1>${helloText}</h1>
              <p>Ваш город: ${userCity}</p>
          `;
          
          return html;
      }

      // Использование:
      document.body.innerHTML = getHelloText(location_user);
  } catch (error) {
    // Обработка ошибок сети
    console.error("Ошибка при получении данных:", error);
  }
   return location_user;
}
fetchData();
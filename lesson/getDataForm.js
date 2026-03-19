function displayValue() {
  const user_name = document.getElementsByName("user_name")[0].value;
  const user_message = document.getElementsByName("message")[0].value;
  // Display the value
  document.getElementById("message-form").textContent
   = "Имя пользователя: " + user_name + " Сообщение: " + user_message;
}
document.querySelector('form').addEventListener
('submit', function(event) {
    event.preventDefault();
    displayValue();
});

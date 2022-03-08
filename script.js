 fetch('/span.json')
     .then(response => {
         return response.json();
     })
     .then(span => {
         document.querySelector('span h1').textContent = span.title;
         document.querySelector('span h3').textContent = span.aftor;
         document.querySelector('span div').textContent = span.year;
         document.querySelector('span img').src = span.image;
         document.querySelector('span p').textContent = span.descriptions;
     });


 function myFuncion() {
     var popup = document.getElementById('myPopup');
     popup.classList.toggle('show')
 }








 let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
 let popup = document.querySelector('.popup'); // Само окно
 let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
 let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

 openPopupButtons.forEach((button) => { // Перебираем все кнопки
     button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
         popupBg.classList.add('active'); // Добавляем класс 'active' для фона
         popup.classList.add('active'); // И для самого окна
     })
 });

 closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
     popupBg.classList.remove('active'); // Убираем активный класс с фона
     popup.classList.remove('active'); // И с окна
 });

 document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
     if (e.target === popupBg) { // Если цель клика - фот, то:
         popupBg.classList.remove('active'); // Убираем активный класс с фона
         popup.classList.remove('active'); // И с окна
     }
 });
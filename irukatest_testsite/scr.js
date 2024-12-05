document.addEventListener('DOMContentLoaded', function () {  
    const inputUrl = document.querySelector('.input_url');  
    const btnNext = document.getElementById('btn-next');  
    
    // Функция проверки url
    function isValidUrl(url) {  
        try {  
            new URL(url); 
            return true; 
        } catch (_) {  
            return false;  
        }  
    }  

    
    inputUrl.addEventListener('input', function () {  
        const urlValue = inputUrl.value;  

        // проверка на правильность ссылки
        if (isValidUrl(urlValue)) {  
            // изменение стиля кнопки 
            btnNext.style.backgroundColor = 'rgba(0, 59, 255, 1)';  
            btnNext.style.color = 'white';  
            btnNext.disabled = false;  
        } else {  
            btnNext.style.backgroundColor = ''; 
            btnNext.style.color = '';  
            btnNext.disabled = true; 
        }  
    });  

  
    btnNext.addEventListener('click', function () {  
   
        window.location.href = '/choose_tests.page-2/index-2.html'; 
    });  

  
    document.querySelector('.clear').addEventListener('click', function () {  
        inputUrl.value = ''; 
        btnNext.style.backgroundColor = ''; 
        btnNext.style.color = ''; 
        btnNext.disabled = true; 
    });  
});


const selectAllCheckbox = document.getElementById('selectAll');  
const testCheckboxes = document.querySelectorAll('.test-checkbox');  

selectAllCheckbox.addEventListener('change', () => {  
    const isChecked = selectAllCheckbox.checked;  
    testCheckboxes.forEach(checkbox => {  
        checkbox.checked = isChecked;  
    });  
}); 

    const btnNext = document.getElementById('btn-next');  
    const btnBack = document.getElementById('btn-back');  

    // Установка обработчика нажатий на чекбокс "Выбрать все"  
    selectAllCheckbox.addEventListener('change', () => {  
        const isChecked = selectAllCheckbox.checked;  
        testCheckboxes.forEach(checkbox => {  
            checkbox.checked = isChecked;  
        });  
        toggleNextButton();  
    });  

    // Установка обработчиков нажатий на каждый тестовый чекбокс  
    testCheckboxes.forEach(checkbox => {  
        checkbox.addEventListener('change', toggleNextButton);  
    });  

    // Функция для переключения состояния кнопки "ДАЛЬШЕ"  
    function toggleNextButton() {  
        const anyChecked = Array.from(testCheckboxes).some(checkbox => checkbox.checked);  
        
        if (anyChecked) {  
            btnNext.classList.add('active');  
            btnNext.disabled = false;  
        } else {  
            btnNext.classList.remove('active');  
            btnNext.disabled = true;  
        }  
    }  

    // Обработчик нажатия на кнопку "ДАЛЬШЕ"  
    btnNext.addEventListener('click', function () {  
        window.location.href = '/choose_tests.page-3/index-3.html'; // Перенаправление на следующую страницу  
    });  

    // Обработчик нажатия на кнопку "НАЗАД"  
    btnBack.addEventListener('click', function () {  
        window.history.back(); // Возврат на предыдущую страницу  
    });  



    async function checkSpeed() {  
        const url = document.querySelector('.input_url').value;  
        if (!url) {  
            alert('Пожалуйста, вставьте URL!');  
            return;  
        }  

        const startTime = performance.now(); // Запоминаем время начала загрузки  

        try {  
            const response = await fetch(`${url}?timestamp=${new Date().getTime()}`); // Добавляем уникальный параметр  
            const endTime = performance.now(); // Запоминаем время окончания загрузки  
            const loadTime = (endTime - startTime).toFixed(2); // Вычисляем время загрузки  

            // Проверяем статус ответа  
            if (!response.ok) {  
                throw new Error(`Ошибка ${response.status}: ${response.statusText}`);  
            }  

            // Сохраняем время загрузки в localStorage  
            localStorage.setItem('loadTime', loadTime);  
            window.location.href = 'index-4.html'; // Переходим к странице результатов  
        } catch (error) {  
            console.error('Ошибка:', error);  
            alert('Не удалось определить время загрузки: ' + error.message);  
        }  
    }  




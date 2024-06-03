document.addEventListener('DOMContentLoaded', function() {
    const workoutContainer = document.getElementById('workout-container'); // Получаем ссылку на контейнер по его id

    const workouts = {
        monday: [
            { name: 'Віджимання', time: '15-20 разів', image: './image/sport-list-img/fitness-1.jpg', url: './html/split-squat.html' },
            { name: 'Згинання рук із резинкою', time: '12-15 разів', image: './image/sport-list-img/fitness-2.jpg', url: './html/split-squat.html' },
            { name: 'Тяга у нахилі', time: '5-10 разів.', image: './image/sport-list-img/fitness-3.jpg', url: './html/split-squat.html' },
            { name: 'Молоток', time: '10-15 разів.', image: './image/sport-list-img/fitness-4.jpg', url: './html/split-squat.html' },
            { name: 'Згинання запясть ', time: '15-20 разів', image: './image/sport-list-img/fitness-5.jpg', url: './html/split-squat.html' },
            { name: 'Зворотні віджимання', time: '15-20 разів', image: './image/sport-list-img/fitness-6.jpg', url: './html/split-squat.html' },
        ],
        tuesday: [
            { name: 'Спліт-присідання', time: '10-15 разів', image: './image/sport-list-img/fitness-7.jpg', url: './html/split-squat.html' },
            { name: 'Присідання з вистрибуванням', time: '10-15 разів', image: './image/sport-list-img/fitness-8.jpg', url: './html/split-squat.html' },
            { name: 'Стрибкові випади', time: '2 хв', image: './image/sport-list-img/fitness-9.jpg', url: './html/split-squat.html' },
            { name: 'Сідничний місток на одній нозі', time: '2 хв', image: './image/sport-list-img/fitness-10.jpg', url: './html/split-squat.html' },
            { name: 'Підйом на шкарпетку', time: '2 хв', image: './image/sport-list-img/fitness-11.jpg' },
            { name: 'Пістолет', time: '5-10 разів', image: './image/sport-list-img/fitness-12.jpg' },
        ],
        wednesday: [
            { name: 'Динамічні види планки', time: '1-1.5 хв', image: './image/sport-list-img/fitness-13.jpg' },
            { name: 'Махи та відведення ніг', time: '10-15 разів', image: './image/sport-list-img/fitness-14.jpg' },
            { name: 'Стрибкові випади', time: '2 хв', image: './image/sport-list-img/fitness-9.jpg' },
            { name: 'Сідничний місток на одній нозі', time: '2 хв', image: './image/sport-list-img/fitness-10.jpg' },
            { name: 'Підйом на шкарпетку', time: '2 хв', image: './image/sport-list-img/fitness-11.jpg' },
            { name: 'Пістолет', time: '5-10 разів', image: './image/sport-list-img/fitness-12.jpg' },
        ],
        thursday: [
            { name: 'Упражнение 213', time: '1 хв.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 8', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
        ],
        friday: [
            { name: 'Упражнение 9', time: '1 хв.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 10', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
        ],
        saturday: [
            { name: 'Упражнение 11', time: '1 хв.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 12', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
        ],
        sunday: [
            { name: 'Упражнение 13', time: '1 хв.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 14', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
            { name: 'Упражнение 2', time: '2 мин.', image: './image/sport-list-img/fitness-1.jpg' },
        ],
    
    };

    function displayWorkouts(dayName) {
        const workoutsForToday = workouts[dayName];

        const list = document.createElement('ul');
        list.id = 'workout-container'; // Добавляем id к списку
        list.className = 'stort-list'; // Добавляем класс к списку

        workoutsForToday.forEach(workout => {
            const listItem = document.createElement('li');
            listItem.className = 'item'; // Добавляем класс к элементу списка

            const link = document.createElement('a');
            link.href = workout.url; // Устанавливаем ссылку на HTML-файл упражнения

            const img = document.createElement('img');
            img.className = 'imag';
            img.src = workout.image; // Устанавливаем src изображения
            img.alt = workout.name; // Устанавливаем alt для изображения

            const textDiv = document.createElement('div');
            textDiv.className = 'text';

            const h2 = document.createElement('h2');
            h2.textContent = workout.name;

            const p = document.createElement('p');
            p.textContent = workout.time;

            textDiv.appendChild(h2);
            textDiv.appendChild(p);

            link.appendChild(img);
            link.appendChild(textDiv);

            listItem.appendChild(link);
            list.appendChild(listItem);
        });

        // Очищаем контейнер и добавляем список упражнений
        workoutContainer.innerHTML = '';
        workoutContainer.appendChild(list);
    }

    // Определяем текущий день недели и вызываем функцию для отображения упражнений для этого дня
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDayName = dayNames[currentDayOfWeek];
    displayWorkouts(currentDayName);

    switch (currentDayOfWeek) {
        case 0:
            workoutType = 'Йога';
            break;
        case 1:
            workoutType = 'День рук';
            break;
        case 2:
            workoutType = 'День ніг';
            break;
        case 3:
            workoutType = 'Кардіо';
            break;
        case 4:
            workoutType = 'День спини';
            break;
        case 5:
            workoutType = 'День преса';
            break;
        case 6:
            workoutType = 'Легка розминка';
            break;
        default:
            workoutType = 'Помилка: неможливо визначити тип тренування';
            break;
    }

    const workoutTypeContainer = document.getElementById('workout-type');
    workoutTypeContainer.textContent = workoutType;

    
});


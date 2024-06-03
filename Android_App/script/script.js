document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById('calendar');
    

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function generateCalendar(month, year) {
        const monthNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

        const currentDate = new Date();
        const currentDay = currentDate.getDate();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        let days = '';

        for (let i = firstDay.getDay(); i > 1; i--) {
            days += '<div class="day"></div>';
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            let classes = "day";
            if (i === currentDay && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                classes += " current-day";
            }
            days += `<div class="${classes}">${i}</div>`;
        }

        calendar.innerHTML = `
            <div class="month">
                <span class="prev" onclick="prevMonth()">&#10094;</span>
                ${monthNames[month]} ${year}
                <span class="next" onclick="nextMonth()">&#10095;</span>
            </div>
            
            <div class="days">${days}</div>
        `;
    }

    generateCalendar(currentMonth, currentYear);

    window.prevMonth = function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }

    window.nextMonth = function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }
});
function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}


// 1111111111111111111111111111111111111111111111


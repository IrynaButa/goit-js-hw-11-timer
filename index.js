// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
// определенной даты.Такой плагин может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.
 
// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: дни, часы,
// минуты и секунды в формате XX: XX: XX: XX.Количество дней может состоять из более чем двух цифр.
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate
// и текущей датой.

const refs = {
  timerNumbers: document.querySelector('#timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
 
};

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate; 
    }
    intervalId = setInterval(() => {
            const now = Date.now();
            const time =  this.targetDate - now;
        this.updateClockface(time);
        this.stopCounting(time);     
    }, 1000);
    
    stopCounting(time) {
        if (time < 0) {
            clearInterval(this.intervalId);
            refs.timerNumbers.innerHTML = "BOOM!"
        }
    }
   
    updateClockface(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
     refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;  
    //refs.timerNumbers.textContent = `${days}d:${hours}h:${mins}m:${secs}s`;
    }
     pad(value) {
    return String(value).padStart(2, '0');
    }
};

const timer = new CountdownTimer({
        selector: '#timer-1',
    targetDate: new Date("jun 01, 2021"),
    });













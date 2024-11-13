let header_timer = document.querySelector('.header-timer')
let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let error = document.querySelector('#error-msg');
let timer = document.querySelector('.p100');
let timernum = document.querySelector('.adad-timer');
let run = document.querySelector('.text-run');
let end = document.querySelector('.text-end');

btn.addEventListener('click' , (e) => {
    let sec = parseInt(input.value);
    if (isNaN(sec)) {
        error.textContent = 'زمان را به درستی وارد نمایید'
        error.classList.add('active')
        setInterval(() => {
            error.classList.remove('active')
        }, 3000);
        return;
    }

    error.classList.remove('active');
    header_timer.style.display = 'none'
    timer.style.display = 'block';
    timernum.textContent = sec;
    timernum.style.color = 'black';
    run.style.display = 'block';
    end.style.display = 'none';

    let originalsec = sec;
    let lastpercent = 'p100';
    let endtime = setInterval(() => {
        if (lastpercent) timer.classList.remove(lastpercent)
        if (sec <= 0) {
            clearInterval(endtime);
            header_timer.style.display = 'flex'
            input.value = '';
            timer.style.display = 'none'
            run.style.display = 'none';
            end.style.display = 'block';
            setInterval(() => {
                end.style.display = 'none';
            }, 2000);
            return;
        }

        sec -= 1;
        let percent = Math.abs (Math.floor(((originalsec - sec) / originalsec * 100 ) -100))
        lastpercent = `p${percent}`;
        timer.classList.add(`p${percent}`)
       timernum.textContent = sec;
    }, 1000);
})

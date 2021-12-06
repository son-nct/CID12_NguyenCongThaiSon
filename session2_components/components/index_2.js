const app = document.getElementById('app');

const clocks = [];

// tạo element title
const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Đồng hồ bấm giờ';

app.appendChild(title);


const btnAddmore = document.createElement('button');
btnAddmore.classList.add('control');
btnAddmore.innerHTML = 'Add';

btnAddmore.addEventListener('click',() => {
    const clock = new Clock();
    clocks.push(clock);
    app.appendChild(clock.render());
});


app.appendChild(btnAddmore);

const btnStartAll = document.createElement("button");
btnStartAll.classList.add('control');
btnStartAll.innerHTML = 'Start All';

app.appendChild(btnStartAll);


// start all
btnStartAll.addEventListener('click',() => {
    clocks.forEach((clock,index) => {
        clock.start();
    });
});



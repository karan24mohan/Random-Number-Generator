const number = document.getElementById('number');

function randomnumber() {
    const randomnumber = Math.floor(Math.random() * 1000);
    number.innerHTML = randomnumber;
}

randomnumber();
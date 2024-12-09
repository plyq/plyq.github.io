// Access the DOM elements
const video = document.getElementById('camera');
const ksage = document.getElementById('ksage');

let index = 0
const andryuhas = [
    'ты четкая',
    'шутки смешные в более чем 20% - респект',
    'дочь у тебя четкая',
    'мама из тебя четкая',
    'не, ну больше 25 не дать',
    'да все и так понятно',
]
const kiras = [
    'готовь супчик почаще',
    'ты конечно молодец, но когда братик???',
    'мамочка, пускай тебя еще проще будет разводить на игрушки',
    'почему я взрослею, а ты не старешь((',
    'шапочки твои супер',
    'твои раскрасочки мои любимые',
    'такой Андрюша классный, такая ты избирательная',
    'я вот вырасту и буду как ты',
    'а можно я тоже не буду взрослеть после 20',
]

const get_age = () => {
    let number = Math.floor(Math.random() * 10) + 20;
    if (number % 10 === 1) {
        return number + ' год';
    }
    else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
        return number + ' года';
    }
    return number + ' лет';
}

const get_compliment = () => {
    let selector = Math.floor(Math.random() * 2);
    if (selector === 0) {
        let number = Math.floor(Math.random() * kiras.length);
        return 'Дочь передает: ' + kiras[number];
    }
    let number = Math.floor(Math.random() * andryuhas.length);
    return 'Непонятно, но комплиментик от Андрюши: ' + andryuhas[number];
}

const change = () => {
    if (index === 0) {
        ksage.textContent = 'Ща узнаем сколько Ксении лет...';
    }
    else if (index === 1) {
        ksage.innerHTML = get_age();
    }
    else {
        ksage.innerHTML = get_compliment();
    }
    index = Math.floor(Math.random() * 3) + 1;
    setTimeout(change, 5000);
}

// Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        change();
    })
    .catch((error) => {
        console.error("Error accessing the camera: ", error);
    });

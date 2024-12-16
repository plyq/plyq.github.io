// Access the DOM elements
const video = document.getElementById('camera');
const ksage = document.getElementById('ksage');

let index = 0
const andryuhas = [
    'четкая',
    'шутки смешные',
    'мать года',
    'больше 25 не дать',
    'все и так понятно',
    'красивая',
    'веселая',
    'умная',
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
    return 'Непонятно, но комплиментик от Андрюшки: ' + andryuhas[number];
}

const change = () => {
    index = Math.floor(Math.random() * 2);
    if (index === 0) {
        ksage.innerHTML = get_age();
    }
    else {
        ksage.innerHTML = get_compliment();
    }
}

const canvas = document.getElementById('photo');
const captureBtn = document.getElementById('capture-btn');
const context = canvas.getContext('2d');
let is_video = true;

captureBtn.addEventListener('click', () => {
    if (is_video) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        video.hidden = true;
        canvas.hidden = false;
        captureBtn.textContent = 'Еще раз';
        change();
    }
    else {
        canvas.hidden = true;
        video.hidden = false;
        captureBtn.textContent = 'Узнать';
        ksage.textContent = 'Ща узнаем сколько Ксении лет...';
    }
    is_video = !is_video;
});

// Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing the camera: ", error);
    });

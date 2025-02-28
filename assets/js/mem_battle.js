// Access the DOM elements
const mem1 = document.getElementById('mem1');
const mem2 = document.getElementById('mem2');
const memwinner = document.getElementById('memwinner');
const mheader = document.getElementById('mheader');
let candidates = document.getElementById('memgen').getAttribute('imgsdata').split(",");

const context1 = mem1.getContext('2d');
const context2 = mem2.getContext('2d');
const contextWinner = memwinner.getContext('2d');

const getRandomIndices = (array) => {
    const index1 = Math.floor(Math.random() * array.length);
    let index2;
    do {
        index2 = Math.floor(Math.random() * array.length);
    } while (index1 === index2);
    return [index1, index2];
};

const showImages = () => {
    if (candidates.length === 1) {
        mheader.innerText = "Winner!";
        document.getElementById('mem-container').remove();
        memwinner.hidden = false;
        const img = new Image();
        img.src = candidates[0];
        img.onload = () => {
            const aspectRatio = img.height / img.width;
            memwinner.width = window.innerWidth * 0.4; // Set canvas width to 80% of viewport width
            memwinner.height = memwinner.width * aspectRatio;
            contextWinner.drawImage(img, 0, 0, memwinner.width, memwinner.height);
        };
        mheader.hidden = false;
        return;
    }

    const [index1, index2] = getRandomIndices(candidates);

    const img1 = new Image();
    const img2 = new Image();
    img1.src = candidates[index1];
    img2.src = candidates[index2];
    img1.onload = () => {
        context1.clearRect(0, 0, mem1.width, mem1.height);
        const aspectRatio1 = img1.height / img1.width;
        mem1.height = window.innerHeight * 0.8; // Set canvas height to 80% of viewport height
        mem1.width = mem1.height / aspectRatio1;
        context1.drawImage(img1, 0, 0, mem1.width, mem1.height);
    };
    img2.onload = () => {
        context2.clearRect(0, 0, mem2.width, mem2.height);
        const aspectRatio2 = img2.height / img2.width;
        mem2.height = window.innerHeight * 0.8; // Set canvas height to 80% of viewport height
        mem2.width = mem2.height / aspectRatio2;
        context2.drawImage(img2, 0, 0, mem2.width, mem2.height);
    };

    mem1.onclick = () => selectImage(index1, index2);
    mem2.onclick = () => selectImage(index2, index1);
};

const selectImage = (selectedIndex, notSelectedIndex) => {
    candidates.splice(notSelectedIndex, 1);
    showImages();
};

showImages();
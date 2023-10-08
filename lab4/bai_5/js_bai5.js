function rotateImage() {
    const image = document.getElementById('rotateImage');
    image.style.transform = `rotate(15deg)`;
}

setTimeout(rotateImage, 2000);
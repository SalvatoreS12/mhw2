function createImage(src){
    const image=document.createElement('img');
    image.src=src;
    return image;
}
function onThumbnailClick(event){
const image=createImage("Inizio.png");
modalView.innerHTML = '';
modalView.appendChild(image);
modalView.classList.remove('hidden');
}
function onModalClick(){
    modalView.classList.add('hidden');
    modalView.innerHTML='';
}
const playButton = document.querySelector('.playbutton');
const modalView = document.querySelector('#modal-view');
playButton.addEventListener('click', onThumbnailClick);
modalView.addEventListener('click',onModalClick);
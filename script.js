
function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key  = document.querySelector(`key[data-key="${e.keyCode}"]`);
        if(!audio) return; //stop
        audio.currentTime = 0; //rewind
        audio.play();
        key.classList.add('playing');
};

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip 
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition))
window.addEventListener('keydown', playSound);
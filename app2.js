const buttons = document.querySelectorAll('button');
let height = 500;

const func = ()=>{
    alert('xilofono');
}

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)  
);

buttons.forEach(
    button => {
        button.style.height = `${height}px`;
        height = height - 20;
        button.style.backgroundColor = button.dataset.colors;
    }
);
const keyNoteDown = event =>{
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(button) button.click();
}
document.addEventListener('keydown', keyNoteDown);

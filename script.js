const pianokeys=document.querySelectorAll('.piano-keys .key');

const volumeslider=document.querySelector(".volume-slider input");

keysCheckbox=document.querySelector(".keys-checkbox input");

let allKeys=[],audio=new Audio("audio/tunes/a.wav");

pianokeys.forEach(key=> {
    allKeys.push(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key);
})

const playTune = (key) => {
    audio.src=`audio/tunes/${key}.wav`;
audio.play();
console.log(allKeys);

const clickedKey=document.querySelector(`[dta-key="${key}"]`);
clickedKey.classList.add("active");
setTimeout(()=> {
    clickedKey.classList.remove("active");
},150);
}

const handleVolume = (e) => {
    audio.volume=e.target.value;
}

const pressedkey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

const showhidekey = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

volumeslider.addEventListener("input",handleVolume);

document.addEventListener("keydown",pressedkey);

keysCheckbox.addEventListener("click",showhidekey);
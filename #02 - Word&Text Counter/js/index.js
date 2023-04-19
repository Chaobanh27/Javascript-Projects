const userText = document.getElementById("input-text");
const characters = document.getElementById("char");
const totalWords = document.getElementById("words");

userText.addEventListener('input',() => {
    characters.innerHTML = userText.value.length + " Characters"
    totalWords.innerHTML = userText.value.trim().split(" ").length + " Words"
});
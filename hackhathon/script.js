let texts = [
    "TRACK YOUR CYCLE WITH PRECISION",
    "JOIN A SUPPORTIVE COMMUNITY",
    
];
let index = 0;

function change() {
    index = (index + 1) % texts.length;
    document.getElementById("click").innerHTML = texts[index];
}

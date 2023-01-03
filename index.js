const id = document.getElementById('advice-id');
const advice = document.getElementById('advice-qoute');
const btn = document.getElementById('btn');

function randomNum(min, max) {
    min = 1;
    max = 224;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

fetch(
    "https://api.adviceslip.com/advice/"
    + randomNum()

).then(response => {
    return response.json();
}).then(adviceData => {
    const adviceObj = adviceData.slip;
    id.innerText = adviceObj.id;
    id.style.letterSpacing = '3rem;';
    advice.innerText = '"' + adviceObj.advice + '"';
    advice.style.fontWeight = '900';
    advice.style.fontSize = '1.8rem';
}).catch(error => {
    console.log(error);
});

btn.addEventListener("click", function() {
    fetch(
        "https://api.adviceslip.com/advice/"
        + randomNum()
    
    ).then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        id.innerText = adviceObj.id;
        id.style.fontWeight = '600';
        advice.innerText = '"' + adviceObj.advice + '"';
    }).catch(error => {
        console.log(error);
    });
})
"use strict"

const btn = document.getElementById('calculate-btn');
const againBtn = document.getElementById('again-btn')
const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');

const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

const getBMI = () => {
    return ((+weightInput.value) / ((+heightInput.value * 0.01) ** 2)).toFixed(1);
};

const displayResult = () => {
    resultContainer.style.display = 'block';
    resultText.innerHTML += `Your BMI is <span class="bold-text">${getBMI()}</span>`;
};

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    showSpinner();
        setTimeout(() => {
            hideSpinner();
            displayResult();
            againBtn.style.display = 'block';
        }, 1000)
});

againBtn.addEventListener('click', () => {
    btn.style.display = 'block';
    againBtn.style.display = 'none';
    resultContainer.style.display = 'none';
    resultText.innerText = ``
    weightInput.value = '';
    heightInput.value = '';
    weightInput.focus();
});


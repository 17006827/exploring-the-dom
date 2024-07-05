const myMessage = document.querySelector('.myMessage');
const addFruitButton = document.querySelector('.addFruitButton');
const fruitInput = document.querySelector('.inputFruit'); // Corrected selector

const inputBox = document.querySelector('.theInputValue'); // Corrected order

console.log(myMessage);

const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode');
});

const fruits = ['Apples🍏', 'Pears🍐', 'Orange🍊', 'Grapes🍇', 'Bananas🍌'];
const fruitList = document.querySelector('.fruits');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

addFruitButton.addEventListener('click', function() {
    if (fruitInput.value.trim().length > 0) {
        const li = document.createElement('li');
        li.innerText = fruitInput.value;
        fruitList.appendChild(li);
        fruitInput.value = ''; // Clear the input field after adding the fruit
    }
});

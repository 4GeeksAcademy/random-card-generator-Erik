import "./style.css";




window.onload = function() {
  //write your code here
  
  getRandomCard();
};



const getRandomCard = () => {
    const values = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
     
    let randomValue = values[Math.floor(Math.random() * values.length)];

    const cardValue = document.getElementById("value");

    cardValue.innerHTML = randomValue;

    const suits = ["♦", "♥", "♠", "♣"];

    let randomSuit = suits[Math.floor(Math.random() * suits.length)];

    const upperSuit = document.getElementById("upper");
    const lowerSuit = document.getElementById("lower");

    upperSuit.innerHTML = randomSuit;
    lowerSuit.innerHTML = randomSuit;

    if (randomSuit === '♦' || randomSuit === '♥') {
      upperSuit.style.color = 'red';
      lowerSuit.style.color = 'red';
      cardValue.style.color = 'red';
    }

    if (randomSuit === '♠' || randomSuit === '♣') {
      upperSuit.style.color = 'black';
      lowerSuit.style.color = 'black';
      cardValue.style.color = 'black';
    }

    
    console.log(randomValue, randomSuit);
    return randomValue;
  }

  const newCardBtn = document.getElementById("new-card")

  newCardBtn.addEventListener('click', () => {
    getRandomCard();
  })

  setInterval(() => {
    getRandomCard();
  },10000)
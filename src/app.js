import "./style.css";




window.onload = function() {
  //write your code here
  
  const getRandomValue = () => {
    const values = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
     
    let randomValue = values[Math.floor(Math.random() * values.length)];
    
    console.log(randomValue);
    return randomValue
  }

  getRandomValue();
};

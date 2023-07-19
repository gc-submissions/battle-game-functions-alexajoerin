"use strict";

// TODO - write your code here.

// #1
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

// #2
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
  //   if (randNum === 0) {
  //     return opt1;
  //   } else {
  //     return opt2;
  //   }
};

// #3
const attackPlayer = (health) => health - randomDamage();

// #4
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// #5
const isDead = (health) => health <= 0;

// #6
const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};

fight("Alexa", "Mitch", 100, 100);

// Extended Challenge 1
const getGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getGrade(72));

// Extended Challenge 2
const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (important) {
    return 2;
  } else if (urgent) {
    return 3;
  } else {
    return 4;
  }
};

console.log(prioritize(true, true));

// Extended Challenge 3
const calculatePay = (wage, hours) => {
  if (hours <= 40) {
    return wage * hours;
  } else {
    const extraHours = hours - 40;
    const overTime = extraHours * (wage * 1.5);
    return 40 * wage + overTime;
  }
};

console.log(calculatePay(10, 60));

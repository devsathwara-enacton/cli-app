#!/usr/bin/env node
import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Kaun banega Crorepati");
  await sleep();
  rainbowTitle.stop();
  console.log(`${chalk.bgBlack("2 ghante mein kese Crorepati bane?")}
  ${chalk.bgRedBright(
    `Answers galat dene pe 7 crore laat dijaskti hai and ${chalk.bgGreen(
      "sach hone mein 7 Croreeee"
    )}`
  )}
    `);
}
async function askName() {
  const answer = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "Apka name bataye?",
    default() {
      return "player";
    },
  });
  playerName = answer.player_name;
}
async function question1() {
  const answer = await inquirer.prompt({
    name: "question1",
    type: "list",
    message: "Which type of camel can swim in water?",
    choices: [
      "Dromedary Camel",
      "Kharai Camel",
      "Cama camel",
      "Wild bactarian Camel",
    ],
  });
  console.log(answer.question1);
  return handleAnswer(
    answer.question1 === "Kharai Camel",
    "Aage badhte 2 Crore ke saval pe"
  );
}
async function question2() {
  const answer = await inquirer.prompt({
    name: "question2",
    type: "list",
    message: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Rhinoceros"],
  });
  console.log(answer.question2);
  return handleAnswer(
    answer.question2 === "Blue Whale",
    "Aage badhte 3 Crore ke saval pe"
  );
}
async function question3() {
  const answer = await inquirer.prompt({
    name: "question3",
    type: "list",
    message:
      "What is the only planet in our solar system that rotates clockwise?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
  });
  console.log(answer.question3);
  return handleAnswer(
    answer.question3 === "Venus",
    "Aage badhte 4 Crore ke saval pe"
  );
}
async function question4() {
  const answer = await inquirer.prompt({
    name: "question3",
    type: "list",
    message: "What is the largest ocean on Earth?",
    choices: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Southern Ocean",
    ],
  });
  console.log(answer.question4);
  return handleAnswer(
    answer.question4 === "Pacific Ocean",
    "Aage badhte 5 Crore ke saval pe"
  );
}
async function question5() {
  const answer = await inquirer.prompt({
    name: "question3",
    type: "list",
    message: "Which country is known as the Land of the Rising Sun?",
    choices: ["China", "India", "United States of America", "Japan"],
  });
  return handleAnswer(
    answer.question5 === "Japan",
    "Aage badhte 6 Crore ke saval pe"
  );
}
async function question6() {
  const answer = await inquirer.prompt({
    name: "question6",
    type: "list",
    message: "What is the largest organ in the human body?",
    choices: ["Skin", "Heart", "Lungs", "Kidneys"],
  });
  return handleAnswer(
    answer.question6 === "Skin",
    "Aage badhte akhri padhav pe 7 Crore ke saval pe"
  );
}
async function question7() {
  const answer = await inquirer.prompt({
    name: "question7",
    type: "list",
    message: " Which Indian state is known as the Land of Five Rivers?",
    choices: ["Karnataka", "Maharashtra", "Gujarat", "Punjab"],
  });
  return handleAnswer(answer.question7 === "Punjab", "7 Croreeeeee");
}
async function handleAnswer(isCorrect, text) {
  const spinner = createSpinner("Checking Answer").start();
  await sleep();
  if (isCorrect == true) {
    spinner.success({
      text: `Apke batate hue dukh horhahai ke apne Sahi Jawab diya ${playerName} ${text}`,
    });
  } else {
    spinner.error({
      text: `Apko batate hue dukh nahi horha lekin apne galat javab diya`,
    });
    process.exit(1);
  }
}

function winner() {
  console.clear();
  const msg = `7 Croreeee ${playerName}`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
winner();

// 1. **Question: What is the largest mammal on Earth?**
//    - A) Elephant
//    - B) Blue Whale
//    - C) Giraffe
//    - D) Rhinoceros
//    - **Answer: B) Blue Whale**

// 2. **Question: Which planet is known as the Red Planet?**
//    - A) Venus
//    - B) Mars
//    - C) Jupiter
//    - D) Saturn
//    - **Answer: B) Mars**

// 3. **Question: What is the only planet in our solar system that rotates clockwise?**
//    - A) Earth
//    - B) Venus
//    - C) Jupiter
//    - D) Mars
//    - **Answer: B) Venus**

// 4. **Question: Which bird is capable of mimicking human speech?**
//    - A) Penguin
//    - B) Parrot
//    - C) Eagle
//    - D) Owl
//    - **Answer: B) Parrot**

// 5. **Question: What is the largest ocean on Earth?**
//    - A) Atlantic Ocean
//    - B) Indian Ocean
//    - C) Southern Ocean
//    - D) Pacific Ocean
//    - **Answer: D) Pacific Ocean**

// 6. **Question: Which animal is known as the "ship of the desert"?**
//    - A) Elephant
//    - B) Giraffe
//    - C) Camel
//    - D) Horse
//    - **Answer: C) Camel**

// 7. **Question: What is the capital city of Australia?**
//    - A) Sydney
//    - B) Melbourne
//    - C) Canberra
//    - D) Brisbane
//    - **Answer: C) Canberra**

// 8. **Question: Which gas do plants absorb from the atmosphere during photosynthesis?**
//    - A) Oxygen
//    - B) Nitrogen
//    - C) Carbon Dioxide
//    - D) Hydrogen
//    - **Answer: C) Carbon Dioxide**

// 9. **Question: What is the largest organ in the human body?**
//    - A) Liver
//    - B) Brain
//    - C) Skin
//    - D) Heart
//    - **Answer: C) Skin**

// 10. **Question: Which country is known as the "Land of the Rising Sun"?**
//     - A) China
//     - B) South Korea
//     - C) Japan
//     - D) Vietnam
//     - **Answer: C) Japan**

// Feel free to use these questions in your quiz or adapt them as needed!

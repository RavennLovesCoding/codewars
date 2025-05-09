/* I will upload my coadwars challenge solutions, as I do them in that order. */

/* 8 kyu Grasshopper - Debug sayHello

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock */

//solution
function sayHello(name) {
    return `Hello, ${name}`
  }



/* Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

//solution
function Ghost(color) {
  // your code goes here
  this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)]
  
};

// 8 kyu Do I get a bonus?

/* It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust). */

// my solution

function bonusTime(salary, bonus) {
  // your code here
    if (bonus === true) {
     let stringSalary = 10 * salary;
      return "\u00A3" + stringSalary;
    } else {
      return "\u00A3" +salary;
    }
  }

//8 kyu 101 Dalmatians - squash the bugs, not the dogs!

/* Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog. */


  function howManyDalmatians(number) {
  
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
   
       if (number <= 10) { 
         return dogs[0]
       } else if (number <= 50 && number >= 11) {
          return dogs[1]
        } else if (number >= 101) {
          return dogs[3]
        } else {
          return dogs[2]
        }
  
    }

    //8 kyu Array plus array

    /* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/

    function arrayPlusArray(arr1, arr2) {
      let sum = 0;
      for (let i = 0; i < arr1.length; i++) {
       sum += arr1[i];
     }
     
     for (let k = 0; k < arr2.length; k++) {
       sum += arr2[k];
     }
       
       return sum
     }

     // 8 kyu Multiply

     //This code does not execute properly. Try to figure out why.

     function multiply(a, b){
      let total = a * b;
      return total;
      
    }

    //8 kyu Fix your code before the garden dies!

    /* You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die! */

function rainAmount(mm){
  let waterAmount = null;
  if( mm < 40) {waterAmount = (40 - mm)};
  if (mm < 40) {
    return `You need to give your plant ${waterAmount}mm of water`;
  } else { return "Your plant has had more than enough water for today!"; }
  
}

//8 kyu Jenny's secret message

/* Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?*/

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else {return `Hello, ${name}!`;}
}

// 8 kyu Get Planet Name By ID

/* The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth" */

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  
  return name;
}

// 8 kyu counting sheep...

/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(sheep) {
  let total = 0;
  sheep.forEach((e) => e === true ? total++ : total + 0);
  return total;
}

//8 kyu Convert a Number to a String!

/* We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100" */

function numberToString(num) {
  return num.toString();
}

//8 kyu Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let nuStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    nuStr += str[i];
  }
  
  return nuStr
  
  
}

//8 Kyuu Remove first and last character
/*It's pretty straightforward. your goal is to create af unction that removes the first and last characters of a string. You're given one parameter the original string. You don't have to worry about strings with less than two characters.
*/

function removeChar(str){
  //You got this!
 let i = str.length - 1;
 let nuStr = str.slice(1, i);
 return nuStr;
 };
 

 //Count the Monkeys!

 /* 
 You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
 */

//solution

function monkeyCount(n) {
  // your code here
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
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
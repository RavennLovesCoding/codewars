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


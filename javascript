// =============================
// Part 1: Variables & Conditionals
// =============================
let userName = "Nelson"; // Variable declaration
let userAge = 22;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =============================
// Part 2: Functions
// =============================

// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript practice.";
}

// Function 2: Calculate square of a number
function calculateSquare(num) {
  return num * num;
}

// =============================
// Part 3: Loops
// =============================

// Example 1: For loop
function showNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
  }
}

// Example 2: While loop
function countdown(n) {
  while (n > 0) {
    console.log("Countdown: " + n);
    n--;
  }
}

// =============================
// Part 4: DOM Interactions
// =============================

// DOM 1: Change text content when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = greetUser(userName);
});

// DOM 2: Toggle dark mode on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// DOM 3: Use loops to create list items dynamically
document.getElementById("loopBtn").addEventListener("click", function() {
  let fruits = ["Apple", "Banana", "Cherry"];
  let list = document.getElementById("list");
  list.innerHTML = ""; // Clear previous list
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
});

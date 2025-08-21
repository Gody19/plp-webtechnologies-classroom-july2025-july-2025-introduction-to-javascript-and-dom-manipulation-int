// ==========================
// Part 1: Variables & Conditionals
// ==========================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = parseInt(document.getElementById("ageInput").value);
    let result = "";

    if (isNaN(age)) {
        result = "Please enter a valid number.";
    } else if (age >= 18) {
        result = "You are an adult.";
    } else {
        result = "You are a minor.";
    }

    document.getElementById("ageResult").textContent = result;
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Sum of two numbers
function sum(a, b) {
    return a + b;
}
document.getElementById("sumResult").textContent = sum(5, 7);

// Function 2: Format a name
function formatName(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " +
           lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
document.getElementById("formatNameResult").textContent = formatName("john", "doe");

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: Display numbers 1 to 5
let numbers = "";
for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
}
document.getElementById("numbersList").textContent = numbers;

// Loop 2: Filter even numbers from an array
let arr = [1, 2, 3, 4, 5, 6];
let evens = [];
arr.forEach(function(num) {
    if (num % 2 === 0) evens.push(num);
});
document.getElementById("evenNumbers").textContent = evens.join(", ");

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle highlight
document.getElementById("toggleBtn").addEventListener("click", function() {
    document.getElementById("toggleText").classList.toggle("highlight");
});

// Add list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
    let ul = document.getElementById("itemList");
    let li = document.createElement("li");
    li.textContent = "New Item " + (ul.children.length + 1);
    ul.appendChild(li);
});

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
});

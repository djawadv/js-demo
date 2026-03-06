// Get the button element
const orderBtn = document.getElementById("order-btn");

// Get the size radio buttons
const smallPizza = document.getElementById("small-pizza");
const mediumPizza = document.getElementById("Medium");
const largePizza = document.getElementById("large-pizza");

// Get the topping checkboxes
const cheeseTopping = document.getElementById("cheese-pizza");
const pepperoniTopping = document.getElementById("pepperoni-pizza");
const mushroomsPizza = document.getElementById("mushrooms-pizza");

// Get the result paragraph to display the order
const result = document.getElementById("result-text");

orderBtn.onclick = function(){

    // Store the selected size (empty by default)
    let size = "";

    // Check which size the user selected
    if(smallPizza.checked){
        size = "small";
    }
    else if(mediumPizza.checked){
        size = "medium";
    }
    else if(largePizza.checked){
        size = "large";
    }

    // Store the selected toppings in an array (empty by default)
    let toppings = [];

    // Check which toppings the user selected and add them to the array
    if(cheeseTopping.checked){ toppings.push("cheese"); }
    if(mushroomsPizza.checked){ toppings.push("mushrooms"); }
    if(pepperoniTopping.checked){ toppings.push("pepperoni"); }

    // If no size was selected, show an error message
    if(size === ""){
        result.textContent = "plz select a size";
    }

    // If no toppings were selected, show an error message
    if(toppings.length === 0){
        result.textContent = "plz select a topping";
    }

    // If both size and toppings are selected, show the full order
    if(size !== "" && toppings.length > 0){
        result.textContent = `you chose ${size} pizza with the following toppings: ${toppings.join(", ")}`;
    }
}
// define the function you will call later at the top of your file. Remember, you have to declare(assign) the variable in the code block of the function.)
function updateQuantity (displayQuantity) {
    let quantity = document.querySelector(".total-quantity")
    quantity.innerHTML = displayQuantity
}

// perform the querySelector for the buttons.
let quantityDownBtn = document.getElementById('quantity-down');
let quantityUpBtn = document.getElementById("quantity-up");

// Start quantity at 1, since that is how the assignment is setup
quantity = 1

// add event listener to the decrease button 
quantityDownBtn.addEventListener('click', function (){
        if (quantity < 0) {
            quantity = 0
        } else if (quantity > 0) {
            quantity--
        }
        updateQuantity(`Quantity: ${quantity}`)
       console.log(quantity);
               })

// add event listener to the increase button   
quantityUpBtn.addEventListener('click', function (){
    quantity++;
        console.log(quantity);
        updateQuantity(`Quantity: ${quantity}`)
        })
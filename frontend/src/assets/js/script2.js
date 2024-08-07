document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    
    let quantity = parseInt(quantityInput.value, 10);

    incrementButton.addEventListener('click', () => {
        quantity++;
        quantityInput.value = quantity;
    });

    decrementButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityInput.value = quantity;
        }
    });
});
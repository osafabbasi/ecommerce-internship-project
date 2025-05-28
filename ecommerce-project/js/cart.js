const cartItems = document.querySelector(".cart-items");
const cartItemBox = document.querySelector(".cart-item-box");
const removeAll= ()=>{
     cartItems.innerHTML=``;
     cartItems.innerHTML = `
     <h1 style="font-weight:500;color:grey;margin-left:43%;margin-top:23%;">No items here</h1>
     `
}

const removeButtons = document.querySelectorAll('.btn-remove');

// Add click event to each remove button
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find and remove the parent cart-item-box
        const cartItemBox = button.closest('.cart-item-box');
        cartItemBox.remove();
    });
});
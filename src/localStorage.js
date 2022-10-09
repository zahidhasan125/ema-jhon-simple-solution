document.getElementById('add-to-ls').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    addProductToCart(name, quantity);
    
})


const getSavedCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const addProductToCart = (name, quantity) => {
    const savedCart = getSavedCart();
    savedCart[name] = quantity;
    localStorage.setItem('cart', JSON.stringify(savedCart));
}
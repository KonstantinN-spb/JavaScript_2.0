const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];
const cart = document.querySelector(".btn-cart");

cart.addEventListener("click", function() {
    products.forEach(function (item) {
        let block = document.createElement('div');
        let main = document.querySelector('.products');
        main.appendChild(block);
        block.innerHTML =
                 `<div class="product-item">
                     <h3>${item.title}</h3>
                     <p>${item.price}</p>
                     <button class="by-btn">Добавить в корзину</button>
                 </div>`;
    });  
});









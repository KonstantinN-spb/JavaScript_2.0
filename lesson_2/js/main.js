// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
/*
  Мне кажется, что в первую очередь нужен основной класс PRODUCT с набором свойств, такие как (размерм, вес, цвет, страна производсвта), дале
  через протипы больше конкретики и разделение на классы по меньше( одежда, электроника, еда) и так далее. 
  Ко всему этому большому классу добавить несколько методов, связанных с корзиной (добаdить/удалить, подсчитать сумму, оплатить) */




  // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  // Вывод суммы сделал в логе и на странице. Правда немного коряво, не по канонам ООП. Не успел отрефакторить.

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.sumOrder = [];
    this.sum = 0;
    this._fetchProducts();
    this.render();
    this.productSum();
    this.renderSum();
    console.log(this.goods);
    console.log(this.allProducts);
    console.log(this.sumOrder);
    console.log(this.sum);
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 1000},
      {id: 2, title: 'Mouse', price: 100},
      {id: 3, title: 'Keyboard', price: 250},
      {id: 4, title: 'Gamepad', price: 150},
    ];
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
  productSum(){

    for (let product of this.goods) {
      let items = product.price;
      this.sumOrder.push(items);
    }

    for(let i = 0; i < this.sumOrder.length; i++){
      this.sum += parseInt(this.sumOrder[i]);
    }
    
  }
  renderSum() {
    let block_two = document.createElement('div');
    let main = document.querySelector('.products');
    main.appendChild(block_two);
    block_two.innerHTML =` <div class="styleSum"> Сумма всех товаров ${this.sum} </div>`
  }
}
new ProductList();



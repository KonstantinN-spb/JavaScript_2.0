const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function promisifyXMLHttpRequest(url, method, body) {
  return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
          if (this.status === 200) {
              resolve(this.responseText);
          } else {
              reject(this.status + ' : ' + this.statusText);
          }
      };
      xhr.onerror = function () {
          reject(this.statusText);
      };
      xhr.send(body);
  });
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render();
        });
  
  }
  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log('Error:', error);
        });
  }

  calcSum(){
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const list = new ProductList();


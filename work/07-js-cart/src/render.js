import { PAGES } from './state';

function render(state, appEl) {
    if (!appEl) return;

    switch (state.page) {
        case PAGES.PRODUCTS:
            renderProducts(state, appEl);
            break;
        case PAGES.CART:
            renderCart(state, appEl);
            break;
        default:
            console.warn(`Unknown page: ${state.page}`);
    }
}

function renderProducts(state, appEl) {
    const productsHTML = generateProductsHTML(state.products);
    const viewCartButton = `View Cart${state.totalNum ? `(${state.totalNum})` : ''}`;

    appEl.innerHTML = `
     <button class="view-cart">${viewCartButton}</button>
    <ul class="products">${productsHTML}</ul>  
    `;
}

function renderCart(state, appEl) {
    const productsHTML = generateProductsHTML(state.products);
    const cartItemsHTML = generateCartItemsHTML(state.cartItems);
    const totalPriceHTML = state.totalPrice ? `Total Cost: $${Math.max(0, state.totalPrice).toFixed(2)}` : 'Total Cost: $0.00';


    console.warn("state.totalPrice:" + Math.max(0, state.totalPrice).toFixed(2) )

    if (Math.max(0, state.totalPrice).toFixed(2) === '0.00' ) {
        appEl.innerHTML = `
        <ul class="products">${productsHTML}</ul>  
        <button class="hide-cart">Hide Cart</button>
        <div class="item">Nothing in the cart</div>
        <span class="total">${totalPriceHTML}</span>
        <ul class="carts">${cartItemsHTML}</ul>
        <button class="checkout">Checkout</button>
    `;
    } else {
        appEl.innerHTML = `
        <ul class="products">${productsHTML}</ul>  
        <div class="center-container">
          <p>Shopping Cart</p>
        </div>
        <button class="hide-cart">Hide Cart</button>
        <span class="total">${totalPriceHTML}</span>
        <ul class="carts">${cartItemsHTML}</ul>
        <button class="checkout">Checkout</button>
      `;
    }
}

function generateProductsHTML(products) {
    return products.map((product, index) => `
      <div class='product' data-index="${index}">
        <img src="${product.url}" alt="${product.name}"/>
        <article class="product_info">
            <span>${product.name}</span>
            <span>$${product.price}</span>
        </article>
        <button class="add-to-cart" data-index="${index}">Add to Cart</button>
      </div>
    `).join('');
}

function generateCartItemsHTML(cartItems) {
    return cartItems.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <img src="${item.url}" alt="${item.name}" class="row__img" />
            <span>${item.name}</span>
            <span class="total-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="amount" data-index="${index}">
                <button data-index="${index}" class="remove"> - </button>        
                <span>${item.quantity}</span> 
                <button data-index="${index}" class="add"> + </button>   
            </div>
        </div>
    `).join('');
}

export default render;
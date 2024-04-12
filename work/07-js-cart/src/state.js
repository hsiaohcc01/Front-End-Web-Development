const PAGES = {
  PRODUCTS: 'products',
  CART: 'cart',
};

const state = {
  products: [
    { name: "Fluffball", price: 0.99, url: 'http://placekitten.com/150/150?image=1' },
    { name: "General", price: 3.14, url: 'http://placekitten.com/150/150?image=2' },
    { name: "Mayhem", price: 2.73, url: 'http://placekitten.com/150/150?image=3' }
  ],
  cartItems: [],
  page: PAGES.PRODUCTS,
  totalPrice: 0,
  totalNum: 0
};

function addProduct(index) {
  const product = state.products[index];
  const cartItem = state.cartItems.find(item => item.name === product.name);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    state.cartItems.push({ ...product, quantity: 1 });
  }

  state.totalPrice += product.price;
  state.totalNum++;
}

function removeQuantity(index) {
  const item = state.cartItems[index];
  if (item.quantity > 1) {
    item.quantity--;
    state.totalPrice -= item.price;
    state.totalNum--;
  } else {
    removeItemFromCart(index);
  }
}

function removeItemFromCart(index) {
  state.totalPrice -= state.cartItems[index].price * state.cartItems[index].quantity;
  state.totalNum -= state.cartItems[index].quantity;
  state.cartItems.splice(index, 1);
}

function addQuantity(index) {
  const item = state.cartItems[index];
  item.quantity++;
  state.totalPrice += item.price;
  state.totalNum = +1;
}

function clearCart() {
  state.cartItems = [];
  state.totalPrice = 0;
  state.totalNum = 0;
  state.page = PAGES.PRODUCTS;
}

export default state;
export { PAGES, addQuantity, removeQuantity, addProduct, clearCart };
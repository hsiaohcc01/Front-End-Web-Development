import state, { PAGES, addQuantity, removeQuantity, addProduct, clearCart } from './state';
import render from './render';

const appEl = document.querySelector('#app');

function handleCartActions(e) {
  const target = e.target;
  const actionType = target.classList;
  const index = target.dataset.index;

  if (actionType.contains('add-to-cart')) {
    addProduct(index);
  } else if (actionType.contains('remove')) {
    removeQuantity(index);
  } else if (actionType.contains('add')) {
    addQuantity(index);
  } else if (actionType.contains('view-cart')) {
    state.page = PAGES.CART;
  } else if (actionType.contains('hide-cart')) {
    state.page = PAGES.PRODUCTS;
  } else if (actionType.contains('checkout')) {
    clearCart();
  }

  render(state, appEl);
}

appEl.addEventListener('click', handleCartActions);

render(state, appEl);

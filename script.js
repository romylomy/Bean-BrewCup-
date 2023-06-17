const buttonsContainer = document.querySelector('.icons');
const navBar = document.querySelector('.navbar');
const cartItem = document.querySelector('.cart-items-container');
const searchForm = document.querySelector('.search-form');
const addToCart  = document.querySelector('addToCart')

const findIconClicked = (event) => {
  const target = event.target.id;
  const toggleIconsClicked = (target) => {
    switch (target) {
      case 'menu-btn':
        navBar.classList.toggle('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
        break;
      case 'cart-btn':
        cartItem.classList.toggle('active');
        navBar.classList.remove('active');
        searchForm.classList.remove('active');
        break;
      case 'search-btn':
        searchForm.classList.toggle('active');
        navBar.classList.remove('active');
        cartItem.classList.remove('active');
        break;
    }
  }

  toggleIconsClicked(target);
}

buttonsContainer.addEventListener('click', findIconClicked);
 


const cart = [
  {
    title:"coco nut ", 
    price: 15.99,
    amount: 1,
  },
  {
    title:"Matchacha ", 
    price: 15.99,
    amount: 2,
  },
  {
    title:"Very Berry ", 
    price: 15.99,
    amount: 3,
  },
]


let total = cart.reduce((total, cartItem) => {
  //count items 
  const {amount, price} = cartItem;
  total.totalItems += amount 
  // count sum
  total.cartTotal = amount * price 
  return total
}, 
{
  totalItems: 0,
  cartTotal: 0,
}
) 
 


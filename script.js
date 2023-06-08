const buttonsContainer = document.querySelector('.icons');
const navBar = document.querySelector('.navbar');
const cartItem = document.querySelector('.cart-items-container');
const searchForm = document.querySelector('.search-form');

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

const people = [
  {name:'Sally', lastName:'Sand', age: 42},
  {name:'kyle', lastName:'Marie', age: 26},
  {name:'John', lastName:'Cena',  age: 31},
  {name:'Jill', lastName:'Sanders', age: 42}
]; 

const result = people.reduce((groupedPeople,person ) => {
  console.log(groupedPeople)
  const age = person.age 
  if(groupedPeople[age]== null)
    groupedPeople[age] = []
    groupedPeople[age].push(person.name.concat(" " + person.lastName))
  return groupedPeople 
}, {} ) 

console.log(result)

const arrayMethod = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const groupedArrays = arrayMethod.reduce((groups, value) => {
  const foundGroup = groups.find(group => group.includes(value));
  if (foundGroup) {
    foundGroup.push(value);
  } else {
    groups.push([value]);
  }
  return groups;
}, []);

console.log(groupedArrays);





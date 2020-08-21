//Creates a new object called 'menu'

const menu = {
  _courses: {
    appetizers: [],  
    mains: [],
    desserts: [],
  },

//Creates a method to add dishes to the _courses object within our menu object  

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
      this._courses[courseName].push(dish);
  },

//Gets a random dish from the _courses object

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },

//Collates a random dish from each of the courses in the _courses object and returns it as a string, along with the total price of all three dishes

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;

  return `Appetizer: ${appetizer.name}, Main: ${main.name} Dessert: ${dessert.name} Total price: ${totalPrice}.`;
},
};

//Calls addDishToCourse function to populate _courses with dishes

menu.addDishToCourse('appetizers', 'Cajun Prawns', 4.50);
menu.addDishToCourse('appetizers', 'Duck Salad', 6.25);
menu.addDishToCourse('appetizers', 'Goat Cheese Brioche', 4.50);

menu.addDishToCourse('mains', 'Beef Wellington', 18.50);
menu.addDishToCourse('mains', 'Chicken Goujons', 12.50);
menu.addDishToCourse('mains', 'Vegetable Curry', 13.50);

menu.addDishToCourse('desserts', 'Ice Cream', 6.50);
menu.addDishToCourse('desserts', 'Chocolate Brownie', 5.75);
menu.addDishToCourse('desserts', 'Treacle Tart', 6.50);

//Calls the generateRandomMeal function and prints the result to the console

let meal = menu.generateRandomMeal();
console.log(meal);




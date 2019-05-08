var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while(counter < ingredients.length){
  console.log(ingredients[counter]);
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
for(var counter2 = 0; counter2 < ingredients.length; counter2++){
  console.log(ingredients[counter2]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var counter3 = ingredients.length - 1; counter3 >= 0; counter3--){
  console.log(ingredients[counter3]);
}
let hamster = {
    stomach: [],
  
    eat(food) {
       this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: [] //*
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: [] //*
  };
  
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
 console.log( lazy.stomach ); // []
 
 //Надо добавить каждому свое свойство stomach
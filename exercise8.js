const max = process.argv[2];
     let FizzBuzz = {
       [Symbol.iterator]() {
         let n = 1;
         return next(){
           if(n > max){
             return { done: true};
           }
           let value = num;
         if(value % 3 === 0 && value % 5 === 0){
           return "FizzBuzz";
         } else if (value  % 3 === 0){
           return "Fizz";
         } else if ( value % 5 === 0){
           return "Buzz";
         }
         n++;
         return {done: false, value: value}
       }
         // Hint：
         // When it's finished you have to return an object
         // with the property `done: true` but before you
         // have to set `done: false`
       }
     }


     for (var num of FizzBuzz) {
            console.log(num);
      }

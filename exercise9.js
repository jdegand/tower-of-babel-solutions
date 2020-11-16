const max = process.argv[2];
     let FizzBuzz = {
       function*() {
         let n = 1;
         while (n < max){
           let value = n;
           n++;
         if(value % 15 === 0){
           value =  "FizzBuzz";
         } else if (value  % 3 === 0){
           value =  "Fizz";
         } else if ( value % 5 === 0){
           value =  "Buzz";
         }
         yield value;
       }
     }
         // Hint：
         // When it's finished you have to return an object
         // with the property `done: true` but before you
         // have to set `done: false`
       }();


     for (var num of FizzBuzz) {
            console.log(num);
      }

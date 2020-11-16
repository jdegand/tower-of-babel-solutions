var inputs = ['Hello', 'At', 'Fun'];  
var result = inputs.map(word => word.slice(0,1))
              .reduce((acc, value)=> acc + value, '')

console.log(result);

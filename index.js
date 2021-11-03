const Calculate = {
    factorial(inputNumber){
      if(inputNumber === 0){
        return 1
      }
      let fact = 1
      for(let i = 1; i <= inputNumber; i++){
        fact *= i
      }
      return fact
    }
  }
  
  module.exports = Calculate;
  
  
  
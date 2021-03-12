import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  let result;
  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case 'X':
      result = numOne.times(numTwo);
      break;
    case '÷':
      result = numberTwo === '0' ? 'Err div by 0' : numOne.div(numTwo);
      break;
    case '+/-':
      if (numberOne == null) {
        result = numTwo.times(-1);
      } else {
        result = numOne.times(-1);
      }
      break;
    default:
      break;
  }
  return result.toString();
};
export default operate;

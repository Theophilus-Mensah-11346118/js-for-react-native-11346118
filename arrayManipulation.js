
function processArray(numbers) {
  return numbers.map(number => {
    if (number % 2 === 0) {
      return number * number; 
    } else {
      return number * 3; 
    }
  });
}

function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    const num = numbers[index];
    if (num % 2 === 0) {
      return str.toUpperCase(); 
    } else {
      return str.toLowerCase(); 
    }
  });
}


const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
console.log('Processed Numbers:', processedNumbers); 

const stringArray = ['Junior', 'Andy', 'Eugene', 'Kelvin', 'Joe'];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
const formattedStrings1 = ['junior', 'ANDY', 'eugene', 'KELVIN', 'joe'];
console.log('Formatted Strings:', formattedStrings); 


module.export = {
  stringArray,
  formattedStrings1
};
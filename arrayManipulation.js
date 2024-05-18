
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

const stringArray = ['One', 'Two', 'Three', 'Four', 'Five'];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log('Formatted Strings:', formattedStrings); 

// open input.html and run the following in the console

// part 1
const inp = document.body.textContent.split('\n').map(item => Number(item)).reduce((total, amount) => total + amount);
console.log(inp);
// part 2

const inp = document.body.textContent.split('\n').filter(item => item !== "").map(Number);
let reachedFrequencies = [];
let duplicates = "";
let currentFrequency = 0;

while (duplicates === "") {
  for (let i = 0; i < inp.length; i+=1) {
    currentFrequency += inp[i];
    const checkIfcurrentFreqExists = reachedFrequencies.find(
      freq => freq === currentFrequency
    );
    reachedFrequencies.push(currentFrequency);
    if (checkIfcurrentFreqExists !== undefined) {
      duplicates = checkIfcurrentFreqExists;
      console.log(duplicates);
      break;
    }
  }
}

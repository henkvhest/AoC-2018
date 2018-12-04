// open input.html and run the following in the console

// part 1
var inp = document.body.textContent.split('\n').map(item => Number(item)).reduce((total, amount) => total + amount);

// part 2

var inp = document.body.textContent.split('\n').map(item => Number(item));
var reachedFrequencies = [0];

var duplicates = "";
var currentFrequency = 0;
while (duplicates === "") {
  for (let i = 0; i < inp.length; i+=1) {
    currentFrequency += inp[i];
    var checkIfcurrentFreqExists = reachedFrequencies.find(
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

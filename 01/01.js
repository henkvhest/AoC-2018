// open input.html and run the following in the console

var inp = document.body.textContent.split('\n').map(item => Number(item)).reduce((total, amount) => total + amount);

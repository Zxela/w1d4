var countdownGenerator = function(x) {
   return function () {
    if (x < 0) {
       console.log("Rockets already gone, bub!")
    }
    else if (x === 0) {
      x -= 1
      console.log("Blast Off!")
    }
    else {
      x -= 1
      console.log("T-minus " + (x+1))
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

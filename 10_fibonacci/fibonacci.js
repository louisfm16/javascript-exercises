const fibonacci = function(nFib) {
    nFib = parseInt(nFib);
    if(nFib <= 0) return "OOPS";
    if(nFib <= 2) return 1;

    let myFibs = [1, 1];

    for(let i = 2; i < nFib; i++) {
        last2Sum = myFibs[i-2] + myFibs[i-1];
        myFibs.push(last2Sum);
    }

    return myFibs[myFibs.length-1];
};

// Do not edit below this line
module.exports = fibonacci;

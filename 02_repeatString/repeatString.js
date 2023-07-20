const repeatString = function(str, n) {
    if(n<0) return 'ERROR';
    
    let fullString = '';

    for(let i = 0; i<n; i++) {
        fullString += str;
    }

    return fullString;
};

// Do not edit below this line
module.exports = repeatString;

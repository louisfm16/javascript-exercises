const palindromes = function (str) {
    let myStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return myStr.split("").reverse().join("") == myStr;
};

// Do not edit below this line
module.exports = palindromes;

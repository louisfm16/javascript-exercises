const removeFromArray = function(arr, ...args) {
    let newArr = arr;

    for (let i = 0; i< args.length; i++) { // Loop through all the arguments\
        newArr = [...newArr.filter(function(itm) {
            return itm !== args[i];
        })]
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

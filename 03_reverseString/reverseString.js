const reverseString = function(str) {
    // The string must first be turned into an array of individual letter strings so that they may be reversed.
    var splitString = str.split("");
    // .reverse() reverses the array of strings, however it does not return them back into a single string. 
    var arrayReversed = splitString.reverse();
    // .join("") will return arrayReversed into a single string again (the "" must be within join's perameters.)
    var stringReversed = arrayReversed.join("");

    return stringReversed;

};

// Do not edit below this line
module.exports = reverseString;

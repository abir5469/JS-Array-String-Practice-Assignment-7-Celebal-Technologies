// 1️. Joining elements of an array into a string
var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());          // "Red,Green,White,Black"
console.log(myColor.join(','));       // "Red,Green,White,Black"
console.log(myColor.join('+'));       // "Red+Green+White+Black"

// ------------------------------------------------------------

// 2️. Find the most frequent item in an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
    var freq = {};
    var maxFreq = 0;
    var mostFreqItem;

    for (var i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
        if (freq[arr[i]] > maxFreq) {
            maxFreq = freq[arr[i]];
            mostFreqItem = arr[i];
        }
    }

    console.log(mostFreqItem + " ( " + maxFreq + " times )");
}

findMostFrequent(arr1);   // Output: a ( 5 times )

// ------------------------------------------------------------

// 3️. Truncate a string to a specified length
function truncateString(str, num) {
    return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4));   // Output: "Robi"

// ------------------------------------------------------------

// 4️. Capitalize the first letter of each word
function capitalizeWords(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(capitalizeWords('js string exercises'));   // Output: "Js String Exercises"

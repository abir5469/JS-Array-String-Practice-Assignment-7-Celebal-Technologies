function capitalizeWords(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(capitalizeWords('js string exercises'));
// Output: "Js String Exercises"

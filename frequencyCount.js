var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
    var freq = {};
    var maxCount = 0;
    var mostFreqItem;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        freq[item] = (freq[item] || 0) + 1;
        if (freq[item] > maxCount) {
            maxCount = freq[item];
            mostFreqItem = item;
        }
    }

    console.log(mostFreqItem + " (" + maxCount + " times )");
}

findMostFrequent(arr1);
// Output: a ( 5 times )

let arr = [4, 1, 5, 2, 3, 7];

arr.reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue, currentIndex, array);
})

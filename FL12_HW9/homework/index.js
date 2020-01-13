// Task 1 //

function convert() {
    const arr = Array.from(arguments);
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            resultArr.push(+arr[i]); 
        } else {
            resultArr.push(arr[i].toString());
        }
    }
    console.log(resultArr);
}

convert('1', 2, 3, '4')


// Task 2 //

function executeForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeForEach([1, 2, 3], function (el) {
    console.log(el * 3)
});


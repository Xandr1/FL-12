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


// Task 3 //

function mapArray(arr, func) {
    let result = [];
    executeForEach(arr, function(el){
        result.push(func(+el));
    })
  return result;
}

mapArray([2, '5', 8], function(el) {
    return el + 3;
});


// Task 4 //

function filterArray(arr, func) {
    let result = [];
    executeForEach(arr, function(el) {
        if (func(el)) {
            result.push(+el);
        }
    });
    return result;
}

filterArray([2, 5, 8], function(el) {
    return el % 2 === 0;
});


// Task 5 //

function flipOver(str) {
    let result = '';
    for (let item of str) {
        result = item + result;
    }
    return result;
}

flipOver('hey world');


// Task 6 //

function makeListFromRange(arr) {
    let result = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i);
    }
    return result;
}

makeListFromRange([2, 7]);


// Task 7 //

function getArrayOfKeys(obj, key) {
    let result = [];
    executeForEach(obj, function (item) {
        result.push(item[key])
    });
    return result;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');


// Task 8 //

function substitute(arr) {
    let result = [];
    mapArray(arr, function (item) {
        if (item < 30) {
            result.push('*');
        } else {
            result.push(item);
        }
    });
    return result;
}

substitute([56, 14, 48, 2, 31, 29]);


// Task 9 //

function getPastDay(date, daysAgo) {
    const dayInMS = 86400000,
    day = new Date(date.getTime() - daysAgo * dayInMS);
    return day.getDate();
}

const date = new Date(2019, 0, 2);

getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);


// Task 10 //

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${year}/${month}/${day} ${hour}:${minute}`;
}

formatDate(new Date('6/15/2018 09:07:00'));
formatDate(new Date())

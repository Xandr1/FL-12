function makeNumber(str) {
    const numbersArray = str.split('');
    let resultArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (!isNaN(numbersArray[i])) {
            resultArray.push(numbersArray[i]);
        }
    }
    return resultArray.join('');
}

function countNumbers(str) {
    let obj = {};
    let numStr = makeNumber(str);
    for (let i = 0; i < numStr.length; i++) {
        let counter = numStr[i];
        obj[counter] = obj[counter] ? obj[counter] + 1 : 1;
    }
    return obj;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('');

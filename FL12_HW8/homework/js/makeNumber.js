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

makeNumber('erer384jjjfd123');
makeNumber('ijifjgdj');
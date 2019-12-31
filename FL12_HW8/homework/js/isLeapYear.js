function checkYear(year){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function isLeapYear() {
    let input = new Date(arguments[0]).getFullYear();
    if (isNaN(input)) {
        console.log('Invalid Date');
        return;
    }
    if (checkYear(input)) {
        console.log(`${input} is a leap year`);
    } else {
        console.log(`${input} is not a leap year`);
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear(1213131313);

function getMin() {
    let minimum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minimum) {
            minimum = arguments[i];
        }
    }
    return minimum;
}

getMin(3, 0, -3);

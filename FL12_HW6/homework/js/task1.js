const a = parseFloat(prompt("Input value a:"));
const b = parseFloat(prompt("Input value b:"));
const c = parseFloat(prompt("Input value c:"));

if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("Invalid input data");
}
else {
    const discriminant = Math.pow(b, 2) - 4*a*c;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant))/(2*a);
        const x2 = (-b - Math.sqrt(discriminant))/(2*a);
        console.log("x1 = "+Math.round(x1)+" and x2 = "+Math.round(x2));
    }
    else if (discriminant == 0) {
        const x = -b/(2*a);
        console.log("x = "+Math.round(x));
    }
    else {
        console.log("No solution");
    }
}

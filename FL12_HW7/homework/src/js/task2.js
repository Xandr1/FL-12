let start = confirm('Do you want to play a game?');
let random;
let currentSum = 0;
let previusSum = 0;
let maxSum = 100;
let attempt = 3;
let range = 9;
let guesse = false;

if (start === false) {
    alert('You did not become a billionaire, but can');
} else {
    while (start !== false) {
        random = Math.floor(Math.random() * range);
        while (attempt > 0 && guesse === false) {
            guess = parseInt(prompt(`Choose a rouletter pocket number from 0 to ${range - 1}\n
            Attempts left: ${attempt}\n 
            Total prize: $${previusSum}\n
            Possible prize on current attempt: $${maxSum}`));

            if(guess === random) {
                guesse = true;
                currentSum = maxSum;
                start = confirm(`Congratulation, you won!\n
                Your prize is: $${currentSum}\n
                Do you want to continue?`);
            }
            maxSum/2;
            attempt--;
        }

        if(!guesse || start === false){
            alert(`Thank you for your participation. Your prize is $${currentSum + previusSum}`);
            start = confirm('Do you want to play again?');
        }
        if (start) {
            if(guesse) {
                guesse = false;
                maxSum = maxSum*2;
                range = range + 4;
            }
            previusSum = currentSum + previusSum;
            currentSum = 0;
            attempt = 3;
        } 
    }
}

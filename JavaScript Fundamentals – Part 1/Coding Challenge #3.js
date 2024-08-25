// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below

var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

var dolphinsAvg = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
var koalasAvg = (koalas[0] + koalas[1] + koalas[2]) / 3;

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

var winner = dolphinsAvg > koalasAvg ? 'Dolphins' : dolphinsAvg < koalasAvg ? 'Koalas' : 'Draw';
console.log('1.', winner);

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 

dolphins = [97, 112, 101];
koalas = [109, 95, 123];

dolphinsAvg = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
koalasAvg = (koalas[0] + koalas[1] + koalas[2]) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('2. Dolphins');
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log('2. Koalas');
} else if (dolphinsAvg === koalasAvg) {
    console.log('2. Draw');
} else {
    console.log('2. No winner');
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

dolphins = [97, 112, 101];
koalas = [109, 95, 106];

dolphinsAvg = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
koalasAvg = (koalas[0] + koalas[1] + koalas[2]) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('3. Dolphins');
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log('3. Koalas');
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log('3. Draw');
} else {
    console.log('3. No winner');
}

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

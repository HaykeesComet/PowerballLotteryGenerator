function numDraw() {
  const numBall = Math.floor( Math.random() * 59 ) + 1;
  return numBall;
}

const numBer1 = numDraw();
console.log(`You rolled a ${numBer1}.`);
//document.write(`You rolled a ${numBer1}.`);

const numBer2 = numDraw();
console.log(`You rolled a ${numBer2}.`);
//document.write(`You rolled a ${numBer2}.`);

const numBer3 = numDraw();
console.log(`You rolled a ${numBer3}.`);
//document.write(`You rolled a ${numBer3}.`);

const numBer4 = numDraw();
console.log(`You rolled a ${numBer4}.`);
//document.write(`You rolled a ${numBer4}.`);

const numBer5 = numDraw();
console.log(`You rolled a ${numBer5}.`);
//document.write(`You rolled a ${numBer5}.`);

const numBer6 = numDraw();
console.log(`You rolled a ${numBer6}.`);
//document.write(`You rolled a ${numBer6}.`);

document.querySelector('main').innerHTML = `<h2>You have drawn a <mark>${numBer1}</mark> - <mark>${numBer2}</mark> - <mark>${numBer3}</mark> - <mark>${numBer4}</mark> and <mark>${numBer5}</mark>.</h2><h1>Your Powerball is <div>${numBer6}</div>!</h1>`;
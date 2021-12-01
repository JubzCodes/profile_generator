const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable", (answer) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("What is your favorite meal of the day?", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower?", (answer7) => {
              rl.question("In a few words, tell us what you are amazing at!", (answer8) => {
                console.log(`${answer} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, has the superpower of ${answer7}, and is really amazing at ${answer8}.`);
                rl.close();
              });
            });
          });
        });
      });
     });
  });
});




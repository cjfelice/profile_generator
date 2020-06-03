const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat\'s your name? Nicknames are also acceptable :)\n\n', (answer1) => {
  rl.question('\nWhat\'s an activity you like doing?\n\n', (answer2) => {
    rl.question('\nWhat do you listen to while doing that?\n\n', (answer3) => {
      rl.question('\nWhich meal is your favourite (eg: dinner, brunch, etc.)\n\n', (answer4) => {
        rl.question('\nWhat\'s your favourite thing to eat for that meal??\n\n', (answer5) => {
          rl.question('\nWhich sport is your absolute favourite?\n\n', (answer6) => {
            rl.question('\nWhat is your superpower? In a few words, tell us what you are amazing at!\n\n', (answer7) => {
              console.log(`\n---  ${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.  ---\n`);
              rl.close();
            });   
          });   
        });  
      });
    });
  });
});
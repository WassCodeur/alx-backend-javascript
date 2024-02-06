process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing');
});

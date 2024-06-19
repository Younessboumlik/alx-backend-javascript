/**
 * Taking input and then output it.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (inp) =>
{
const name = inp.toString().trim();
console.log(`Your name is: ${name}`);
console.log('This important software is now closing');
process.exit();
})

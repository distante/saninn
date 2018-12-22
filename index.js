#!/usr/bin/env node

const centerText = require('center-text');
const boxen = require('boxen');
const chalk = require('chalk');

const cardContent = chalk `
{bold.green Saninn G. Salas Diaz}
Developer - Audio Technician - Music Producer

    {bold Web}: https://saninnsalas.com/
    {bold Twitter}: https://twitter.com/SaninnSalas
    {bold Xing}: https://www.xing.com/profile/Saninn_SalasDiaz
    {bold Facebook}: https://www.facebook.com/SaninnSD
`;

console.clear();

console.log(
    boxen(cardContent, {
        padding: 1,
        margin: 0,
        float: 'center',
        borderStyle: 'round',
        borderColor: 'green'
    })
);
const finalItems = [
    centerText(`( •_•)`),
    centerText(`     ( •_•)>⌐■-■`),
    centerText(`(⌐■_■)`),
    centerText(`#Yeahhhhhhh`),
];

console.log(`\n\n`);
const totalItems = finalItems.length;
finalItems.forEach((item, i) => {
    setTimeout(() => {
        console.log(item + '\n');

        if (i === finalItems.length - 1) {
            process.stdin.once('data', function () {
                console.log(centerText('Bye!'));
                process.exit();
            });
        }
    }, 800 * (1 + i));
});
#!/usr/bin/env node

const Brain = require('brain.js');
const fs = require('fs');

const helpText = `
=== AI Author ===
Flags:
	-i <iterations>		Determines how many iterations the network will train
	-o <path>		path to output file
	-t <path>		path to training data
	-h			print this help text
`

const net = new Brain.recurrent.LSTM();

let iterations = 1000;
let output = 'out';
let trainingDataPath;
for (const [index, flag] of process.argv.entries()) {
	if (flag === '-i') { iterations = process.argv[index+1]; }
	if (flag === '-o') { output = process.argv[index+1]; }
	if (flag === '-t') { trainingDataPath = process.argv[index+1]; }
	if (flag === '-h') {
		console.log(helpText);
		process.exit();
	}
}
if (iterations === undefined) { throw new Error('Please Provide Iterations'); }
if (output === undefined) { throw new Error('please provide output file name'); }
if (trainingDataPath === undefined) { throw new Error('please provide training data path') }

const trainingData = JSON.parse(fs.readFileSync(trainingDataPath).toString());

console.log('iterations', iterations, 'input', trainingDataPath, 'output:', output);
net.train(trainingData, {
	log: true,
	iterations: iterations,
});
console.log('done!');

fs.writeFileSync(`./${output}.json`, JSON.stringify(net.toJSON()));

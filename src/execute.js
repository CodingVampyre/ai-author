const Brain = require('brain.js');
const fs = require('fs');

let netJsonPath;
for (const [index, flag] of process.argv.entries()) {
    if (flag === '-n') { netJsonPath = process.argv[index+1]; }
}
if (netJsonPath === undefined) { throw new Error('Please Provide A Network'); }

const NetJson = JSON.parse(fs.readFileSync(netJsonPath).toString());
const net = new Brain.recurrent.LSTM();
net.fromJSON(NetJson);

console.log(net.run('', true));
console.log(net.run('', true));
console.log(net.run('', true));

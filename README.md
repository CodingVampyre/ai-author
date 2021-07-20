# AI Author
Command line tool to generate sentences based on other sentences.
It generates a brain.js net JSON that can be used with brain.js again.

## Usage
```shell
ai-author -t ./data/test-data.json -i 1000 -o my-net
```

## Flags
```text
-i <iterations>		Determines how many iterations the network will train
-o <path>		path to output file
-t <path>		path to training data
-h			print this help text
```

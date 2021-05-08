#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const path = require("path");
const caesarCipher = require("./caesarCipher");
const { pipeline } = require("stream");
const transformStream = require("./transformStream");

program.version("1.0.0");

program
  .requiredOption("-a, --action [type],", "an action encode/decode")
  .requiredOption("-s, --shift <number>", "a shift")
  .option("-i, --input <filename>", "an input file")
  .option("-o, --output <filename>", "an output file");

program.parse(process.argv);

const { action, shift, input, output } = program.opts();

if (action !== "decode" && action !== "encode") {
  process.stderr.write(
    "Error. Required parametr is missed. Please, write encode or decode action parametr.\n"
  );
  process.on("exit", () => {
    const exit = process.exit;
    exit(1);
  });
}

const readStream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: "a+" })
  : process.stdout;

const transform = new transformStream(caesarCipher, action, shift);

pipeline(readStream, transform, writeStream, (err) => {
  if (err) {
    console.error("Failed.", err);
  } else {
    console.log("Succeeded.");
  }
});

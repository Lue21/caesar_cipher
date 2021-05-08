# CipherCLI

Caesar cipher CLI tool.
It can encode and decode text data using Caesar's cipher.
The app transform only latin letters, other characters remain unchanged.

## How to install

1. Download or clone this repository
2. Use the command `npm i` or `npm install` to install the dependencies

## How to use

In the app folder write the command `caesar-cipher-cli [options]`, where the `options` are:

- `-s, --shift`: cipher shift (required, integer)
- `-a, --action`: action - encode/decode (required)
- `-i, --input`: input file (default: `stdin`)
- `-o, --output`: output file (default: `stdout`)

## Usage example

1. _-a (--action)_ is **encode**

```bash
$ caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ caesar-cipher-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ caesar-cipher-cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _Negative shift handling_

```bash
$ caesar-cipher-cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`

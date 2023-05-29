# BConverter
## A simple conversion way

An API that provides functionality for converting number bases. With this API, you can easily perform conversion operations between different number bases, such as binary, decimal and hexadecimal, allowing users to quickly and accurately convert numbers from one base to another.

BConverter is a flexible and scalable solution that can be easily integrated into applications, web systems or software projects. With clear and simple documentation, developers will be able to take full advantage of the functionalities offered by the API as a JavaScript package, simplifying the tasks of converting numerical bases and encryption/decryption in their projects.

### Installation

npm:
```
$ npm install bconverter
```

yarn:
```
$ yarn add bconverter
```

### Usage

```js
const { converter } = require("bconverter");

console.log(converter.decimalToBinary(10));
// output: 1010
```

This can also be started as a node.js server:

```
$ tsc --watch
$ yarn start
```

and then allow access to the project's API:

```
$ curl http://localhost:8080/converter/decimal-to-binary/10
```

### Conversion routes

| Prefix | Conversion type | Value type |
|--- |--- |--- |
| converter | decimal-to-binary | number |
| converter | binary-to-decimal | number |
| converter | decimal-to-hexadecimal | string |
| converter | hexadecimal-to-decimal | string |
| converter | binary-to-hexadecimal | string |
| converter | hexadecimal-to-binary | string |
| converter | decimal-to-octal | number |
| converter | hexadecimal-to-binary | string |
| converter | octal-to-decimal | number |
| converter | octal-to-hexadecimal | string |
| converter | hexadecimal-to-octal | string |
| converter | octal-to-binary | number |
| converter | binary-to-octal | number |

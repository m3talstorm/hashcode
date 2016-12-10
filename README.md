# Hashcode

[![Build Status](https://travis-ci.org/m3talstorm/hashcode.svg?branch=master)](https://travis-ci.org/m3talstorm/hashcode) [![Downloads](https://img.shields.io/npm/dm/hashcode.svg?style=flat)](https://www.npmjs.org/package/hashcode) [![Npm Version](https://img.shields.io/npm/v/hashcode.svg?style=flat)](https://www.npmjs.org/package/hashcode) [![Node Version](https://img.shields.io/node/v/hashcode.svg?style=flat)](https://www.npmjs.org/package/hashcode) [![Issues](https://img.shields.io/github/issues/m3talstorm/hashcode.svg?style=flat)](https://github.com/m3talstorm/hashcode/issues)

Hashcode is a simple javascript module for generating hashcodes (integer representations) of objects.


## Install

#### Node

~~~ bash
npm install hashcode --save
~~~

## Usage

#### Node

~~~ javascript

const Hashcode = require('hashcode')

const obj = {
    'foo' : 42,
    'bar' : "hello world",
    'baz' : false,
}

const hash = Hashcode.value(obj)

console.log(hash)


~~~

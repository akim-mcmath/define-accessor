# Define Accessor

[![Version][version-badge]][npm]
[![License][license-badge]][license]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]
[![Dependencies][dependencies-badge]][gemnasium]

**Define Accessor** is a simple utility for defining a getter/setter in
ES5 with the same [property descriptor][descriptor] as an [ES2015 class][class]
accessor.

## Install

Install with [npm][npm]:

```sh
npm install --save define-accessor
```

## Usage

In ES2015, we might do this:

```js
class Octopus {
  constructor(name) {
    this.name = name;
  }
  get nameEqualsTentacles() {
    return this.name.length === 8;
  }
}
```

In ES5, we can do this:

```js
var defineAccessor = require('define-accessor');

function Octopus(name) {
  this.name = name;
}

defineAccessor(Octopus, 'nameEqualsTentacles', function() {
  return this.name.length === 8;
});
```

And here is Vladimir:

```js
new Octopus('Vladimir').nameEqualsTentacles; // -> true
```

## API

#### `defineAccessor(constructor, prop, [getter], [setter])`

| Param | Type | Description |
| :---- | :--- | :---------- |
| constructor | `function` | The constructor function whose prototype the accessor will be added to |
| prop | `string` | The property name of the accessor |
| [getter] | `function` | A [`getter`][getter-link] function (optional) |
| [setter] | `function` | A [`setter`][setter-link] function (optional) |

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/define-accessor.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/define-accessor.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/akim-mcmath/define-accessor/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/akim-mcmath/define-accessor/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/akim-mcmath/define-accessor.svg?style=flat-square
[npm]: https://www.npmjs.com/package/define-accessor
[license]: LICENSE
[travis]: https://travis-ci.org/akim-mcmath/define-accessor
[coveralls]: https://coveralls.io/github/akim-mcmath/define-accessor?branch=master
[gemnasium]: https://gemnasium.com/akim-mcmath/define-accessor
[descriptor]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[class]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
[getter-link]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/get
[setter-link]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/set

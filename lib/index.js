'use strict';

function defineAccessor(ctor, prop, getter, setter) {
  getter = getter == null ? undefined : getter;
  setter = setter == null ? undefined : setter;

  Object.defineProperty(ctor.prototype, prop, {
    configurable: true,
    get: getter,
    set: setter
  });
}

module.exports = defineAccessor;

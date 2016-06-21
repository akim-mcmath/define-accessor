'use strict';

var should = require('chai').should();
var defineAccessor = require('./');

describe('defineAccessor(constructor, prop, [getter], [setter])', function() {
  var Octopus, getName, setName;

  beforeEach(function() {
    Octopus = function(name) { this._name = name; };
    getName = function() { return this._name; };
    setName = function(value) { this._name = value; };
  });

  it('is the main module', function() {
    defineAccessor.should.equal(require('../'));
  });

  it('adds accessor to constructor.prototype', function() {
    defineAccessor(Octopus, 'name', getName, setName);
    Octopus.prototype.should.have.property('name');
  });

  specify('accessor has the correct property descriptor', function() {
    defineAccessor(Octopus, 'name', getName, setName);
    var desc = Object.getOwnPropertyDescriptor(Octopus, 'name');
    desc.enumerable.should.be.false;
  });

  it('accepts getter only', function() {
    defineAccessor(Octopus, 'name', getName);
    var o = new Octopus('Vladimir');
    o.name.should.equal('Vladimir');
    (function() { o.name = 'Joe'; }).should.throw();
  });

  it('accepts setter only', function() {
    defineAccessor(Octopus, 'name', null, setName);
    var o = new Octopus('Joe');
    o.name = 'Vladimir';
    o._name.should.equal('Vladimir');
    should.equal(o.name, undefined);
  });

  it('accepts setter and getter only', function() {
    defineAccessor(Octopus, 'name', getName, setName);
    var o = new Octopus('Joe');
    o.name = 'Vladimir';
    o.name.should.equal('Vladimir');
    o._name.should.equal('Vladimir');
  });

});

/*global describe, require, it, expect */


describe('Contrived Math Module', function(){
  "use strict";

  var math = require('math');

  it('Should add',function(){
    expect(math.add(2,2)).toEqual(4);
  });

  it('Should subtract',function(){
    expect(math.subtract(42,31)).toEqual(11);
  });

  it('Should multiply', function(){
    expect(math.multiply(2,9)).toEqual(18);
  });

  it('Should divide', function(){
    expect(math.divide(8,4)).toEqual(2);
  });

});

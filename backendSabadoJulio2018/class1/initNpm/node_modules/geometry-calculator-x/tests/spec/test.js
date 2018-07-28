/*jslint maxlen:80, this:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:2, maxdepth:2,
  maxstatements:13, maxcomplexity:3 */

/*global JSON:true, module, require, describe, it, expect, returnExports */

(function () {
  'use strict';

  var cag;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function(key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function'){
        obj.shim();
      }
    });
    cag = require('../../index.js');
  } else {
    cag = returnExports;
  }

  describe('C.A.G Geometry Calculator', function () {
    var triangle;
    var rectangle;
    var circle;
    describe('RightAngledTriangle', function () {
      it('Constructor', function () {
        triangle = new cag.RightAngledTriangle(3, 4, 5);
        expect(triangle).not.toBe(null);
        expect(typeof triangle).toBe('object');
        expect(triangle instanceof cag.Shape).toBe(true);
      });
      it('circumference', function () {
        expect(triangle.circumference()).toBe(12);
      });
      it('area', function () {
        expect(triangle.area()).toBe(6);
      });
    });
    describe('Rectangle', function () {
      it('Constructor', function () {
        rectangle = new cag.Rectangle(3, 4);
        expect(rectangle).not.toBe(null);
        expect(typeof rectangle).toBe('object');
        expect(rectangle instanceof cag.Shape).toBe(true);
      });
      it('circumference', function () {
        expect(rectangle.circumference()).toBe(14);
      });
      it('area', function () {
        expect(rectangle.area()).toBe(12);
      });
    });
    describe('Circle', function () {
      it('Constructor', function () {
        circle = new cag.Circle(3);
        expect(circle).not.toBe(null);
        expect(typeof circle).toBe('object');
        expect(circle instanceof cag.Shape).toBe(true);
      });
      it('circumference', function () {
        expect(circle.circumference().toFixed(2)).toBe('18.85');
      });
      it('area', function () {
        expect(circle.area().toFixed(2)).toBe('28.27');
      });
    });
    describe('ShapesArea', function () {
      var shapes;
      it('Constructor', function () {
        shapes = new cag.ShapesArea(triangle, rectangle, circle);
        expect(shapes).not.toBe(null);
        expect(typeof shapes).toBe('object');
      });
      it('area', function () {
        expect(shapes.area().toFixed(2)).toBe('46.27');
      });
    });
  });
}());

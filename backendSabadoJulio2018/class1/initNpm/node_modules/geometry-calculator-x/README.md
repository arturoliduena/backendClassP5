<a name="module_geometry-calculator-x"></a>

## geometry-calculator-x
<a href="https://travis-ci.org/Xotic750/geometry-calculator-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/geometry-calculator-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/geometry-calculator-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/geometry-calculator-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href=
"https://david-dm.org/Xotic750/geometry-calculator-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/geometry-calculator-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/geometry-calculator-x" title="npm version">
<img src="https://badge.fury.io/js/geometry-calculator-x.svg"
alt="npm version" height="18">
</a>

A Javascript library that performs the C.A.G Geometry Calculator
requirements.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6-shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

`es7-shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 7.

**See**: https://gist.github.com/KristofferV/952493dfa53b1349e684c4fa2f203403  
**Version**: 1.0.1  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  

* [geometry-calculator-x](#module_geometry-calculator-x)
    * [~Shape](#module_geometry-calculator-x..Shape)
        * [`new Shape()`](#new_module_geometry-calculator-x..Shape_new)
        * [`.circumference()`](#module_geometry-calculator-x..Shape+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_geometry-calculator-x..Shape+area) ⇒ <code>number</code>
    * [~RightAngledTriangle](#module_geometry-calculator-x..RightAngledTriangle)
        * [`new RightAngledTriangle(x, y, h)`](#new_module_geometry-calculator-x..RightAngledTriangle_new)
        * [`.circumference()`](#module_geometry-calculator-x..RightAngledTriangle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_geometry-calculator-x..RightAngledTriangle+area) ⇒ <code>number</code>
    * [~Rectangle](#module_geometry-calculator-x..Rectangle)
        * [`new Rectangle(x, y)`](#new_module_geometry-calculator-x..Rectangle_new)
        * [`.circumference()`](#module_geometry-calculator-x..Rectangle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_geometry-calculator-x..Rectangle+area) ⇒ <code>number</code>
    * [~Circle](#module_geometry-calculator-x..Circle)
        * [`new Circle(r)`](#new_module_geometry-calculator-x..Circle_new)
        * [`.circumference()`](#module_geometry-calculator-x..Circle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_geometry-calculator-x..Circle+area) ⇒ <code>number</code>
    * [~ShapesArea](#module_geometry-calculator-x..ShapesArea)
        * [`new ShapesArea(...varArgs)`](#new_module_geometry-calculator-x..ShapesArea_new)
        * [`.area()`](#module_geometry-calculator-x..ShapesArea+area) ⇒ <code>number</code>

<a name="module_geometry-calculator-x..Shape"></a>

### geometry-calculator-x~Shape
**Kind**: inner class of <code>[geometry-calculator-x](#module_geometry-calculator-x)</code>  
**this**: <code>{Shape}</code>  
**Access:** public  

* [~Shape](#module_geometry-calculator-x..Shape)
    * [`new Shape()`](#new_module_geometry-calculator-x..Shape_new)
    * [`.circumference()`](#module_geometry-calculator-x..Shape+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_geometry-calculator-x..Shape+area) ⇒ <code>number</code>

<a name="new_module_geometry-calculator-x..Shape_new"></a>

#### `new Shape()`
The base object for other shapes to inherit from.

<a name="module_geometry-calculator-x..Shape+circumference"></a>

#### `shape.circumference()` ⇒ <code>number</code>
Zero for the default shape.

**Kind**: instance method of <code>[Shape](#module_geometry-calculator-x..Shape)</code>  
**Returns**: <code>number</code> - The circumference unit distance measurement.  
**this**: <code>{Shape}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..Shape+area"></a>

#### `shape.area()` ⇒ <code>number</code>
Zero for the default shape.

**Kind**: instance method of <code>[Shape](#module_geometry-calculator-x..Shape)</code>  
**Returns**: <code>number</code> - The area unit square measurement.  
**this**: <code>{Shape}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..RightAngledTriangle"></a>

### geometry-calculator-x~RightAngledTriangle
**Kind**: inner class of <code>[geometry-calculator-x](#module_geometry-calculator-x)</code>  
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  

* [~RightAngledTriangle](#module_geometry-calculator-x..RightAngledTriangle)
    * [`new RightAngledTriangle(x, y, h)`](#new_module_geometry-calculator-x..RightAngledTriangle_new)
    * [`.circumference()`](#module_geometry-calculator-x..RightAngledTriangle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_geometry-calculator-x..RightAngledTriangle+area) ⇒ <code>number</code>

<a name="new_module_geometry-calculator-x..RightAngledTriangle_new"></a>

#### `new RightAngledTriangle(x, y, h)`
A right triangle (American English) or
right-angled triangle (British English) is a triangle in which one angle
is a right angle (that is, a 90-degree angle). The relation between the
sides and angles of a right triangle is the basis for trigonometry.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The base unit distance measurement. |
| y | <code>number</code> | The height unit distance measurement. |
| h | <code>number</code> | The hypotenuse unit distance measurement. |

**Example**  
```js
var triangle = new RightAngledTriangle(3, 4, 5);
console.log(triangle.circumference()); // 12
console.log(triangle.area()); // 6
```
<a name="module_geometry-calculator-x..RightAngledTriangle+circumference"></a>

#### `rightAngledTriangle.circumference()` ⇒ <code>number</code>
The circumference of a right angled triangle is the sum of the three
side lengths.
<pre>Circumference = x + y + h</pre>

**Kind**: instance method of <code>[RightAngledTriangle](#module_geometry-calculator-x..RightAngledTriangle)</code>  
**Returns**: <code>number</code> - The circumference unit distance measurement.  
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..RightAngledTriangle+area"></a>

#### `rightAngledTriangle.area()` ⇒ <code>number</code>
The area is given by the area formula for an arbitrary triangle.
<pre>Area = (1 / 2) * B * h</pre>
If the triangle is right angled, as in this case, the side y is the
same as the height an y is the same as the base line.
<pre>Area = (1 / 2) * y * x</pre>

**Kind**: instance method of <code>[RightAngledTriangle](#module_geometry-calculator-x..RightAngledTriangle)</code>  
**Returns**: <code>number</code> - The area unit square measurement.  
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..Rectangle"></a>

### geometry-calculator-x~Rectangle
**Kind**: inner class of <code>[geometry-calculator-x](#module_geometry-calculator-x)</code>  
**this**: <code>{Rectangle}</code>  
**Access:** public  

* [~Rectangle](#module_geometry-calculator-x..Rectangle)
    * [`new Rectangle(x, y)`](#new_module_geometry-calculator-x..Rectangle_new)
    * [`.circumference()`](#module_geometry-calculator-x..Rectangle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_geometry-calculator-x..Rectangle+area) ⇒ <code>number</code>

<a name="new_module_geometry-calculator-x..Rectangle_new"></a>

#### `new Rectangle(x, y)`
In Euclidean plane geometry, a rectangle is a quadrilateral with four
right angles. It can also be defined as an equiangular quadrilateral,
since equiangular means that all of its angles are equal. It can also be
defined as a parallelogram containing a right angle. A rectangle with
four sides of equal length is a square. The term oblong is occasionally
used to refer to a non-square rectangle.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The base unit distance measurement. |
| y | <code>number</code> | The height unit distance measurement. |

**Example**  
```js
var rectangle = new Rectangle(3, 4, 5);
console.log(rectangle.circumference()); // 14
console.log(rectangle.area()); // 12
```
<a name="module_geometry-calculator-x..Rectangle+circumference"></a>

#### `rectangle.circumference()` ⇒ <code>number</code>
The circumference of a rectangle is the sum of the two side
lengths then doubled.
<pre>Circumference = (x + y) * 2</pre>

**Kind**: instance method of <code>[Rectangle](#module_geometry-calculator-x..Rectangle)</code>  
**Returns**: <code>number</code> - The circumference unit distance measurement.  
**this**: <code>{Rectangle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..Rectangle+area"></a>

#### `rectangle.area()` ⇒ <code>number</code>
To find the area of a rectangle, multiply the length by the width.
<pre>Area = x * y</pre>

**Kind**: instance method of <code>[Rectangle](#module_geometry-calculator-x..Rectangle)</code>  
**Returns**: <code>number</code> - The area unit square measurement.  
**this**: <code>{Rectangle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..Circle"></a>

### geometry-calculator-x~Circle
**Kind**: inner class of <code>[geometry-calculator-x](#module_geometry-calculator-x)</code>  
**this**: <code>{Circle}</code>  
**Access:** public  

* [~Circle](#module_geometry-calculator-x..Circle)
    * [`new Circle(r)`](#new_module_geometry-calculator-x..Circle_new)
    * [`.circumference()`](#module_geometry-calculator-x..Circle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_geometry-calculator-x..Circle+area) ⇒ <code>number</code>

<a name="new_module_geometry-calculator-x..Circle_new"></a>

#### `new Circle(r)`
A circle is a simple closed shape in Euclidean geometry. It is the set of
all points in a plane that are at a given distance from a given point,
the centre; equivalently it is the curve traced out by a point that moves
so that its distance from a given point is constant. The distance between
any of the points and the centre is called the radius.


| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The radius unit distance measurement. |

**Example**  
```js
var circle = new Circle(3);
console.log(circle.circumference()); // 18.84
console.log(circle.area()); // 28.27
```
<a name="module_geometry-calculator-x..Circle+circumference"></a>

#### `circle.circumference()` ⇒ <code>number</code>
The circumference of a circle relates to one of the most important
mathematical constants in all of mathematics.
<pre>Circumference = 2 * PI * r</pre>

**Kind**: instance method of <code>[Circle](#module_geometry-calculator-x..Circle)</code>  
**Returns**: <code>number</code> - The circumference unit distance measurement.  
**this**: <code>{Circle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..Circle+area"></a>

#### `circle.area()` ⇒ <code>number</code>
To find the area of a circle.
<pre>Area = PI * (r^2)</pre>

**Kind**: instance method of <code>[Circle](#module_geometry-calculator-x..Circle)</code>  
**Returns**: <code>number</code> - The area unit square measurement.  
**this**: <code>{Circle}</code>  
**Access:** public  
<a name="module_geometry-calculator-x..ShapesArea"></a>

### geometry-calculator-x~ShapesArea
**Kind**: inner class of <code>[geometry-calculator-x](#module_geometry-calculator-x)</code>  
**this**: <code>{ShapesArea}</code>  
**Access:** public  

* [~ShapesArea](#module_geometry-calculator-x..ShapesArea)
    * [`new ShapesArea(...varArgs)`](#new_module_geometry-calculator-x..ShapesArea_new)
    * [`.area()`](#module_geometry-calculator-x..ShapesArea+area) ⇒ <code>number</code>

<a name="new_module_geometry-calculator-x..ShapesArea_new"></a>

#### `new ShapesArea(...varArgs)`
Total area of multiple shapes (not only triangles and rectangles but also
other types of shapes that impliment #area).


| Param | Type | Description |
| --- | --- | --- |
| ...varArgs | <code>Object</code> | The shapes to calculate the total area of. |

**Example**  
```js
var shapesArea = new ShapesArea(triangle, rectangle, circle);
console.log(shapesArea.area()); // 46.27
```
<a name="module_geometry-calculator-x..ShapesArea+area"></a>

#### `shapesArea.area()` ⇒ <code>number</code>
To find the area of all the shapes supplied to the constructor.

**Kind**: instance method of <code>[ShapesArea](#module_geometry-calculator-x..ShapesArea)</code>  
**Returns**: <code>number</code> - The area unit square measurement.  
**this**: <code>{ShapesArea}</code>  
**Access:** public  

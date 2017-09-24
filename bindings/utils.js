// utils.js
export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}
export var foo = 'bar';
export var baz = 'ponyfoo';
export var tutu = 'tutu!!!';
setTimeout(() => tutu = 'chazam?', 500)

/*
In CommonJS you don’t even have to assign an object to module.exports
first. You could just tack properties onto it. It’s still a single
binding being exported – whatever properties the module.exports
object ends up holding.

module.exports.foo = 'bar'
module.exports.baz = 'ponyfoo'

We can replicate the above in ES6 modules by using the named exports
syntax. Instead of assigning to module.exports like with CommonJS,
in ES6 you can declare bindings you want to export. Note that the
code below cannot be refactored to extract the variable declarations
into standalone statements and then just export foo, as that’d be
a syntax error. Here again, we see how ES6 modules favor static
analysis by being rigid in how the declarative module system API
works.

export var foo = 'bar'
export var baz = 'ponyfoo'

An important point to make is that ES6 modules export bindings, not
values or references. That means that a foo variable you export
would be bound into the foo variable on the module, and its value
would be subject to changes made to foo.
*/

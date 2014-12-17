/**
 * TO DO: Add more tests!
 */
var Newick = require('../src/newick');
var print = require('sys').print;

var assert = function(x) {
  if (x) {
    print(".");
  } else {
    print("F");
  }
};

var tree = '(A: 0.1,B: 0.2,(C:0.3,D:0.4)E:0.5)F;';
var x = Newick.parse(tree);
assert(x.name == 'F');
assert(x.branchset.length == 3);
assert(x.branchset[0].name == 'A');
print(' # parse\n');

var n = Newick.serialize(x);
assert(n === tree.replace(/\s+/g, ''));
print(' # serialize\n');

var y = Newick.parse(n);
assert(y.name === x.name);
assert(y.branchset.length === x.branchset.length);
assert(y.branchset[0].name === x.branchset[0].name);
print(' # round-trip\n');

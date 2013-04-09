
// Simple example of a list of types and the hashes the produce.
// For each one it generate a hash and displays it in the development console.
var types = 
{
    'undefined' : undefined,
    'null' : null,
    'NaN' : NaN,
    
    'stringEmpty' : "",
    'stringFilled' : "a",
    'stringNumber' : "1",
    
    'numberMax' : Number.MAX_VALUE,
    'numberMin' : Number.MIN_VALUE,
    'numberPInfinity' : Number.POSITIVE_INFINITY,
    'numberNInfinity' : Number.NEGATIVE_INFINITY,
    'numberNegative' : -1,
    'numberZero' : 0,
    'numberPositive' : 1,
    
    'decimanlZero' : 0.0, // produces the same hash as 0
    'decimanlOne' : 1.0, // produces the same hash as 1
    'decimalNotOne' : 1.5,
    
    'objectEmpty' : {},
    'objectNotEmpty' : { a : 5},
    
    'booleanTrue' : true,
    'booleanFalse' : false,
    
    'functionEmpty' : function() {},
    'functionNotEmpty' : function(a, b) { return a + b; },
};

for(var type in types)
{
    var hash = Hashcode.value(types[type]);
    console.log(type, types[type], hash);
}

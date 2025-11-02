let a = 11, b = 22;

c = a + b + a++ + b++ + ++a + ++b;

console.log("a=" + a)
console.log("a=" + b)
console.log("a=" + c)
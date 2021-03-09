function Foo (){}
Foo.prototype.bar=function(){
	return "I am a bar";
};
var foo=new Foo();
console.log(foo.bar);

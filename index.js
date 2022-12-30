function Base (arg) {
  this.arg = arg;
}

Base.prototype.plus = function (...part) {
 this.arg = this.arg + part.reduce(function(item, next){
    return item+next
  })
  return this
}
Base.prototype.minus = function (){
  throw new Error ('This abstract method will be implement in child');
  
}

Base.prototype.multiply = function (){
  throw new Error ('This abstract method will be implement in child');
  
}
Base.prototype.divide = function (){
  throw new Error ('This abstract method will be implement in child');
  
}

function StringBuilder (arg) {
  Base.call(this, arg);
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.superclass= Base;

StringBuilder.prototype.minus = function (char) {
 this.arg = this.arg.slice(0, -char);
 return this;
}

StringBuilder.prototype.multiply = function (num) {
  var a = [this.arg];
  a.length = num;
  this.arg = a.join(this.arg);
 return this;
}
StringBuilder.prototype.divide = function (n) {
 var k = Math.floor((this.arg.length)/n);
 this.arg = this.arg.slice(0,k);
  return this;
 }
 StringBuilder.prototype.remove = function (str) {
  if(this.arg.match(str)) {
    this.arg = this.arg.split(`${str}`).join('');
  }
   return this;
  }
  StringBuilder.prototype.sub = function (from, n) {
      this.arg = this.arg.substring(from, n);
     return this;
    }
const exp = new StringBuilder('dilbar ');
console.log(exp.plus('aaaabbbbbbbbccccccc').minus(2).multiply(2).divide(3).remove('dil').sub(6, 1));
var ages = [28, 26,16];
console.log(ages.length);
var num1 = "99.5";
 var num2 = 15;
  console.log(num1+num2);
//index 
var ageindex = ages.indexOf(28);
console.log(ageindex);

//minus index value 
var index = ages.indexOf(125);
console.log(index);


var secondindex = ages[2];
console.log(secondindex);
var secondindex = ages[20];
console.log(secondindex);

//index value change
ages[1] = 124;
console.log(ages);


//add an element in last of array
ages.push(34);
console.log(ages);

//delete  an element in last of array
ages.pop();
console.log(ages);

//reserve array pop element
var lastelement = ages.pop();
console.log(ages);
console.log(lastelement);

//insert element in a array of 1st index
ages.unshift(12,188,234);
console.log(ages);

//delete element in a array of 1st index
ages.shift();
console.log(ages);

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","marvel"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);

//array methods

myArr.push(6)
console.log(myArr);
myArr.pop()
myArr.unshift(6)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join()
console.log(myArr);
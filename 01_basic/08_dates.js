let mydate =new Date()
console.log(mydate.toString());
console.log(mydate.toJSON);
console.log(mydate.toLocaleString);

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toLocalString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

'${newDate.getDay()}'
newDate.tolocaleString('default',{
    weekday:"long"
    
})

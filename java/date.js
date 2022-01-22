//create a date
//new date

const now=new Date();
console.log(now);

console.log(new Date('the aug 03 2021 09:39:37'));
console.log(new Date('december 25, 2015'));

console.log(new Date(2021, 10, 19, 15, 23, 5));
console.log(new Date(2021,10,33));

console.log(new Date(0));
//console.log(new Date(3* 24 * 60 * 60 * 1000 ));

//working with dates
const future=new Date(2021, 07, 03, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOS     tring());
console.log(future.getTime());

console.log(new Date(1627984380000));

console.log(Date.now());

console.log(new Date(1627971572597));

future.setFullYear(2040);
console.log(future);
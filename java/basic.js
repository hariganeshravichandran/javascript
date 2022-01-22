/*      const marksweight=78;
const marksheight=1.69;
const johnweight=92;
const johnheight=1.95;
const bmimarks = marksweight / (marksheight*marksheight);
const bmijohn = johnweight / (johnheight*johnheight);
console.log("bmimarks:" + bmimarks);
console.log("bmimarks:" + bmijohn);
console.log(bmimarks>bmijohn);


const marksweight1=95;
const marksheight1=1.88;
const johnweight1=85;
const johnheight1=1.76;
const bmimarks1 = johnweight1 / (marksheight1*marksheight1);
const bmijohn1= johnweight1 / (johnheight1*johnheight1);
console.log("bmimarks1:" + bmimarks1);
console.log("bmimarks1:" + bmijohn1);
console.log(bmimarks1>bmijohn1);

if(bmimarks>bmijohn){
      console.log('marks bmi is higher than john');
}else{
    console.log('john bmi is higher than marks');
}
const test1=bmimarks-bmijohn
const test2=bmijohn-bmimarks
if(bmimarks<bmijohn){
    console.log(`marks bmi is ${test1} higher than john`); 
}else{
    console.log(`marks bmi is ${test2} lower than john`) 
}*/


/*const score1=96;
const score2=108;
const score3=89;
const dolphins= (score1+score2+score3)/3;
console.log(`dolphins average is ${dolphins}`);

const score4=88;
const score5=91;
const score6=110;
const koalas= (score4+score5+score6)/3;
console.log(`koalas average is ${koalas}`);


if(dolphins>koalas){
    console.log(`average of dolphins value is higher than koalas`);
}else if(dolphins<koalas){
    console.log(`average of dolphins value is lower than koalas`);
}
console.log(`both are equal,so the match can be draw`);*/

//type convertion
//const inputyear=`1991`;
//console.log(Number(inputyear), inputyear);
//console.log(Number(inputyear)+18);

//type coercion
//console.log('i am ' +23+ ' years old');
//console.log('23'-'10'-3);

//equality
//const age='18';
//if(age==='18') console.log('strict');
//if(age==18) console.log('loose');

//logical
/*const license=true;
const goodvision=true;

console.log(license&&goodvision);
console.log(license||goodvision);
console.log(!license);

const tired=false;
console.log(license&&goodvision&&tired);

if(license&&goodvision&&tired){
    console.log('drive');
}else{
    console.log('not drive');
}*/

/*const teamA=[97,112,101];
const teamB=[109,95,123];

for (i=0; i<5 ; i++)
{
    if(teamA[i]>=100 && teamB[i]>=100)
{
    if (teamA[i]>teamB[i])
    {
        console.log("teamA is a winner");
    }
    else if(teamA[i]<teamB[i])
    {
        console.log("teamB is a winner");
    }
    else if(teamA[i]=teamB[i])
    {
        console.log("the match is tied");
    }
}
}*/
/*const scoredolphins = (96 + 108 + 89 ) / 3;
const scorekoalas = (88 + 91 +110) / 3;
console.log(scoredolphins, scorekoalas);

if (scoredolphins > scorekoalas) {
    console.log('dolphins win the trophy');
}else if (scorekoalas > scoredolphins) {
    console.log(' kolas win the trophy');
}else if(scoredolphins === scorekoalas) {
    console.log('both win the trophy!');
}*/

//the switch statement

/*const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday'
    console.log('plan course structure');
    console.log('go to coding class');
    break;
    case  'tuesday':
    console.log('prepare the test cases');
    break;
    case  'wednesday':
    case  'thursday':
    console.log('write the code with examples');
    break;
    case  'friday':
    console.log('files the topics are the copleted');
    break;  
    case  'saturday':
    case 'sunday':
    console.log('enjoy the weekend :D');
    break;
    default:
    console.log('not a valid day!');
}*/

// statement and expressions

/*3 + 4
1991
true &&false && !false

if(23 > 10) {
    const str= '23 is bigger';
}

const me = 'jonas';
console.log(`I'm ${2037- 1991}years old ${me}`); */

//the conditional (tenary) operator

/*const age =16;
age >=18 ? console.log('like to drink coffee') : console.log('like to drink water');

const drink = age >=18 ? 'coffee' : 'water';
console.log(drink);

let drink2;
if (age >=18); {
   drink2='coffee' ;
}
console.log(drink2);

console.log(`i like to drink ${age >=18 ? 'coffee' : 'water'}`);*/


/*const bill=275;
console.log('test 1')
bill>=50 && bill<=300 ? console .log(`the bill was ${bill},the tip was ${ bill*(15/100)},and the total vales ${bill+(bill*(15/100))}`):
console.log(`the bill was ${bill}, the tip was ${ bill*(20/100)}, and the total valves ${bill+(bill*(20/100))}`);

const bill1=40;
console.log('test 2')
bill>=50 && bill<=300 ? console .log(`the bill was ${bill},the tip was ${ bill*(15/100)},and the total vales ${bill+(bill*(15/100))}`):
console.log(`the bill was ${bill}, the tip was ${ bill*(20/100)}, and the total valves ${bill+(bill*(20/100))}`);

const bill2=430;
console.log('test 3')
bill>=50 && bill<=300 ? console .log(`the bill was ${bill},the tip was ${ bill*(15/100)},and the total vales ${bill+(bill*(15/100))}`):
console.log(`the bill was ${bill}, the tip was ${ bill*(20/100)}, and the total valves ${bill+(bill*(20/100))}`);*/

/*const change=prompt("your day");
cons:day=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
if(change===day[0]){
    console.log('plan course');
    console.log('go to coding class');
}else if (change===day[1]) {
    console.log('prepare the test class');
}else if (change===day[2]) {
    console.log('write the code with example');
}else if (change===day[3]) {
    console.log('write the code with example');
}else if (change===day[4]) {
    console.log('file the topics are copleted');
}else if (change===day[5]) {
    console.log('enjoy the weekend');
}else if (change===day[6]) {
    console.log('enjoy the weekend');
}else{
    console.log('not a valid day');
}*/



/*change='hari';
if(change==='monday'){
    console.log('plan course');
    console.log('go to coding class');
}else if (change==='tuesday') {
    console.log('prepare the test class');
}else if (change==='wednesday') {
    console.log('write the code with example');
}else if (change==='thursday') {
    console.log('write the code with example');
}else if (change==='friday') {
    console.log('file the topics are copleted');
}else if (change==='saturday' || change==='sunday'){
    console.log('enjoy the weekend');
}else{
    console.log('not a valid day');
}*/

//functions
/*function log() {
    console.log('calling the function');

}
//calling/running/invoking function
log();
log();
log();*/

//fruitshop

/*
function fruitshop(apples,oranges) {
    const juice=`i want ${apples} kgs of apples and ${oranges} kgs of orange.`;
    return juice;
}
console.log(fruitshop (5,4));

const buyapple = fruitshop(5,0);
console.log(buyapple);

const buyorange = fruitshop(2,4);
console.log(buyorange);
*/

//function declaration vs expression;
//function declaration
/*
function calcage1(birthyear){
    return 2037 - birthyear;
}
const age1=calcage1(1991); //call anywhere

// functions expression or anonymous function
const calcage2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2=calcage2(1991);
const calcage3 = function (birthyear) {
    return 2037 - birthyear;
}
const age3=calcage3(1998);

console.log(age1 , age2 , age3);
console.log(age2);
*/
//arrow functions

/*
const calcage3 = birthyear => 2021 - birthyear;
const age3=calcage3(1991);
console.log(age3);

const yearsuntilretirement = (birthyear, firstname) => {
    const age =2021 -birthyear;
    const retirement = 58 -age;
    //returnretirement;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsuntilretirement(1991,'kumar'));
console.log(yearsuntilretirement(1970,'steve'));
*/

//functions calling other functions
/*
function numberofpersons(fruit) {
    return fruit * 2;
}

function fruitshop(apples,oranges) {
    const applebag=numberofpersons(apples);
    const orangebag=numberofpersons(oranges);
    const seller = `i want ${applebag} kgs of applebags for two family and ${orangebag}kgs of orangebags for four family.`;
    return seller;
}

console.log(fruitshop(2, 4));

*/

//reviewing functions
/*

const calcage = function (birthyear) {
    return 2021 - birthyear;
}

const yearsuntilretirement = function(birthyear,firstname) {
    const age = calcage(birthyear)
    const retirement=58-age;
    if(retirement > 0) {
        console.log(` ${firstname} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(` ${firstname} has already retired`);
        return -1;
    }
    
}

console.log(yearsuntilretirement(1991 , 'john'));
console.log(yearsuntilretirement(1950,'mike'));
*/

/*function calcaverage(val1,val2,val3,val4,val5,val6){
    const avgdolphins=(val1+val2+val3)/3;
    const avgkolas=(val4+val5+val6)/3;
    checkwinner(avgdolphins,avgkolas);
}
function checkwinner(avgdolphins,avgkolas){
   if(avgdolphins>=(2*avgkolas)){
    console.log(`dolphins wins (${avgdolphins}vs ${avgkolas})` );
 }else if(avgkolas>=(2*avgdolphins)){
    console.log(`kolas wins (${avgkolas} vs ${avgdolphins})`);
 }else{
    console.log(`no one can win`);
 }
}
console.log(`data1`);
calcaverage(44,23,71,65,54,49);
console.log(`data2`);
calcaverage(85,54,41,23,34,27);
*/ 
/*
////or///
const calcaverage =(a,b,c) => (a+b+c)/3;
console.log(calcaverage(3,4,5));

//test1
let scoredolphins = calcaverage(44,23,71);
let scorekolas = calcaverage(65,54,49);
console.log(scoredolphins,scorekolas);

//test2
scoredolphins=calcaverage(85,54,41);
scorekolas=calcaverage(23,34,27);
console.log(scoredolphins,scorekolas);
//checkwinner (scoredolphins, scorekolas);

const checkwinner= function (avgdolphins, avgkolas) {
    if (avgdolphins >= 2*avgkolas) {
        console.log(`dolphin win🔥 (${avgdolphins} vs ${avgkolas})` );
    }else if (avgkolas >=2*avgdolphins) {
        console.log(`kolas win 🔥(${avgkolas} vs ${avgdolphins})`);
    }else {
        console.log('no team wins...');
    }
}
checkwinner(scoredolphins,scorekolas);
*/

/////////introducin arrays////////////
/*
const friend1='hari';
const friend2='manoj';
const friend3='bala';

const friends =['hari','manoj','bala'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2]='viji';
console.log(friends);

const firstname='manoj';
const fullname=[firstname+'kumar',(3-1),friends[0]];
console.log(fullname);
console.log(fullname.length);
*/

//small excercise
/*
const calcage=function(birthyear){
    return 2021-birthyear;
}
const years = [1998,1999,2000,2001];
calcage(years);
const age1=calcage(years[0]);
const age2=calcage(years[1]);
const age3=calcage(years[years.length-1]);
console.log(age1,age2,age3);
           ///other method
const ages=[calcage(years[0]),(years[1]),calcage(years[years.length-1])]
console.log(ages)
*/

////basic array operation
/*

const friends=['manoj','hari','bala'];

//add elements


friends.push('viji');//---------->join name is last
console.log(friends);
console.log(friends.length);

friends.unshift('kanaga'); //------->join name is first
console.log(friends);

///remove elements

friends.pop();//--------->clear name is last
//const popped=friends.pop()
//console.log(popped);
console.log(friends);

friends.shift(); //-------->cleaer name is first
console.log(friends);

//other elements
console.log(friends.indexOf('bala'));
console.log(friends.indexOf('viji'));

console.log(friends.includes('manoj'));
console.log(friends.includes('viji'));
friends.push('viji')
console.log(friends.includes('viji'));   */

/////excercise//////
/*
const calctip=function (bill) {
    return bill>= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
// const calctip = bill => bill >= 50 && bill <=300? bill *0.15 : bill * 0.2;

const bills=[125,555,44];
const tips=[calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
const totals=[bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];
console.log (bills, tips ,totals);
*/

//introducion of object
/*
const array=[
    'manoj',
    'kumar',
    2021-1999,
    'be'
    ['hari','bala','viji']//multiple value is undefined
];
console.log(array);
//difference in object
const object={
    firstname: 'manoj',
    lastname: 'hari',
    age: 2021-1999,
    job:'be',
    friends:['hari','bala','viji']
};
console.log(object);
*/

//////dot vs bracketnotation
/*
const object={
    firstname: 'manoj',
    lastname: 'hari',
    age: 2021-1999,
    job:'be',
    friends:['hari','bala','viji']

};
console.log(object);
console.log(object.lastname);
console.log(object['age']);
///difference
const name='name';
console.log(object['first'+name]);
///console.log(object.firstname)//not defined


const interpt=prompt('what do u want? choose the following');
if(object[interpt]){
    console.log(object[interpt]);
}else{
    console.log('wrong request! not used in object');
}
object.location='chennai';
object['mail.id']='ganeshhari723@gmail.com';
console.log(object);

///challenge in sentence
///manoj has 3 friends, and his best friend is hari
console.log(`${object.firstname} has ${object.friends.length} friends, and his best friend is ${object.friends[0]}`);

*/

///object method-----------
/*
const family={
    father:'ravichandran',
    mother:'vijayarani',
    sister:'mari',
    me:'hari',
    ageme:1998,
    friends:['hari','bala','viji'],
    license:false,

    //1
    //calcage: function(ageme){
    // return 2021-1999;    
    //}

    //2
    //calcage: function(){
    //  this.age=(2021-this.ageme);
    //   return this.age;
    //}

    //3
    //summary: function{
    //  return `father name is ${this.father} and mother name is ${this.mother}.i am ${2021-this.ageme} years old and and i has ${this.license ? 'a' : 'no'}drivers license.`
    //}
}

//console.log(family.calcage(1999));
//console.log(family.calcage());
//console.log(family.summary());
*/


//excersise 5
/*

const mark={
    firstname:'mark',
    lastname:'miller',
    weight:78,
    height:1.69,
    calcbill: function(){
        this.bmi=(this.weight/(this.height**2));
        return this.bmi;
    }
};
const john={
    firstname: 'john',
    lastname: 'smith',
    weight: 92,
    height: 1.95,
    calcbill: function(){
        this.bmi=(this.weight/(this.height**2));
        return this.bmi;
    }
};
((mark.calcbill())>(john.calcbill())) ? console.log(`${mark.firstname} ${mark.lastname}'s bmi (${mark.calcbill()}) is higher than ${john.firstname} ${john.lastname} bmi (${john.calcbill()})`):
                                        console.log(`${john.firstname} ${john.lastname}'s bmi (${john.calcbill()}) is higher than ${mark.firstname} ${jmark.lastname} bmi (${mark.calcbill()})`);
*/


    /*var age= 21;
    var gpa=8.7;
    console.log(age);
    console.log(gpa);*/
   /* var octnum = 0256;
    var hexnum = 0XFB;
    console.log(octnum);
    console.log(hexnum);*/

    ///iteration: the for loop

   /* console.log('lifting weights repetition 1 🏋️‍♀️');
    console.log('lifting weights repetition 2 🏋️‍♀️');
    console.log('lifting weights repetition 3 🏋️‍♀️');
    console.log('lifting weights repetition 4 🏋️‍♀️');
    console.log('lifting weights repetition 5 🏋️‍♀️');
    console.log('lifting weights repetition 6 🏋️‍♀️');
    console.log('lifting weights repetition 7 🏋️‍♀️');
    console.log('lifting weights repetition 8 🏋️‍♀️');
    console.log('lifting weights repetition 9🏋️‍♀️');
    console.log('lifting weights repetition 10🏋️‍♀️');*/

    ////////or//////

    //note:for loop keeps running while he condition is true
    /*for (let rep=1; rep <=10; rep++) {
        console.log(`lifting weights reptition ${rep} 🏋️‍♀️`);
    }*/
/*
    const cr =[
        'hari',
        'ganesh',
        2021 -1991,
        'be',
        ['father','mother','sister'],
        true
    ];
    const types = [];

    // console.log(cr[0])
    // console.log(cr[1])
    //...
    //console.log(cr[4])
    //jonas[5] does not exist

    for (let i=0;i<cr.length;i++){
         console.log(cr[i],typeof cr[i]);

         //filling the empty array
         types[1]=typeof cr[i];
         //types.push(typeof cr[i]);
    }
    console.log(types);
    */
    //++ ===> increment; -->decrement
    ///continue and break
    /*const cr =[
        'hari',
        'ganesh',
        2021 -1991,
        'be',
        ['father','mother','sister'],
        true
    ];
    //continue
    for (let i=0; i<cr.length;i++){
        if(typeof cr[i]!=='string')continue;
        console.log(cr[i],typeof cr[i]);
    }
    //break
    for (let i=0; i<cr.length;i++){
        if(typeof cr[i]!=='boolean')break;
        console.log(cr[i],typeof cr[i]);
    }
    */

    //increment ====>0,1,2,3,..... (++)
    //decrement ====>....,3,2,1,0   (--)
/*
    const cr =[
        'hari',
        'ganesh',
        2021 -1991,
        'be',
        ['father','mother','sister'],
        true
    ];
    for (let i=cr.length-1; i>0;i--){
        console.log(i,cr[i]);
    }
    //for (for())

    for (let excercies=1;excercies<4;excercies++){
        console.log(`starting excercice ${excercies}`);

        for (let rep=1; rep<10; rep++){
            console.log(`excercies ${excercies}: lifting weight repitition ${rep}`);
        }
    }
    */
   //the while loop
/*
   for (let rep=1; rep<10;rep++){
       console.log(`lifting weights repetition ${rep}`);
   }

   let rep=1;
   while(rep<=10){
       console.log(`lifting weight repetition ${rep}`);
       rep++;
   }
   let dice=math.trunc(math.random()*6)+1;
   console.log(dice);

   while (dice !==6){
       console.log(`you rolled a ${dice}`);
       dice = math.trunc(math.random()*6)+1;
       if(dice === 6) console.log(`loop is to be end...`);
   }
   */

   //excersice
   /*
   function calctip() {
       let bills=[22,295,176,440,37,105,10,1100,86,52];
       let tips=[];
       let totals=[];
       for (i=0 ; i < bills.length ; i++){
        tips.push(bills[i] >= 50 && bills[i] <=300 ? bills[i] * 0.15 : bills[i]* 0.2);
        totals.push(bills[i] + tips[i]);
       }
       console.log(bills,tips,totals);
       const calcsum= bills.reduce( (previousvalue,currentvalue) => previousvalue + currentvalue , 0);
       const calcaverage = (calcsum / bills.length);
       console.log[`the sum is (${calcsum})and the average is (${calcaverage}).`]
       
   }
   calctip();
   */
  

// console.log("document", document);


// // acess methods

// // getElementById
// // getElementByclassName
// // getElementByTagName--> id - queryselector('.cls')---- -. class
// //    queryselector all()--->return as nodelist

// // purpose
// // 1.value change
// // 2.value access
// //innerHTML ---> get or set the contents of elements


// console.log(document.getElementById('dom').innerHTML);
// console.log(document.getElementById('dom').innertext);

// console.log("get innerHTML",document.getElementById('javascript').innerHTML);
// console.log("get innerText",document.getElementById('javascript').innerText);
// console.log("get innerHTML",document.getElementById('javascript').innerHTML="dom class");
// console.log("get innerText",document.getElementById('javascript').innerText);

// console.log(document.getElementsByTagName('div'));

// let divclass=document.getElementsByClassName('my class')
// console.log(divclass)

// document.getElementsByClassName('my class')[0].innerHTML="changed cls"
// console.log(divclass)

// let arr=[1,2,3,4];

// console.log("divclass",divclass)  //returns as array

// for (let j=0;j<divclass.length;j++){
//     divclass[j].innerText='cc changed' ;
// }

// for (let j=0;j<divclass.length;j++){
//     divclass[j].innerHTML='<p>changed the content to ptag</p>';
// }

// // document.getElementById('javascript').setAttribute('id','dom javascript')
// //console.log(document.getElementById('javascript').setAttribute('id','dom javascript'))

// document.getElementById('javascript').classList.add('cls');
// document.getElementById('javascript').classList.remove('cls');

// //create element

// let contact=document.createElement('div');
// console.log("contact id", contact);

// //id add

// contact.classList.add('contact')
// console.log("contact class",contact);

// //inserting tag

// let named=document.createElement('h1');
// named.setAttribute('id','name_details');
// named.innerText="crud operation"

// contact.appendChild(named);
// console.log("contact append", contact);

// let address=document.createElement('h4')
// address.setAttribute('id', 'address_deatails')
// address.innerText="145,Gst ROAD, urappakam"
// contact.appendChild(address);

// let link= document.createElement('a')
// //{<a href=""target="_blank"></a>}

// link.setAttribute('href',"http://www.crud-opertions.com");
// link.setAttribute('target',"_blank")
// link.innerText="crud operationswebsite click here"

// contact.appendChild(link);

// //document.body.appendchild(contct)

// //queryselector

// console.log("queryselector",document.querySelector('.myclass'))

// console.log("queryselector",document.querySelectorAll('.myclass'))





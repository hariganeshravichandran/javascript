// const student = {
//     name: 'a',
//     address: {
//         street: 'b',
//         city: {
//             cityname: 'c',
//             pincode: 'd'
//         }
//     },
//     marks: {
//         tamil: {
//             a: 87,
//             b: 90
//         },
//         english: {
//             a: 78,
//             b: 84,
//         },
//         maths: 90,
//         science: 67,
//         social: 98
//     }
// }

// // first level of element-----> name, address, mark
// // second level
// console.log('student', student);

// const stu1 = {... student};
// stu1.name = 'c';

// stu1.address.street ='street';


// //spread operatr or object.assign -> create new address for first level object

// console.log('stu1', stu1);

// console.log('student', student);

// const stu2= {...student, marks: {...student.marks} };

// stu2.marks.maths =98;
// stu2.marks.english.b = 90;

// console.log('stu2', stu2);

// console.log('student', student);

// const stu3 = {...student,marks: {...student.marks, tamil:{...student.marks.tamil}}};

// stu3.marks.maths = 98;

// stu3.marks.tamil.b=99;

// console.log('stu', stu3);

// console.log('student',student);


// // deep copy

// const stu4 = JSON.parse(JSON.stringify(student));
// stu4.address.city.cityname='z';
// stu4.marks.tamil.a = 99;

// console.log('stu4', stu4);
// console.log('student', student);
































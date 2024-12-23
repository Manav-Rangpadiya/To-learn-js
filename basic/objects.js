// const user = new Object ()
// user.name="manav"
// user.income=100000
// user.age=19
// console.log(user);

////  nested objects ///

// let pedhi = {
//     atak : "rangpadiya",
//     gam : "jasmatgadh",
//     fullname : {
//         realname : {
//             fname : "manav",
//             mname : "niteshbhai"
//         }
//     }
// }

// console.log(pedhi);
// console.log(pedhi.fullname);
// console.log(pedhi.fullname.realname);
// console.log(pedhi.fullname.realname.fname);


////   merging 2 objects  ///

// const obj1 = { 1:"a", 2:"b"}
// const obj2 = { 3:"m", 4:"n"}

// console.log(obj1);
// console.log(obj2);

////not a good way
// const obj3 = {obj1,obj2}
// console.log(obj3);

// //good way 1

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


//// object in the array ////


// const arr = [
//     {
//         id : 1,
//         score : 100
//     },
//     {
//         id : 2,
//         score : 95
//     },
//     {
//         id : 3,
//         score : 80
//     }
// ]

//  console.log(arr);
//  console.log(arr[1].score);

// console.log(Object.entries(arr));
// console.log(Object.fromEntries(arr));

//console.log(Object.hasOwnProperty("id"));


// const p1 ={
//     p : 10,
//     q : 20,
//     r : 30,
//     s : 40
// }
// console.log(Object.keys(p1))
// console.log(Object.getOwnPropertyNames(p1));



////  obect de struture ////

const object101 = {
    name : "Manav",
    marks : 100,
    placement : true
}

const{placement} = object101
console.log(placement)
const {name : n} = object101
console.log(n);


/*
json is same like object with const and name
for ex
{
    "name": "manav"
    "age" : 19
}
like this

comes in case when we work with the apis and also needs in react
*/
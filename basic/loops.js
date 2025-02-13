// let arr1 = [1,2,3,4,5,6]

// for (const vale of arr1) {
//     const mul = vale*100;
//     console.log(mul);
  
// }

// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index]*10;
//     console.log(element);
    
// }
// let i =0
// while (i<arr1.length) {
//     const val = arr1[i]*10;
//     console.log(val);
//     i++;
// }

// let string = "my name is manav i am the man of my word yessss"
// for (const i of string) {
//     console.log(i);
// }

// const myObj = {
//     person1 : "Manav",
//     person2 : "heet",
//     person3 : "savan",
//     person4 : "cmc"
// }
// // console.log(myObj);

// for (const key in myObj) {
//    console.log(`${key} name is ${myObj[key]}`);
// }


// const game = ["ff","pubg","fifa","coc","mini"]

// game.forEach(item => {
//     console.log(item);
// });


//const arr1 = [1,2,3,4,5,6,7,8,9]
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     console.log(element);
// }

const number = [25,14,63,24,45,86,95,12]

const bignum = []

number.forEach( num => {
    if (num > 50) {
        bignum.push(num);
    }
});
console.log(bignum);
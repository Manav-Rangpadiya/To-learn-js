let OrignalArray = [0,1,2,3,4,5]

console.log(`A = ${OrignalArray}`);

let sliceArray = OrignalArray.slice(0,3)
console.log(sliceArray);
console.log(`B = ${OrignalArray}`);  // akho array aavse karan ke slice ma orignal array manipulate na thayy

let spliceArray = OrignalArray.splice(0,3)
console.log(spliceArray);
console.log(`C = ${OrignalArray}`); //only 3 4 5 aavse karan ke 0 1 2 upar splice thay gayu splice ma orignal array manipulate thay
// if(true){
//     let a = 10
//     const b = 20
//     var c= 30
//     console.log(`inner : ${a}`);

// }      

//console.log(a);
//console.log(b);
// console.log(c);
// let a = 500
// console.log(`outer  : ${a}`);

////    function nested   /////

// function abc () {
//     let name = "manav"
    
//     function xyz (){
//         let surname = "Rangpadiya"
//         console.log(name);
//     }

//     //console.log(surname);

//     xyz()
// }
// abc()


////   nested if else scope ////

if(true){
    const name  = "manav"
    if(name === "manav"){
        const greet = "radhe radhe"
        console.log(`${name} ji ${greet}`);
    }
   // console.log(greet);
}
//console.log(name);
/*
         about how primitve stores in stack and non primitev stores in the heap mamory
 */        


// let name1 = "manav"
// let name2 = name1
// name2 = "kaviraj"
// console.log(name1);
// console.log(name2);

let person1 = {
    name : "Ashwin",
    wicket : 897
}

let person2 = person1
person2.name = "Jadeja"


console.log(person1)
console.log(person2);
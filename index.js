// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

// for(let i=0; i< arr.length; i++){
//   console.log(arr[i])
// }

// let radius = 7;
// const pi = 3.14;

// let area = radius * radius * pi;

// let name = "bob";
// let age = 24;

// console.log(typeof(name));
// console.log(typeof(age));
// console.log(area);

// console.log(`Hello my name is ${name}, I'm ${age} years old`);
// console.log(`I was born in ${2020-age}`);

// console.log('1' === 1);
// console.log(1 === true);
// console.log("false" === false);
// console.log("true" === true);

// if("false")
//   console.log("Hello false!")

// for(let i=0; i< 50; i++){
//   if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
//     console.log('fizzbuzz');
//   }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
//     console.log('fizz');
//   }else if(i%5 === 0){ //no? what about just 5 then?
//     console.log('buzz');
//   }else{              //so its not divisible by 3 or 5 then
//     console.log(i);
//   }
// }


// function happyPrint(string){
//  console.log("😀: "+string);
// }

// function sadPrint(string){
//  console.log("😢: "+string);
// }

// //This high-order function adds 2 parameters and passes the answer to the callback
// function add(a, b, callback){
//    let ans = a + b;
//    callback(ans);// call the callback and pass the answer to it
// }

// //call add passing the callbacks to it

// add(5, 10, happyPrint);
// add(11, 12, sadPrint);

// function printDate(){
//    console.log(Date().toLocaleTimeString());
// }
      
// setInterval(printDate, 1000);

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
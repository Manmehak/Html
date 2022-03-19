const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/manmehakKart');
}

let db= mongoose.connection;

// db.once('open',function(){
//     console.log("We are connected")
// })


// we are trying to create a structure acc. to which we will input the data in the database
let kittySchema = new mongoose.Schema({
  name:String
});

// add method into the model
kittySchema.methods.speak = function speak() {
  const greeting = "The name is : " + this.name
  console.log(greeting);
};


// this is the complied version of the schema
let Kitten = mongoose.model('Kitten',kittySchema);

// after converting into the model , now we can create the documents in the mongodb
// creating a object 
let mehakKitty = new Kitten({name:'mehakKitty'});
let mehakKitty2 = new Kitten({name:'mehakKitty2'});
console.log(mehakKitty.name);
console.log(mehakKitty2.name);

// speak will implement the name of the kitty in the method using speak method
// mehakKitty.speak();

// saving into the database by using save method 
mehakKitty.save();
mehakKitty2.save();
mehakKitty.speak(); //running the speak function
mehakKitty2.speak(); //running the speak function

// to get all the documents in the collection
// const kittens = Kitten.find();
// console.log(kittens);

// to find something in the collection
const kittens =Kitten.find({ name: "mehakKitty" });
console.log(kittens);







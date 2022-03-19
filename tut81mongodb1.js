// Inserting to the Mongodb
// manmehakKart is an e-commerce website used for selling 
// use manmehakKart;
db.items.insertOne({name:"Manmehak",age:23,gender: "Male", contact: 843796})


// mongodb doesnot follow schema we can ue any key anywhere we want 
// to insert many objects at once  use[]
db.items.insertMany([
    {name:"Manmehak",age:23,gender: "Male", contact: 843796},
    {name:"Manmehak1",age:231,gender: "Male1", contact: 8437961},
    {name:"Manmehak2",age:232,gender: "Male2", contact: 8437962},
])


// in mongodb 
// database = database 
// table =collecton
// rows=document

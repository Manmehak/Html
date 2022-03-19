// to create anaother collection in the db 

db.anotherCollection.insertOne({a:89})
// db.anotherCollection  this will create a new collection named items in the db 
// insertOne({a:89}) this will add a entry in the db 

db.items.updateOne({name:"Manmehak"},{$set: {name:"Manmehak Partap"}})
// {name:"Manmehak"} this is what we want to change 
// {name:"Manmehak Partap"}  this is what we want to replace 


// to  update many at once 
db.items.updateMany({name:"Manmehak2"} , {$set : {name:"Partap Goraya2",age:32}})
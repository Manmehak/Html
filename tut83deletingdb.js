// deleting items from the mongo db databse 
// same syntax
// db.items.find({name:"Manmehak1",gender:"Male1"});


// to delete one 
db.items.deleteOne({name:"Manmehak1",gender:"Male1"})
// if there are more similar files it will delete the first searched file by this name

// to delete many at once 
db.items.deleteMany({name:"Manmehak"})


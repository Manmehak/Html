// Seraching for data in the db 
// use manmehakKart;
// this will find all the objects having name Manmehak
db.items.find({name:"Manmehak"})

// {name:"Manmehak"}   this is filter object .. this will search for this 

db.items.find({age: {$gte:215}})
// {age: {$gte:215}}   this will give all the objects having age greater than or equal to that number ..
// and this is the method to add this type of query


// we can use & operator also  by simply typing the requiremnets
db.items.find({name:"Manmehak", age:{$gte :23}})

// to use or in the db 
db.items.find({
    $or: [{name:"Manmehak1"} , {age: {$lt:200}}]
})

// projections in db : if we want only specific data
db.items.find({name:"Manmehak"},{name:1});
// this will only display name nothing other like ag eor gender 
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data..."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    
    rating: 7,
    review: "Don't like this fruit."
});

//fruit.save();


// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 9,
//     review: "The best fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 10,
//     review: "Nothing else required."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Full of calcium."
// });


// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successful Insertion");
//     }
// });

// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }
//     else{
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }

//     mongoose.connection.close(function () {
//         process.exit(0);
//     }); 
    
// });

// Fruit.updateOne({_id: "6245354e7a11b43470d924d0"}, {name: "Peach"}, function(err){

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Updated successfully")
//     }
// });

Fruit.deleteOne({name: "Apple"}, function(err){

    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted successfully")
    }
});
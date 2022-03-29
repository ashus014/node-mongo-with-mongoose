const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "The best fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "Nothing else required."
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Full of calcium."
});


// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successful Insertion");
//     }
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        console.log(fruits);
    }
});
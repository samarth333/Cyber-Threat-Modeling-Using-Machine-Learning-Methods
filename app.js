// require mongoose package
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // Use connect method to connect to the server
  await mongoose.connect('mongodb://127.0.0.1:27017/DesignCreditDB');

  const UserSchema = new mongoose.Schema({
    id: Number,
    Password: Number,
    BillAmt: Number
  });

  const Info = mongoose.model('Info', UserSchema);

  const User1 = new Info({
    id: 60,
    Password: 123,
    BillAmt: 1440
  });
  //await fruit.save();
  const User2 = new Info({
    id: 042,
    Password: 456,
    BillAmt: 2460
  });
  //await fruit.save();
  const User3 = new Info({
    id: 41,
    Password: 789,
    BillAmt: 1540
  });
  Info.insertMany([User1, User2, User3], function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("Succesfully saved all the User Data to InfoDB");
    }
  });
  //await fruit.save();
  // Fruits.find(function(err, fruits){
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log(fruits);
  //   }
  // });
  // Fruit.find(function(err, fruits){
  //   mongoose.connection.close();
  //   fruits.forEach(function(fruit){
  //     console.log(fruit.name);
  //   });
  // });

  //Deletion

  // Fruit.deleteOne({name: "Apple"}, function(err){
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log("Succesfully deleted the element");
  //   }
  // });
}

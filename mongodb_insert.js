var MongoClient = require('mongodb').MongoClient;
var url = ("mongodb://localhost:27017/", { useNewUrlParser: true });

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name: "Yitian", surname: "Hu", username: "yitian", email: "huyitian.12@gmail.com"};
    dbo.collection("accounts").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

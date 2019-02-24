const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c72bb03038ffc13bc41eb7b')
    }, {
        $set: {
            name: "Amjad Afzaal",
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
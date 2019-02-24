const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log('Result: ' , result.result.ok);
    //     console.log('Items Deleted: ', result.result.n);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log('Result: ' , result.result.ok);
    //     console.log('Items Deleted: ', result.result.n);
    // });

    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5c72e28285a7b54db1685c59')
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
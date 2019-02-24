const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Todos').find({
        _id: new ObjectID('5c72b4441d0dcd16447dfc0f')
    }).toArray().then((docs) => {
        console.log('Todos By ID');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Todos').find({complete: true}).toArray().then((docs) => {
        console.log('Todos By Complete True');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Saad Afzaal'}).toArray().then((user) => {
        console.log(`User by name`);
        console.log(JSON.stringify(user, undefined, 2));
    }, (err) => {
        console.log('unable to fetch users', err);
    });

    db.close();
});
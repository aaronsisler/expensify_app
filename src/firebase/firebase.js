import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCYclsX8sDhCJ5_9vFU6PIBIKT8PaUEsOc",
    authDomain: "expensescenter.firebaseapp.com",
    databaseURL: "https://expensescenter.firebaseio.com",
    projectId: "expensescenter",
    storageBucket: "expensescenter.appspot.com",
    messagingSenderId: "1096798817917"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//Below is just ways to do stuff from tutorial

// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     });

// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     })

// database.ref('expenses')
//     .on(
//         'value',
//         snapshot => {
//             const expenses = [];
//             snapshot.forEach(childSnapshot => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })

//             console.log(expenses);
//         })

// const onValueChange = database.ref().on(
//     'value',
//     snapshot => console.log(snapshot.val()),
//     e => console.log('Error with data fetching: ', e)
// );

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// })

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// })



// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// }).then(datums => console.log(datums.key))

// database.ref().set({
//     name: 'Aaron Sisler',
//     age: 32,
//     isSingle: false,
//     location: {
//         city: 'Holly Springs',
//         state: 'NC'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(e => {
//     console.log('This failed: ', e);
// })

// const onValueChange = database.ref().on(
//     'value',
//     snapshot => console.log(snapshot.val()),
//     e => console.log('Error with data fetching: ', e)
// );

// setTimeout(() => database.ref('/age').set(28), 3500);

// setTimeout(() => database.ref().off(onValueChange), 7000);

// setTimeout(() => database.ref('/age').set(30), 10500);

// database.ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val()
//         console.log(val);
//     })
//     .catch(e => console.log('Error fetching data: ', e));

// database.ref().set({
//     name: 'Aaron Sisler',
//     age: 32,
//     isSingle: false,
//     location: {
//         city: 'Holly Springs',
//         state: 'NC'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(e => {
//     console.log('This failed: ', e);
// })

//database.ref('/isSingle').remove().then(() => console.log('All gone')).catch(() => console.log('This does not exist'));

// database.ref().update({
//     name: 'Taco man',
//     age: 25,
//     job: 'Taco truck man',
//     isSingle: null,
//     'location/city' : 'Apex'
// })
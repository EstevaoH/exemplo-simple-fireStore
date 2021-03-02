
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/estev/Documents/Estevao/bancodedados/teste-tecbd-firebase-adminsdk-kdtsz-e76bdaeb28.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();


const citiesRef = db.collection('cities');

// citiesRef.doc('SF').set({
//     name: 'San Francisco', state: 'CA', country: 'USA',
//     capital: false, population: 860000,
//     regions: ['west_coast', 'norcal']
// });
// citiesRef.doc('LA').set({
//     name: 'Los Angeles', state: 'CA', country: 'USA',
//     capital: false, population: 3900000,
//     regions: ['west_coast', 'socal']
// });
// citiesRef.doc('DC').set({
//     name: 'Washington, D.C.', state: null, country: 'USA',
//     capital: true, population: 680000,
//     regions: ['east_coast']
// });
// citiesRef.doc('TOK').set({
//     name: 'Tokyo', state: null, country: 'Japan',
//     capital: true, population: 9000000,
//     regions: ['kanto', 'honshu']
// });
// citiesRef.doc('BJ').set({
//     name: 'Beijing', state: null, country: 'China',
//     capital: true, population: 21500000,
//     regions: ['jingjinji', 'hebei']
// });

// const snapshot = await citiesRef.where('capital', '==', true).get();

// citiesRef.where('capital', '==', true).get().then((snapshot) => {
//     if (snapshot.empty) {
//         console.log('No matching documents.');
//         return;
//     } else {

//         citiesRef.doc('BJ').set({
//             name: 'Beijing', state: null, country: 'China',
//             capital: true, population: 21500000,
//             regions: ['jingjinji', 'hebei']
//         });
//         snapshot.forEach(doc => {
//             console.log(doc.id, '=>', doc.data());
//         });
//         // const res = db.collection('cities').doc('BJ').delete();
//         // console.log('apagado')
//     }

// citiesRef.doc('DC').update({
//     country: 'qwer'
// })

// citiesRef.doc('DC').delete({});

citiesRef.doc('LA').update({
    country: FieldValue.delete()
})

// })

citiesRef.get().then((res) => {
    res.forEach(data => {
        console.log(data.id, '->', data.data())
    })
});



// console.log('------------------------------------------------------------------------')

// citiesRef.where('capital', '==', true).get().then((snapshot) => {
//     if (snapshot.empty) {
//         console.log('No matching documents.');
//         return;
//     } else {
//         snapshot.forEach(doc => {
//             console.log(doc.id, '=>', doc.data());
//         });
//     }
// })
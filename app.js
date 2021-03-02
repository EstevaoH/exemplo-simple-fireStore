const admin = require("firebase-admin");

const serviceAccount = require("");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const FieldValue = admin.firestore.FieldValue;

//Criação da Coleção
const cidadesRef = db.collection('cidades');

//Criação dos Documentos
cidadesRef.doc('BH').set({
    nome: 'Belo Horizonte', estado: 'MG', pais: 'BRA',
    capital: true, populacao: 2722000,
    regiao: 'sudeste'
});

cidadesRef.doc('NT').set({
    nome: 'Natal', estado: 'RN', pais: 'BRA',
    capital: true, populacao: 890480,
    regiao: 'nordeste'
});

cidadesRef.doc('BR').set({
    nome: 'Brasília', estado: 'DF', pais: 'BRA',
    capital: true, populacao: 2974703,
    regiao: 'centro-oeste'
});

cidadesRef.doc('JP').set({
    nome: 'João Pessoa', estado: 'PB', pais: 'BRA',
    capital: true, populacao: 817511,
    regiao: 'nordeste'
});

cidadesRef.doc('CP').set({
    nome: 'Campo Grande', estado: 'MS', pais: 'BRA',
    capital: true, populacao: 906000,
    regiao: 'centro-oeste'
});

cidadesRef.doc('SP').set({
    nome: 'São Paulo', estado: 'Sp', pais: 'BRA',
    capital: true, populacao: 12330000,
    regiao: 'sudeste'
})


//Listar todos os documentos dentro da coleção
// cidadesRef.get().then((res) => {
//     res.forEach(data => {
//         console.log(data.id, '->', data.data())
//     })
// })

// Para listar os documentos da coleção com alguma condição especifica
// cidadesRef.where('regiao', '==', 'nordeste').get().then((snapshot) => {
//     if (snapshot.empty) {
//         console.log('Não foi encontrado nenhum documento.');
//         return;
//     } else {
//         snapshot.forEach(doc => {
//             console.log(doc.id, '->', doc.data());
//         });
//     };
// });

// Para atualizar algum documento
// cidadesRef.doc('BH').update({
//     pais: 'ARG',
// });

// Para deletar um documento
// cidadesRef.doc('SP').delete({});

// Para deletar  algum campo de um documento
cidadesRef.doc('BH').delete({
    pais: FieldValue.delete(),
});
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json')
const routes = require('./controllers');




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)

});

const db = admin.firestore();


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api',routes);





// app.get('/api/check_favorites',async(req,res)=>{
//   let userId = "dQbBabEpFn87fLxaHTtO"
//   let itemId = "DNGah477roSUvSbvDw0x"

//   let favoriteFound  = false
//   await db.collection('Favorite').get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       if(doc.data()['itemId'].toString() == itemId && doc.data()['userId'].toString() == userId){
//         favoriteFound = true
//         res.send(true)
//       }
//     });
//   })

//   if(!favoriteFound){
//     res.send(false)

//   }


// })

// app.post('/api/add_favorites',async(req,res)=>{
//   console.log(req.body)

//   let favorite = db.collection('Favorite')
//   favorite.add(req.body)
  
// })


app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});



exports.admin = admin
exports.db = db

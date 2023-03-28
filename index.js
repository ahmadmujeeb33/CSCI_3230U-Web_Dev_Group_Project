const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json')
const multer  = require('multer');
const { getStorage } = require('firebase-admin/storage');


const upload = multer({
  'dest':'./uploads/'
})
// const firebaseConfig = {
//   apiKey: "AIzaSyAjTD1JfZ7Jx7cT_89naKFgDeUL1nKr8LA",
//   authDomain: "ecommerce-f0a2b.firebaseapp.com",
//   projectId: "ecommerce-f0a2b",
//   storageBucket: "ecommerce-f0a2b.appspot.com",
//   messagingSenderId: "759495563326",
//   appId: "1:759495563326:web:8d95853b1e11a395bdd96f",
//   measurementId: "G-R7P5ZTXGXB"
// };


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)

});

const db = admin.firestore();


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




app.post('/api/upload', upload.single("file"),(req,res) =>{
  console.log(req.file)

  const bucket = admin.storage().bucket("gs://ecommerce-f0a2b.appspot.com");
  let currentFile =__dirname + "/uploads/"+ req.file.filename
  console.log(currentFile)
  bucket.upload(currentFile, {
    destination: 'bar.png',

    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000'
    }
    }).then(() => {
    console.log('file uploaded.');
   }).catch(err => {
    console.error('ERROR:', err);
  });

  // const bucket = getStorage().bucket('my-custom-bucket');;

  // bucket.upload
  // console.log(bucket)
  // const metadata = {
  //   contentType:req.file.type
  // }

  


  // const task = ref.child().put(req.file)

  //    task
  //    .then(snapshot => snapshot.ref.getDownloadURL())
  //    .then(url => {
  //      console.log(url)
  //    })


})


app.get('/api', async (req, res) => {

  db.collection('user').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });

  return res.json("hello")

  // var snapshots = await db.collection('users').get();
  // console.log(snapshots)
  // var docs = snapshots.docs;
  // console.log(docs)


});




app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});

// app.get('/', async (req, res) => {

//    res.send("hello world")
//   });


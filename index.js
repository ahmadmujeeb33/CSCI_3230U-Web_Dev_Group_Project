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








app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});



exports.admin = admin
exports.db = db

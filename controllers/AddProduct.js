const main = require('../index.js')
const multer  = require('multer');
const router = require('express').Router();



const upload = multer({
  'dest':'./uploads/'
})

console.log("in this")


router.post('/', upload.single("file"),async (req,res) =>{
    let url = ""
    const bucket = main.admin.storage().bucket("gs://ecommerce-f0a2b.appspot.com");
    let currentFile =__dirname + "/uploads/"+ req.file.filename
    await  bucket.upload(currentFile, {
      destination: req.file.originalname,
			
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000'
      }
      }).then((results) => {
        console.log(results[0])
        console.log('file uploaded.');
     }).catch(err => {
      console.error('ERROR:', err);
    });
  
    let file = bucket.file(req.file.originalname);
  
    await file.getSignedUrl({
      action: 'read',
      expires: '03-17-2024'
    }).then(signedUrls => {
      url = signedUrls[0]
    
    })
  
    req.body['url'] = url
  
    console.log("REQUEST",req.body)
  
    let items = main.db.collection('Items')
    items.add(req.body)
    
		res.send("Product created");
  })


  module.exports = router;

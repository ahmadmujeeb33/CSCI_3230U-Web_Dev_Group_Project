const main = require('../index.js')
const router = require('express').Router();

router.post('/check_favorites',async(req,res)=>{
    //   let userId = "dQbBabEpFn87fLxaHTtO"
    //   let itemId = "DNGah477roSUvSbvDw0x"
    console.log("hewwwwwwwwwwwww")
      let favoriteFound  = false
      await main.db.collection('Favorite').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          if(doc.data()['itemId'].toString() == req.body['itemId'] && doc.data()['userId'].toString() == req.body['userId']){
            favoriteFound = true
            res.send(true)
          }
        });
      })
    
      if(!favoriteFound){
        res.send(false)
    
      }
    
    
    })
    
router.post('/add_favorites',async(req,res)=>{
    console.log(req.body)

    let favorite = main.db.collection('Favorite')
    favorite.add(req.body)
    
})


router.post('/delete_favorites',async(req,res)=>{
    console.log(req.body)

    await main.db.collection('Favorite').get().then((snapshot) => {
        snapshot.forEach((doc) => {
        if(doc.data()['itemId'].toString() == req.body['itemId'] && doc.data()['userId'].toString() == req.body['userId']){
            console.log("in heree")
            doc.ref.delete();
        }
        });
      })

    res.send(true)
    
})

module.exports = router;
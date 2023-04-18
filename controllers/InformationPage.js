const main = require('../index.js')
const router = require('express').Router();

router.get('/check_favorites/:userId/:itemId',async(req,res)=>{
    //   let userId = "dQbBabEpFn87fLxaHTtO"
    //   let itemId = "DNGah477roSUvSbvDw0x"
    console.log("hewwwwwwwwwwwww")
      let favoriteFound  = false
      await main.db.collection('Favorite').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          if(doc.data()['itemId'].toString() == req.params.itemId && doc.data()['userId'].toString() == req.params.userId){
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
    console.log("add")

    let favorite = main.db.collection('Favorite')
    favorite.add(req.body)
    
})


router.delete('/delete_favorites/:userId/:itemId',async(req,res)=>{
    console.log("delete")

    await main.db.collection('Favorite').get().then((snapshot) => {
        snapshot.forEach((doc) => {
        if(doc.data()['itemId'].toString() == req.params.itemId  && doc.data()['userId'].toString() == req.params.userId){
            console.log("in heree")
            doc.ref.delete();
          }
        });
      })

    res.send(true)
    
})

module.exports = router;
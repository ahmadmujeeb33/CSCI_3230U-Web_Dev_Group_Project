const main = require('../index.js')
const router = require('express').Router();

console.log("thissssssssss")

router.get('/:id', async(req,res)=>{
    let postID = []
    await main.db.collection('Favorite').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if(req.params.id.toString() == doc.data()['userId']){
          postID.push(doc.data()['itemId'])
        }
      });
    })
    
    
    let favorite = []
  
    for(let id in postID){
      await main.db.collection('Items').doc(postID[id]).get().then((snapshot) => {
        let data = snapshot.data()
        data['id'] = postID[id]
        favorite.push(data)
        // console.log("data",snapshot.data())
      })
    }
   
  
  
    res.send(favorite)
  
  
  })



module.exports = router;
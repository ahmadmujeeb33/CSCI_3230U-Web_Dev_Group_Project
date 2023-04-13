const main = require('../index.js')
const router = require('express').Router();

console.log("thissssssssss")

router.get('/', async(req,res)=>{
    let postID = []
    await main.db.collection('Favorite').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        postID.push(doc.data()['itemId'])
      });
    })
    
    
    let favorite = []
    console.log(postID)
  
    for(let id in postID){
      console.log("id ",postID[id])
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
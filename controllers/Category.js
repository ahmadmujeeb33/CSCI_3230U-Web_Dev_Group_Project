const main = require('../index.js')
const router = require('express').Router();

let matchedItems = [];
router.post('/', async (req, res) => {
    try {
        matchedItems = [];

        let search = req.body.category;
        search = search.toLowerCase();

        let items = await main.db.collection("Items").get();

        items.forEach((doc) => {
            let category = doc.data().categories;
            category = category.toLowerCase();

            if (category == search) {
                matchedItems.push({ [doc.id]: doc.data() });
            }
        })

        console.log(matchedItems);
        console.log("\n");
        console.log("------------------------------------------------------")
        res.send(matchedItems);
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;


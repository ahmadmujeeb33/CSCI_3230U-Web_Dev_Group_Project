const main = require('../index.js')
const router = require('express').Router();

let matchedItems = [];
router.post('/', async (req, res) => {
    try {
        matchedItems = [];

        let search = req.body.value;
        search = search.toLowerCase();
        let searchArray = search.split('+');

        console.log(searchArray);
        console.log("");
        let items = await main.db.collection("Items").get();

        items.forEach((doc) => {
            for (let i = 0; i < searchArray.length; i++) {
                let title = doc.data().title;
                title = title.toLowerCase();

                if (searchArray[i].length >= 3 && title.includes(searchArray[i])) {
                    matchedItems.push({ [doc.id]: doc.data() });
                    break;
                }
            }
        })

        console.log(matchedItems);
        res.send(matchedItems);

    } catch (error) {
        console.log(error);
    }

})


module.exports = router;

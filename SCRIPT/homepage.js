$(document).ready(function () {

    var nftData;

    $.ajax({
        url: "/nft-data.json",
        success: function(data) {
            nftData = data;
            // Update vue app with new data
            app.update();
        }
    });

    // Example code that does something when you enter text in the
    // search bar and press the search button
    $("#searchButton").click(function () {
        let searchPrompt = $("#searchBar").val()
        alert("You have searched for: " + searchPrompt);
    });

    // Vue app
    const app = Vue.createApp({
        data() {
            return {
                nfts: nftData
            }
        },
        methods: {
            update: function() {
                this.nfts = nftData;
            }
        }
    }).mount("#app");
});



<template>
    <footer class="footer">
        <div class="flex-container">
            <div>
                <table>
                    <tr>
                        <th>Connect With Us</th>
                    </tr>
                    <tr>
                        <td>
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fab fa-instagram"></i>
                                </span>
                                <span>Instagram</span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fab fa-twitter-square"></i>
                                </span>
                                <span>Twitter</span>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <table>
                    <tr>
                        <th>Contact Us</th>
                    </tr>

                    <tr>
                        <td>
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <span>Phone</span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span>Email</span>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <table>
                    <tr>
                        <th>Help</th>
                    </tr>

                    <tr>
                        <td>FAQ</td>
                    </tr>
                </table>
            </div>
        </div>
    </footer>
</template>




<script>
// import axios from 'axios'

export default {
    name: "CategoriesPage",

    methods: {

    }
}
</script>



<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import "~@fortawesome/fontawesome-free/css/all.css";


.footer {
    height: 100px;
    padding-top: 0px;
    /* background-color: black; */
    /* position: fixed; */
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;

    background-color: lightblue;
    ;
}

.flex-container>div {
    /* background-color: #f1f1f1; */
    /* width: 150px; */
    margin: 10px;
    padding: 10px;
    font-size: 15px;
}

/* Added CSS */
.footer {
    background-color: antiquewhite;
}
</style>
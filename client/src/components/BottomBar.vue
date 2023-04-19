<template>
    <footer class="footer">
        <div class="flex-container">
            <router-link id="footerLogo" class="navbar-item" to="/home">
                <svg width="100" height="39" viewBox="0 0 1813 704" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
                    <defs>
                        <clipPath id="clip0">
                            <rect x="209" y="1030" width="1813" height="704" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#clip0)" transform="translate(-209 -1030)">
                        <path
                            d="M1557.39 1033.5 1557.97 1038.56C1567.91 1081.51 1610.89 1113.81 1662.41 1113.81 1713.93 1113.81 1756.91 1081.51 1766.85 1038.56L1767.22 1035.37 2018.5 1089.58 1985.18 1275.93 1833.74 1275.93 1833.74 1728.5 1479.37 1728.5 1479.37 1275.93 1315.82 1275.93 1282.5 1077.75Z"
                            stroke="#000000" stroke-width="4.58333" stroke-miterlimit="8" fill-rule="evenodd" />
                        <path
                            d="M1573.12 1034.5 1741.74 1034.5 1749.5 1036.08 1749.19 1038.62C1740.81 1072.79 1704.55 1098.5 1661.09 1098.5 1617.63 1098.5 1581.37 1072.79 1572.99 1038.62L1572.5 1034.59Z"
                            stroke="#000000" stroke-width="4.58333" stroke-miterlimit="8" fill-rule="evenodd" />
                        <path
                            d="M209 1077 399.365 1077 552.249 1317.64C582.699 1365.46 605.769 1407.5 621.458 1443.76 611.202 1387.61 606.075 1330.17 606.075 1271.45L606.075 1077 770 1077 770 1734 606.075 1734 426.361 1443.71C403.296 1406.49 380.036 1361.26 356.581 1308.03 367.157 1350.39 372.445 1386.33 372.445 1415.85L372.445 1734 209 1734 209 1077Z"
                            fill-rule="evenodd" />
                        <path
                            d="M788 1077 1263 1077 1263 1233.43 984.352 1233.43 984.352 1340.28 1198.51 1340.28 1198.51 1488.05 984.352 1488.05 984.352 1734 788 1734 788 1077Z"
                            fill-rule="evenodd" />
                    </g>
                </svg>
            </router-link>
            <div>
                <table>
                    <tr>
                        <th>Connect With Us</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.instagram.com/">
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                    <span>Instagram</span>
                                </span>

                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href="https://twitter.com">
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fab fa-twitter-square"></i>
                                    </span>
                                    <span>Twitter</span>
                                </span>
                            </a>
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
                            <a>
                                <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <span>Phone</span>
                            </span>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a>
                                <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span>Email</span>
                            </span>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>

            <div>
                <table>
                    <tr>
                        <th>Info</th>
                    </tr>

                    <tr>
                        <td>
                            <a>
                                About Us
                            </a>
                        </td>
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
    padding: 0;
    background-color: lightblue;
}

.flex-container {
    height: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: fixed;
    justify-content: center;
    bottom: 0;
    width: 100%;

    background-color: lightblue;
}

.flex-container>div {
    margin: 10px;
    padding: 10px;
    font-size: 15px;
}
</style>
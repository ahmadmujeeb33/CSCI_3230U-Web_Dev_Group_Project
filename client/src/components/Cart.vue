<template>
<!DOCTYPE html>
<html lang="en">

<body>
    <nav class="navbar is-dark">
        <!-- Brand -->
        <div class="navbar-brand">
            <a class="navbar-item">
            </a>
        </div>
    </nav>
    <div class="title">Cart </div>

    <div id="list" class="columns is-half">
        <div class="column is-half">
            <div class= "item box is-half">
                <img id="product_image" class="iamge" 
                src="https://images.unsplash.com/photo-1551509134-2f9d4ec80a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
                alt="" width="200" 
                height="200"> 
                <div>
                </div>
            </div>
            <div class= "item box is-half">
                <img id="product_image" class="iamge" 
                src="https://images.unsplash.com/photo-1551509134-2f9d4ec80a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
                alt="" width="200" 
                height="200"> 
                <div>
                </div>
            </div>
        </div>

    </div>

    

</body>

</html>
</template>


<script>
export default {
  name: 'CartPage',
}





</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.item{
    size: 200;
    justify-content: left;
    display: flex;
}
.image{
    max-width: 200;
    max-height: 200;
}
.title{
    size: 900;
    justify-content: left;
    border-bottom-style: solid;
    text-align: left;
    padding: 1%;
}


</style>
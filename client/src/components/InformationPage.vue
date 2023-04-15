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

    <div class="columns is-vcentered">
        <div class="column is-centered is-half">
            <div class="box">
                <img id="product_image" class="center" src="https://images.unsplash.com/photo-1551509134-2f9d4ec80a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="">  
            </div>
            
        </div>
        <div class="column is-centered is-half">
            <div class="box">
                <div id="title" class="title">Title</div>
                <br>
                <div id="price" class="info"><label>Price:</label> 123123</div>
                <br>
                <div id="seller" class="info"><label>Seller:</label> your mom</div>
                <br>
                <div id="categories" class="info"><label>categories:</label></div>
                <br>
                <div id="descripition" class="info" ><label>Descripition:</label> asd a </div>
                <br>
                <button id="add" class="info" >Add to Cart</button>
                <button  @click="favorite" id="favorite" class="info"><img src="../assets/heartFilled.png" alt="" id ="favoriteImg"></button>
                <br>
                <div id="reviews" class="info">
                    
                </div>

            </div>
        </div>

    </div>

    

</body>

</html>
</template>

<script>
//import id from 

export default {
  name: 'InformationPage',

  methods: {
    favorite(){
    // let img = document.getElementById("favoriteImg");

    // if (img.src == "../assets/heartEmpty.png"){
    //     img.src = "../assets/heartFilled.png"
    // }else{
    //     img.src = "../assets/heartEmpty.png"
    // }
    }

}
}



import * as d3 from 'd3'
var parsedData = []
const margin = 50;
const width = 400;
const height = 300;
const chartWidth = width - 2 * margin;
const chartHeight = height - 2 * margin;


window.onload = function(){
    let data = [1,2,3,4,10];
    let sum = data.reduce((partialSum, a) => partialSum + a, 0);
    let freq = []
    data.forEach(d => {
        freq.push(d/sum)
    });
    let i=1;
    freq.forEach(d=>{
        let t = i + " Stars"
        parsedData.push({"star":t, "freq":d})
        i++;
    });
    const colourScale = d3.scaleLinear()
    .domain([0, 1])
    .range(["#FFCE00", "#FFCE00"]);

    const xScale = d3.scaleBand() 
                .domain(parsedData.map((data) => data.star))
                .range([0, chartWidth])
                .padding(0.3);

    const yScale = d3.scaleLinear()
                .domain([0, 1])
                .range([chartHeight, 0]);

    let svg = d3.select('#reviews')
            .append('svg')
                .attr('width', width)
                .attr('height', height);

    let g = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

    g.append('g')
    .call(d3.axisLeft(yScale));

    g.append('g')
    .attr('transform', `translate(0, ${chartHeight})`)
    .call(d3.axisBottom(xScale));

    svg.append('text')
    .attr('x', width / 2)
    .attr('y', margin)
    .attr('text-anchor', 'middle')
    .text('');
    svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width/2)
    .attr("y", height - 6)
    .text("");
    svg.append("text")
    .attr("class", "y label")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", ".75em")
    .attr("text-anchor", "middle")
    .text("Freq %");

    let rectangles = g.selectAll('rect')
    .data(parsedData)
    .enter()
        .append('rect')
            .attr('x', (data) => xScale(data.star))
            .attr('y', chartHeight)
            .attr('width', xScale.bandwidth())
            .attr('height', 0)
            .attr('fill', (data) => colourScale(data.freq))

    rectangles.transition()
    .ease(d3.easeElastic)
    .attr('height', (data) => chartHeight - yScale(data.freq))
    .attr('y', (data) => yScale(data.freq))
    .duration(1000)
    .delay((data,index) => index * 50);
}


</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";


.container{
    align-items: top;
    justify-content: left;
    display: flex;
}

.title{
    size: 900;
    justify-content: left;
    border-bottom-style: solid;
}

.img{
    justify-self: auto;
    display: flex;
}
.info{
    size: 200;
    justify-content: left;
    display: flex;
}
</style>
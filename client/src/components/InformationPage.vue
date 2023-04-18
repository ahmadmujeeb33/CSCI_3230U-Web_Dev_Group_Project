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
                    
    
                    <!-- <h1 v-if="awesome">Vue is awesome!</h1>
                    <h1 v-else>Oh no 😢</h1> -->
                    <div id="title" class="title"></div>
                    <br>
                    <div id="price" class="info"></div>
                    <br>
                    <div id="seller" class="info"></div>
                    <br>
                    <div id="cate" class="info"></div>
                    <br>
                    <div id="descr" class="info" ></div>
                    <br>
                    <div id="add" class="button " >Add to Cart</div>
                    <div  @click="favorite" id="favorite" class="button ">
                        <img @click="unFavorite" class="starImage" v-if="favorites" src="../assets/starfilled.png" width="25" height="25">
                        <img @click="toFavorite" class="starImage" v-else src="../assets/starEmpty.png" width="25" height="25"></div>
                    <br>
                    <div id="reviews" class="info">
                        
                    </div>
    
                </div>
            </div>
            <div class="column is-centered is-half">
                <div class="box">
                    <img id="product_image" class="center" src="" alt="">  
                </div>
                
            </div>
    
        </div>
    
        
    
    </body>
    
    </html>
    </template>
    
    <script>
     
    import axios from 'axios'
    import{onMounted,} from "vue"
    import { getAuth,onAuthStateChanged, } from "firebase/auth";
    import { getFirestore,getDoc,doc} from "firebase/firestore";
    
    export default {
      name: 'InformationPage',
      data() {
        return {
          favorites:false,     
          
        }
        
    
    
      },
    
      async created(){
        let data = {"itemId":"G0hFcr5MMP0m1wmTaYIf","userId":"dQbBabEpFn87fLxaHTtO"}
        this.favorites = await axios.post("/api/info/check_favorites",data)
    
      },
    
      methods: {
        async toFavorite(){
            let data = {"itemId":"G0hFcr5MMP0m1wmTaYIf","userId":"dQbBabEpFn87fLxaHTtO"}
            this.favorites = true
            console.log("in ehreee")
            await axios.post("/api/info/add_favorites",data)
    
      
        },
    
    
        async unFavorite(){
            let data = {"itemId":"G0hFcr5MMP0m1wmTaYIf","userId":"dQbBabEpFn87fLxaHTtO"}
            this.favorites = false
            console.log("in ehreee")
            await axios.post("/api/info/delete_favorites",data)
    
       
        },

        async addCart(){
            let data = {"itemId":"G0hFcr5MMP0m1wmTaYIf","userId":"dQbBabEpFn87fLxaHTtO"}
            await axios.put("/api/info/update_cart",data)
            const db = getFirestore();
            let auth = getAuth();
            },
            async getUerID(){
                onMounted1(()=>
                { 
                    auth=getAuth1();
                    onAuthStateChanged1(auth,async (user)=>{
                        if(user)
                        {

                            const docRef = doc1(db, "Items", id);
                            const docSnap = await getDoc1(docRef);

                            if (docSnap.exists())
                            {

                            
                            } 
                            else 
                            {
                            // docSnap.data() will be undefined in this case
                            console.log("No such document!");
                            }
                        }
                        else
                        {
                            console.log("null")
                        }


                })
            })

        }
    
    }
    }
    
    </script>

<script setup>
import{onMounted,} from "vue"
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import { getFirestore,getDoc,doc} from "firebase/firestore";
import $ from "jquery";
import * as d3 from 'd3'

const db = getFirestore();
let auth = getAuth();
let id = "DNGah477roSUvSbvDw0x"

onMounted(()=>
  {
    auth=getAuth();

    onAuthStateChanged(auth,async (user)=>{
      if(user)
      {

        const docRef = doc(db, "Items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists())
        {


          $("#title").text(docSnap.data().title)
          $("#price").text("Price:  $"+docSnap.data().price)
          $("#seller").text("Seller:  "+docSnap.data().name)
          $("#descr").text("Description:  "+docSnap.data().description)
          $("#cate").text("Categories: "+docSnap.data().catagories
)

          $("#product_image").attr("src",docSnap.data().url)
        
            var parsedData = []
            const margin = 50;
            const width = 400;
            const height = 300;
            const chartWidth = width - 2 * margin;
            const chartHeight = height - 2 * margin;

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
        else 
        {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      else
      {
        console.log("null")
      }

    });

  });
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
    .btn{
        size: 200;
        justify-content: left;
        display: flex;
    
    }
    .info{
        size: 200;
        justify-content: left;
        display: flex;
        border-bottom: 0.1em solid ;
    }
    
    .starImage{
        cursor: pointer;
    }
    </style>

<template>
    <!DOCTYPE html>
    <html lang="en">
    
    <body>

    
        <div class="columns is-vcentered">
            
            <div class="column is-centered is-half">
                <div class="box">
                    <div id="title" class="title">{{ title }}</div>
                    <br>
                    <div id="price" class="info"><label>Price:</label>{{ price }} </div>
                    <br>
                    <div id="seller" class="info"><label>Seller:</label>{{ price }} </div>
                    <br>
                    <div id="categories" class="info"><label>categories:</label>{{ categories }}</div>
                    <br>
                    <div id="descripition" class="info" ><label>Descripition:</label> {{ Descripition }} </div>
                    <br>
                    <div class="buttons is-left">
                        <div class="button">Add to Cart</div>
                        <div class="button"><img src="../assets/heartFilled.png" alt="" id ="favoriteImg"></div>
    
                    </div>
                    <div id="reviews" class="info">
                        
                    </div>
    
                </div>
            </div>
            <div class="column is-centered is-half">
                <div class="box">
                    <img :src="image" class="center" alt="">  
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
      data(){
        return{
            Descripition:"asd",
            price:"asda",
            seller:"asdads",
            categories:"asd",
            title: "title",
            image: "https://storage.googleapis.com/ecommerce-f0a2b.appspot.com/capture.png?GoogleAccessId=firebase-adminsdk-cgbfl%40ecommerce-f0a2b.iam.gserviceaccount.com&Expires=1710648000&Signature=CYifGo2Pv9vjCwnYvOotx7Gr37D7BNPb2v8K7UrcopNEr8KMteYFloG7iO8nlJBKs7Vo6xyavLcEmv4QbNdIAYQFKLd4II%2F8tkijkm11dKxg0jEj78ljG20UDUXIS5JjvpsKjZWMETkmF3IEYYdJvOrQ4%2FeAj0GotoMcUwiZJEnBSqH%2BHxWwGTEEj01GkLZp0GqYpqEd%2FE%2FG5Ia2Wb1wTGrvliusEmrC98TNWabvmuCySWG4bKnZtHmj19eqW6GXXy%2BGcI%2FfLfUNmoyEbSzLgoFkxMfncQlg4qjHgI2HlmpwYRAl2vJ2Ec03W64EbrYf5aaJqPt%2BQh0YwqxovsiqOA%3D%3D"
        }
      },
    
      methods: {
    
      }
    }
    
//     import{onMounted,} from "vue"
//     import { getAuth,onAuthStateChanged, } from "firebase/auth";
//     import { getFirestore,getDoc,doc} from "firebase/firestore";
    import * as d3 from 'd3'

//     const db = getFirestore();
//     let auth = getAuth();

//     onMounted(()=>
//     {
//     auth=getAuth();

//     onAuthStateChanged(auth,async (user)=>{
//       if(user)
//       {

//         const docRef = doc(db, "user", user.uid);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists())
//         {

//         } 
//         else 
//         {
//           // docSnap.data() will be undefined in this case
//           console.log("No such document!");
//         }
        
//       }
//       else
//       {
//         console.log("null")
//       }

//     });

//   });
    




    
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
    </style>
// Get the endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let data = d3.json(url).then(function(data) {
  console.log("hello");  
  console.log(data.samples[0].sample_values);
  plotData(data.samples[0]);
});

function plotData(data){
    console.log("hello again");
    console.log(data.sample_values);
    console.log(data.otu_ids);
    console.log(data.otu_labels);
    
 //   x: searchResults.map(row => row.greekName),
 //   y: searchResults.map(row => row.greekSearchResults),


//    data.map(row => row.samples_values);


    let trace1 = {
    x: data.sample_values,
    y: data.otu_ids,
    text: data.otu_labels,
    name: "Graph",
    type: "bar",
    orientation: "h"
  };

  let data1 = [trace1];

  let layout = {
    title: "Greek gods search results"
  };
  
  Plotly.newPlot("plot", data1, layout);  
}





//samp = data;
//console.log("hello again");
//console.log(samp);


  
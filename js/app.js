d3.json("../samples.json").then((data) => {
    var trace1 = {
        x: data.otu_ids,
        y: data.sample_values,
        type: "bar",
        text: data.otu_labels        
    };
    var barchart = [trace1];

    var layout = {
        title: "Top 10 OTUs in individuals"
    };

    Plotly.newPlot("bar", barchart, layout);
});


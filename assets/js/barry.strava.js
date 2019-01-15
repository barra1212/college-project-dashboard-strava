queue()
    .defer(d3.csv, "data/barry.strava.csv")
    .await(makeGraphs);
    
function makeGraphs(error, barryActivities) {
    var ndx = crossfilter(barryActivities);
    
    show_gear_balance(ndx);
    show_day_of_the_week_balance(ndx);
    
    dc.renderAll();
}

function show_gear_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('gear'));
    var group = dim.group();
    
    dc.barChart("#gear")
        .width(400)
        .height(200)
        .margins({top:10, right: 10, bottom: 30, left: 30})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gear")
        .yAxisLabel("Amount")
        .yAxis().ticks(10);
}

function show_day_of_the_week_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('day_of_the_week'));
    var group = dim.group();
    
    dc.barChart("#day_of_the_week")
        .width(600)
        .height(200)
        .margins({top:10, right: 10, bottom: 30, left: 30})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Day of the Week")
        .yAxisLabel("Amount")
        .yAxis().ticks(10);
}


// // const Http = new XMLHttpRequest();
// // const url='https://www.strava.com/api/v3/activities/{1655013} Authorization: Bearer 5e29c53673ecb5de42afa2c32b88a799c739edd3';
// // Http.open("GET", url);
// // Http.send();
// // Http.onreadystatechange=(e)=>{
// // console.log(Http.responseText)
// // }


// var chart = dc.scatterPlot('#distance');

// d3.csv("data/barry.strava.csv", function(errors, distance) {
//     var mycrossfilter = crossfilter(distance);

//     // people.forEach(function(x) {
//     //     if (x.male == 1) {
//     //         x.gender = "Male";
//     //     }
//     //     else {
//     //         x.gender = "Female";
//     //     }
//     // });

//     var hwDimension = mycrossfilter.dimension(function(data) {
//         return [Math.floor(data.date), Math.floor(data.distance)];
//     });
//     var hwGroup = hwDimension.group().reduceCount();

//     chart
//         .width(800)
//         .height(600)
//         .x(d3.scale.linear().domain([0, 200000]))
//         .y(d3.scale.linear().domain([0, 200000]))
//         .brushOn(false)
//         .xAxisLabel("Date")
//         .yAxisLabel("Distance")
//         .symbolSize(8)
//         .clipPadding(10)
//         .dimension(hwDimension)
//         .group(hwGroup);

//     chart.render();
// });

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

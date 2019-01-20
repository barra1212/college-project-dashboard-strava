queue()
    .defer(d3.csv, "data/barry.strava.csv")
    .await(makeGraphs);
    
function makeGraphs(error, barryActivities) {
    var ndx = crossfilter(barryActivities);

    var parseDate = d3.time.format("%m/%d/%Y").parse;
    barryActivities.forEach(function(d){
        d.date = parseDate(d.date);
    });    

    barryActivities.forEach(function(d){
        d.distance_km = parseInt(d.distance_km);
        d.calories = parseInt(d.calories);
    })

    show_gear_balance(ndx);
    show_day_of_the_week_balance(ndx);
    
    show_distance_to_calories_correlation(ndx);
    
    show_activity_distances(ndx);

    show_average_speed(ndx);
    
    show_day_of_the_week(ndx);
    
    dc.renderAll();
}

function show_gear_balance(ndx) {
    
    var gearColors = d3.scale.ordinal()
        .domain(["BeOne Mistral", "Orbea M20", "Voodoo Hoodoo"])
        .range(["black", "orange", "red"]);
    
    var dim = ndx.dimension(dc.pluck('gear'));
    var group = dim.group();
    
    dc.barChart("#gear")
        .width(500)
        .height(300)
        .margins({top:10, right: 10, bottom: 40, left: 30})
        .colorAccessor(function(d){
            return d.key[2];
        })
        .colors(gearColors)
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Which Bicycle?")
        .yAxisLabel("Amount of Activities")
        .yAxis().ticks(10);
}

function show_day_of_the_week_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('day_of_the_week'));
    var group = dim.group();

    // Sorts Days of the Week as desired
    let scale = d3.scale.ordinal()
        .domain(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
        .range([0,1,2,3,4,5,6]);     

    dc.barChart("#day_of_the_week")

    // Sorts Days of the Week as desired
        .ordering(function (k) {
            return scale(k.key);
        })

        .width(700)
        .height(350)
        .margins({top:10, right: 10, bottom: 40, left: 30})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Day of the Week")
        .yAxisLabel("Amount of Activities")
        .yAxis().ticks(10);
}


function show_day_of_the_week(ndx) {
    var dim = ndx.dimension(dc.pluck('day_of_the_week'));
    var group = dim.group();

    // Sorts Days of the Week as desired
    let scale = d3.scale.ordinal()
        .domain(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
        .range([0,1,2,3,4,5,6]);     

    dc.pieChart('#day_of_the_week_pie')
    
    // Sorts Days of the Week as desired
        .ordering(function (k) {
            return scale(k.key);
        })

        .height(350)
        .radius(200)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group)
}


function show_distance_to_calories_correlation(ndx) {
    
    var gearColors = d3.scale.ordinal()
        .domain(["BeOne Mistral", "Orbea M20", "Voodoo Hoodoo"])
        .range(["black", "orange", "red"]);
    
    var distDim = ndx.dimension(dc.pluck("distance_km"));
    var calsDim = ndx.dimension(function(d) {
        return [d.distance_km, d.calories, d.gear];
    });
    var distanceCaloriesGroup = calsDim.group();
    
    var minDistance = distDim.bottom(1)[0].distance_km;
    var maxDistance = distDim.top(1)[0].distance_km;
    
    dc.scatterPlot("#distance_calories")
        .width(760)
        .height(400)
        .x(d3.scale.linear().domain([minDistance, maxDistance]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Calories Burned")
        .xAxisLabel("Activity Distance")
        .title(function(d){
            return "Distance of " + d.key[0] + "km burned " + d.key[1] + " calories";
        })
        .colorAccessor(function(d){
            return d.key[2];
        })
        .colors(gearColors)
        .dimension(calsDim)
        .group(distanceCaloriesGroup)
        .margins({top: 10, right: 50, bottom: 50, left: 60});
}

function show_activity_distances(ndx) {
    
    var date_dim = ndx.dimension(dc.pluck('date'));
    var total_distance_km_per_date = date_dim.group().reduceSum(dc.pluck('distance_km'));
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;
    dc.lineChart("#distance")
        .width(570)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(date_dim)
        .group(total_distance_km_per_date)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate,maxDate]))
        .yAxisLabel("Distance of Activity")
        .xAxisLabel("Month")
        .brushOn(false)
        .yAxis().ticks(10);
}

function show_average_speed(ndx) {

    var date_dim = ndx.dimension(dc.pluck('date'));
    var total_average_speed_kmph_per_date = date_dim.group().reduceSum(dc.pluck('average_speed_kmph'));
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;
    dc.lineChart("#average")
        .width(570)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(date_dim)
        .group(total_average_speed_kmph_per_date)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate,maxDate]))
        .yAxisLabel("Average Speed of Activity")
        .xAxisLabel("Month")
        .brushOn(false)
        .yAxis().ticks(10);
}
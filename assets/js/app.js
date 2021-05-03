// Set default x/y axis variables.
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";
// Function used for updating x-scale var upon click on axis label.
function xScale(data, chosenXAxis, chartWidth) {
    // Create scales.
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenXAxis]) * .8,
            d3.max(data, d => d[chosenXAxis]) * 1.1])
        .range([0, chartWidth]);
    return xLinearScale;
}
// Function used for updating xAxis var upon click on axis label.
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);
    return xAxis;
}
// Function used for updating y-scale var upon click on axis label.
function yScale(data, chosenYAxis, chartHeight) {
    // Create scales.
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenYAxis]) * .8,
            d3.max(data, d => d[chosenYAxis]) * 1.2])
        .range([chartHeight, 0]);
    return yLinearScale;
}
// Function used for updating yAxis var upon click on axis label.
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    yAxis.transition()
        .duration(1000)
        .call(leftAxis);
    return yAxis;
}
// from data.js, assign data to a descriptive variable
var tableData = data;


// select the button
var button = d3.select("#filter-btn");

// select the form
var form  = d3.select("#form");


// create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// create the event handler function to run both form events
function runEnter() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // test
    console.log(inputValue);
    console.log(tableData);

    // filter() uses input as its argument
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    // test
    console.log(filteredData);

    // create arrays with the data key values
    //var dates = filteredData.map(ufo => ufo.datetime);
    //var cities = filteredData.map(ufo => ufo.city);
    //var states = filteredData.map(ufo => ufo.state);
    //var countries = filteredData.map(ufo => ufo.country);
    //var shapes = filteredData.map(ufo => ufo.shape);
    //var duration = filteredData.map(ufo => ufo.durationMinutes);
    //var comment = filteredData.map(ufo => ufo.comments);

    // create a reference to the table body
    var tbody = d3.select("tbody");

    // remove any children from the table
    tbody.html("");

    // use arrow functions to update each cell's text with filtered values
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.defineProperties(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
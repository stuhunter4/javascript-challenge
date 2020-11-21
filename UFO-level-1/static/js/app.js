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

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(ufoReport) {
        console.log(ufoReport);
        // append one table row 'tr' for each report object
        var row = tbody.append("tr");

        // use 'Object.entries' to console.log each report value
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            // use d3 to append 1 cell for each value in the report object (column)
            var cell = row.append("td");
            // use d3 to update each cell's text with report values
            cell.text(value);
        });
    });
};
// from data.js, assign data to a descriptive variable
var tableData = data;

// select the drop-down list
var slist  = d3.select("#list");

// select the various forms
var city  = d3.select("#form1");
var state = d3.select("#form2");
var country = d3.select("#form3");
var shape = d3.select("#form4");

// select the buttons for filtering clearing
var button = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");

// create event handlers for the various actions
// drop-down list, when a selection is made
slist.on("change", runList);

// forms, when they hit 'Enter'
city.on("submit", runCity);
state.on("submit", runState);
country.on("submit", runCountry);
shape.on("submit", runShape);

// buttons
button.on("click", runFilter);
clear.on("click", runClear);

// create function to filter based on list selection
function runList(){
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var inputElement1 = d3.select("#sel1");
    
    // get the value property of the input element
    var inputValue = inputElement1.property("value");
    
    // filter() uses input as its argument
    var filteredData1 = tableData.filter(ufo => ufo.datetime === inputValue);
    
    // test
    console.log(filteredData1);

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData1.forEach(function(ufoReport) {
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

// create functions to filter based on what variable is entered in the form
function runCity(){
    d3.event.preventDefault();
    var inputElement1 = d3.select("#city");
    var inputValue = inputElement1.property("value");
    var filteredData1 = tableData.filter(ufo => ufo.city === inputValue);
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData1.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
function runState(){
    d3.event.preventDefault();
    var inputElement1 = d3.select("#state");
    var inputValue = inputElement1.property("value");
    var filteredData1 = tableData.filter(ufo => ufo.state === inputValue);
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData1.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
function runCountry(){
    d3.event.preventDefault();
    var inputElement1 = d3.select("#country");
    var inputValue = inputElement1.property("value");
    var filteredData1 = tableData.filter(ufo => ufo.country === inputValue);
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData1.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
function runShape(){
    d3.event.preventDefault();
    var inputElement1 = d3.select("#shape");
    var inputValue = inputElement1.property("value");
    var filteredData1 = tableData.filter(ufo => ufo.shape === inputValue);
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData1.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// create a function that takes the datetime & what variables exist,
// then filters the data based on these inputs
function runFilter() {
	d3.event.preventDefault();
	var inputElement1 = d3.select("#sel1");
	var inputElement2 = d3.select("#city");
	var inputElement3 = d3.select("#state");
	var inputElement4 = d3.select("#country");
	var inputElement5 = d3.select("#shape");
	var inputDate = inputElement1.property("value");
	var inputCity = inputElement2.property("value");
	var inputState = inputElement3.property("value");
	var inputCountry = inputElement4.property("value");
	var inputShape = inputElement5.property("value");
	
	// define array of column names, array of inputs; for reference
	var col_names = [
		"datetime", "city", "state", "country", "shape"
	];
	var input_ele = [
		inputDate, inputCity, `${inputState}`, `${inputCountry}`, `${inputShape}`
    ];
    console.log(input_ele)
	// create two empty arrays to append to
	var filt_col = [];
    var filt_inp = [];

	// for loop that will create two new lists needed for filteredData
	for (var i = 0; i < col_names.length; i++) {
		// if the input is equal to anything, append to arrays
		if (input_ele[i] !== "") {
			filt_col.push(col_names[i]);
			filt_inp.push(input_ele[i]);
        }
    }
    console.log(filt_col);
    console.log(filt_inp);
	// if statement to create filteredData
	if (filt_inp.length == 5) {
        console.log(filt_inp);
        var filteredData = tableData.filter(ufo => ufo[filt_col[0]] === filt_inp[0] && ufo[filt_col[1]] === filt_inp[1] && ufo[filt_col[2]] === filt_inp[2] && ufo[filt_col[3]] === filt_inp[3] && ufo[filt_col[4]] === filt_inp[4]);
	}
	else if (filt_inp.length == 4) {
        console.log(filt_inp);
		var filteredData = tableData.filter(ufo => ufo[filt_col[0]] === filt_inp[0] && ufo[filt_col[1]] === filt_inp[1] && ufo[filt_col[2]] === filt_inp[2] && ufo[filt_col[3]] === filt_inp[3]);
	}
	else if (filt_inp.length == 3) {
        console.log(filt_inp);
		var filteredData = tableData.filter(ufo => ufo[filt_col[0]] === filt_inp[0] && ufo[filt_col[1]] === filt_inp[1] && ufo[filt_col[2]] === filt_inp[2]);
	}
	else if (filt_inp.length == 2) {
        console.log(filt_inp);
		var filteredData = tableData.filter(ufo => ufo[filt_col[0]] === filt_inp[0] && ufo[filt_col[1]] === filt_inp[1]);
	}
	else {
        console.log(filt_inp);
		var filteredData = tableData.filter(ufo => ufo[filt_col[0]] === filt_inp[0]);
	}

	var tbody = d3.select("tbody");
    tbody.html("");
    filteredData.forEach(function(ufoReport) {
        
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

// create a function that will clear the table
function runClear() {
    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");
};
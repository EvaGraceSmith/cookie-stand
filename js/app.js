'use strict';
console.log ('Hello from the js file');


// Sales Data
// Within your javascript file, 

// create separate JS object literals for each shop location. 
// Each location will be responsible for generating sales data and providing output on an html document. 
// You should be able to perform the following tasks in your javascript file:

// Store the min/max hourly customers, and the average cookies per customer, 
// in object properties.

// Use a method of that object to generate a random number of customers per hour. 
// Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for
// each hour at each location using average cookies purchased and 
// the random number of customers generated.

// Store the results for each location in a separate array… perhaps as 
// a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

// Calculating the sum of these hourly totals; 
// your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies


// Display the lists on sales.html. 
// We will be adding features to this application and working with its layout in the upcoming labs.

// Here are the starting numbers that you’ll need to build these objects:

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

// These numbers are simply Pat’s estimates for now, but 
// eventually, once there has been some history collected 
// that provides more accurate numbers, 

// we’ll want the ability to update these numbers for each location, 

// and to add/remove locations. 

// Make sure to make each location is its own JavaScript object.
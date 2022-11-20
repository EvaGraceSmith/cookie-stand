'use strict';
console.log ('Hello from the js file');

//global variable
StoreLocation.allStoreLocation=[];


let hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Replace all of your object literals for the salmon cookie stand with a single constructor function that,
//  when called with the ‘new’ keyword, it creates a new instance.
// Constructor function
function StoreLocation (location, min, max, avgCookies) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookies;
  this.hourlyArray = [];
  this.cookieTotal=0;
  StoreLocation.allStoreLocation.push(this);
}


StoreLocation.prototype.generateCookiesPerHour = function () {
  let min = this.minCustomersPerHour;
  let max = this.maxCustomersPerHour;
  let random = Math.ceil(Math.random() * (max + 1 -min)) +min;
  return random;
};


// Break each column by the hour and complete each row with a “Daily Location Total”.
StoreLocation.prototype.cookiePurchased= function (){
  for (let i = 0; i < hours.length; i++){
    // store hourly cookie totals based on num customers per hour
    this.hourlyArray[i]= Math.floor(this.generateCookiesPerHour() * this.avgCookiesPerSale);
    // daily store cookie total
    let cookieForThisHour = this.hourlyArray[i];
    this.cookieTotal = this.cookieTotal + cookieForThisHour;
    //console.log(this.hourlyArray);
  }
};

StoreLocation.prototype.renderTableData = function () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');

  // city name cell
  let cityNameCell = document.createElement('th');
  cityNameCell.textContent = this.location;
  row.appendChild(cityNameCell);

  let tableDataCell;
  // cookie data x 14
  for (let i = 0; i < hours.length; i++) {
    tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.hourlyArray[i];
    row.appendChild(tableDataCell);
  }

  tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.cookieTotal;
  row.appendChild(tableDataCell);
  table.appendChild(row);
};


// Display each stores data in a table format similar to what is below.
//Create Table head
function renderTableHeaders(){
  let table =document.getElementById('salesData');
  let row=document.createElement('tr');
  let tableHeadCell=document.createElement('th');
  row.appendChild(tableHeadCell);

  //hour of the day headers
  for (let i=0; i<hours.length; i++){
    tableHeadCell=document.createElement('th');
    tableHeadCell.textContent=hours[i];
    row.appendChild(tableHeadCell);
  }
  // total header
  tableHeadCell = document.createElement('th');
  tableHeadCell.textContent= 'Daily Location Total';
  row.appendChild(tableHeadCell);

  table.appendChild(row);
}
renderTableHeaders();


function renderTableFooter () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');
  let tableFootCell = document.createElement('th');
  let hoursOfDay = hours.length;
  tableFootCell.textContent = 'Totals';
  row.appendChild(tableFootCell);

  // to look at 14 hours of the day for 14 totals cells
  for (let i = 0; i < hoursOfDay; i++) {
    let cookieRowTotal = 0;
    // add up cookies from all locations
    for (let j = 0; j < locationInfo.length; j++) {
      cookieRowTotal = cookieRowTotal + locationInfo[j].hourlyArray[i];
    }
    //creates footer cells
    tableFootCell = document.createElement('td');
    tableFootCell.textContent = cookieRowTotal;
    row.appendChild(tableFootCell);
  }

  //adds all location totals together into bottom right cell:
  let superTotal = 0;
  for (let i = 0; i < locationInfo.length; i++) {
    superTotal = superTotal + locationInfo[i].cookieTotal;
    //console.log(locationInfo[i].cookieTotal);
  }
  //creates html element
  tableFootCell = document.createElement('td');
  tableFootCell.textContent = superTotal;
  row.appendChild(tableFootCell);

  //named this row in order to update later
  row.id = 'footer';
  table.appendChild(row);
}
//  Create function to handle the form submission.
function handleForm(event){
  event.preventDefault();

  let locationElement = document.getElementById('location');
  let locationValue = locationElement['value'];

  //IMPORTANT: MAKE SURE THE VALUE INPUTED IN FORM CONVERTS TO A NUMBER:

  let minCustomersPerHourElement = document.getElementById('minCustomersPerHour');
  let minCustomersPerHourValue = Number(minCustomersPerHourElement['value']);

  let maxCustomersPerHourElement = document.getElementById('maxCustomersPerHour');
  let maxCustomersPerHourValue = Number(maxCustomersPerHourElement['value']);

  let avgCookiesPerSaleElement = document.getElementById('avgCookiesPerSale');
  let avgCookiesPerSaleValue = Number(avgCookiesPerSaleElement['value']);



  //remove old totals in footer
  let OldtableTableFooter = document.getElementById('footer');
  OldtableTableFooter.remove();

  //create the new location
  // use our constructor
  let newLocation= new StoreLocation(locationValue, minCustomersPerHourValue, maxCustomersPerHourValue, avgCookiesPerSaleValue);
  //update cookies per hour and render new table row
  newLocation.generateCookiesPerHour();
  newLocation.cookiePurchased();
  newLocation.renderTableData();
  //updates table with new totals:
  renderTableFooter();

  // **********Form and Button JS**************
  //make sure form clear out and resets on submit.
  let locationForm=document.getElementById('new-location');
  locationForm.reset();
}

// using an array to get info and pass them into constructor
let seattleInfo=new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoInfo=new StoreLocation('Tokoyo', 3, 24, 1.2);
let dubaiInfo=new StoreLocation('Dubai', 11, 38, 3.7);
let parisInfo=new StoreLocation('Paris', 20, 38, 2.3);
let limaInfo=new StoreLocation('Lima', 2,16,4.6);

let locationInfo=[seattleInfo,tokyoInfo, dubaiInfo, parisInfo, limaInfo];

// Replace the lists of your data for each store and build a single table of data instead.
for (let i=0; i<locationInfo.length; i++){
  locationInfo[i].generateCookiesPerHour();
  locationInfo[i].cookiePurchased();
  locationInfo[i].renderTableData();
}
//this renders new information after filling out form
renderTableFooter();


//1. get our element
let locationForm = document.getElementById('new-location');
console.log('new-location:', locationForm);
//2. which event am I listening for 'submit'
//add an event listener
locationForm.addEventListener('submit', handleForm);

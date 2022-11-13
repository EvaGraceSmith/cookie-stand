'use strict';
console.log ('Hello from the js file');



let hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Constructor function
function StoreLocation (location, min, max, avgCookies) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookies;
  this.hourlyArray = [];
  this.cookiesPerHourArray = [];
}


StoreLocation.prototype.generateCookiesPerHour = function () {
  let min = this.minCustomersPerHour;
  let max = this.maxCustomersPerHour;
  let random = Math.ceil(Math.random() * (max + 1 -min)) +min; 
  console.log(random);
  console.log(min);
  console.log(max);
  return random;
};

StoreLocation.prototype.cookiePurchased= function (){
  for (let i = 0; i < hours.length; i++){
    // console.log(i);
    // store hourly cookie totals based on num customers per hour
    this.hourlyArray[i]= Math.floor(this.generateCookiesPerHour() * this.avgCookiesPerSale);
console.log(this.hourlyArray);
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




// function renderTableHeaders () {
//   let table = document.getElementById('cookieData');
//   let row = document.createElement('tr');
//   let tableHeadCell = document.createElement('th');
//   row.appendChild(tableHeadCell);

//   // hour of the day headers
//   for (let i = 0; i < allLocations[0].hoursList.length; i++) {
//     tableHeadCell = document.createElement('th');
//     tableHeadCell.textContent = allLocations[0].hoursList[i];
//     row.appendChild(tableHeadCell);
//   }
//   // total header
//   tableHeadCell = document.createElement('th');
//   tableHeadCell.textContent = 'Daily Location Total';
//   row.appendChild(tableHeadCell);

//   table.appendChild(row);
// }

// function renderTableFooter (allLocations) {
//   let table = document.getElementById('cookieData');
//   let row = document.createElement('tr');
//   let tableFootCell = document.createElement('th');
//   let hoursOfDay = 14;
//   tableFootCell.textContent = 'Totals';
//   row.appendChild(tableFootCell);

//   let cookieTotalArray = [];
//   // to look at 14 hours of the day for 14 totals cells
//   for (var i = 0; i < hoursOfDay; i++) {
//     let cookieTotal = 0;
//     // add up each index from all locations
//     for (let j = 0; j < allLocations.length; j++) {
//       cookieTotal = cookieTotal + allLocations[j].cookiesPerHourArray[i];
//     }
//     cookieTotalArray.push(cookieTotal);
//     tableFootCell = document.createElement('td');
//     tableFootCell.textContent = cookieTotalArray[i];
//     row.appendChild(tableFootCell);
//   }

//   let superTotal = 0;
//   for (var i = 0; i < allLocations.length; i++) {
//     superTotal = superTotal + allLocations[i].dailyLocationTotal();
//   }
//   tableFootCell = document.createElement('td');
//   tableFootCell.textContent = superTotal;
//   row.appendChild(tableFootCell);
//   row.id = 'footer';
//   table.appendChild(row);
// }









// using an array to get info and pass them into constructor
let seattleInfo=new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoInfo=new StoreLocation('Tokoyo', 3, 24, 1.2);
let dubaiInfo=new StoreLocation('Dubai', 11, 38, 3.7);
let parisInfo=new StoreLocation('Paris', 20, 38, 2.3);
let limaInfo=new StoreLocation('Lima', 2,16,4.6);


seattleInfo.generateCookiesPerHour();
tokyoInfo.generateCookiesPerHour();
dubaiInfo.generateCookiesPerHour();
parisInfo.generateCookiesPerHour();
limaInfo.generateCookiesPerHour();

seattleInfo.cookiePurchased();
tokyoInfo.cookiePurchased();
dubaiInfo.cookiePurchased();
parisInfo.cookiePurchased();
limaInfo.cookiePurchased();

console.log(seattleInfo);
console.log(tokyoInfo);
console.log(dubaiInfo);
console.log(parisInfo);
console.log(limaInfo);


seattleInfo.renderTableData();
tokyoInfo.renderTableData();
dubaiInfo.renderTableData();
parisInfo.renderTableData();
limaInfo.renderTableData();



// StoreLocation(hourArray);
// *********** Lab 6 *****************

// let locSeattle = {
//   minCustomerPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesPerSale: 6.3,
//   hourlyArray : [],
//   numCust: function(){
//     return Math.ceil(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function (){
//     for (let i = 0; i < hours.length; i++){
//       // console.log(i);
//       // store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i]= Math.floor(this.numCust() * this.avgCookiesPerSale);

//     }
//   }
// };


// let locTokyo = {
//   minCustomerPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   hourlyArray : [],
//   numCust: function(){
//     return Math.ceil(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function (){

//     for (let i = 0; i< hours.length; i++){
//       // console.log(i);
//       // store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i]= Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }

// };

// let locDubai = {
//   minCustomerPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   hourlyArray : [],
//   numCust: function(){
//     return Math.ceil(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function (){
//     for (let i = 0; i < hours.length; i++){
//       // console.log(i);
//       // store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i]= Math.floor(this.numCust() * this.avgCookiesPerSale);

//     }
//   }

// };

// let locParis = {
//   minCustomerPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   hourlyArray : [],
//   numCust: function(){
//     return Math.ceil(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function (){
//     for (let i = 0; i < hours.length; i++){
//       // console.log(i);
//       // store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i]= Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }

// };


// let locLima = {
//   minCustomerPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   hourlyArray : [],
//   numCust: function(){
//     return Math.ceil(Math.random()*(this.maxCustomerPerHour-this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function (){
//     for (let i = 0; i < hours.length; i++){
//       // console.log(i);
//       // store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i]= Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }
// };

// // console.log(locSeattle, locTokyo, locDubai, locParis, locLima);



// //  generating sales data and providing output on an html document.
// // Display the values of each array as unordered lists in the browser.
// function displayData(location, id){
//   location.cookiePurchased();
//   // console.log('location: ', location, 'store id: ' id);
//   //we are populating hourly cookie data in each of our store objects


//   //grab parent element = the <ul>
//   let parentElement = document.getElementById(id);
//   console.log(parentElement);
//   let h2 = document.createElement ('h2');
//   h2.textContent = id;

//   parentElement.appendChild (h2);

//   let cookieTotal=0;

//   for(let i = 0; i < location.hourlyArray.length; i++){
//     let cookieForThisHour = location.hourlyArray[i];

//     cookieTotal = cookieTotal + cookieForThisHour;

//     console.log({cookieForThisHour, cookieTotal});

//     let listString = hours [i] + ': ' + cookieForThisHour + ' cookies';
//     console.log (listString);

//     let li = document.createElement ('li');
//     li.textContent = listString;

//     parentElement.appendChild (li);
//   }

//   let totalLi = document.createElement ('li');
//   totalLi.textContent = 'Total Cookies: ' + cookieTotal;
//   parentElement.appendChild(totalLi);

// }



// displayData(locSeattle, 'Seattle');
// displayData(locTokyo, 'Tokyo');
// displayData(locDubai, 'Dubai');
// displayData(locParis, 'Paris');
// displayData(locLima, 'Lima');

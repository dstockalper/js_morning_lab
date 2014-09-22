var data = require("./products.json")
// Write your solutions below

console.log("")
// 1. **************************************************************************
// The `kind` of results you're dealing with are `shopping#products`. 
// Go through the `items` and find all results that have `kind` of `shopping#product`. 
// How many are there? 
// Where else is this count information stored in the search results?
total = 0;
var i = 0;
while(i < data["items"].length) {
	if(data["items"][i]["kind"] == 'shopping#product') {
		total += 1;
	}
	i++;
}

console.log("The number of 'shopping#product' items is: " + total);
console.log("This information is also stored in the search results under currentItemCount: " + data["currentItemCount"]);
console.log("")

// 2. **************************************************************************
// Find all items with a `backorder` availability in `inventories`.
backorder = [];
var i = 0;
while(i<data["items"].length) {
	if(data["items"][i]["product"]["inventories"][0]["availability"] == 'backorder') {
		backorder.push(data["items"][i]["product"]["title"]);
	}
	i++;
}

console.log("The items available on backorder are: ")
for(var i = 0; i<backorder.length; i++) {
	console.log(i+1 + ") " + backorder[i]);
}
console.log("")

// 3. **************************************************************************
// Find all items with more than one image link.
multImageLink = []
var i = 0;
while(i<data["items"].length) {
	if(data["items"][i]["product"]["images"].length >1){
		multImageLink.push(data["items"][i]["product"]["title"]);
	}
	i++;
}

console.log("The items with multiple image links are: ")
for(var i = 0; i<multImageLink.length; i++) {
	console.log(i+1 + ") " + multImageLink[i]);
}
console.log("")

// 4. **************************************************************************
// Find all `canon` products in the items (careful with case sensitivity).
canonProducts = []
var i = 0;
while(i<data["items"].length) {
	if(data["items"][i]["product"]["title"].slice(0,5) == 'Canon'){
		canonProducts.push(data["items"][i]["product"]["title"]);
	}
	i++;
}

console.log("The Canon products are: ")
for(var i = 0; i<canonProducts.length; i++) {
	console.log(i+1 + ") " + canonProducts[i]);
}
console.log("")

// 5. **************************************************************************
// Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".
ebayCanon = []
var i = 0;
while(i<data.items.length) {
	if(data.items[i].product.author.name.slice(0,4) == 'eBay' && data.items[i].product.title.slice(0,5) == 'Canon'){
		ebayCanon.push(data.items[i].product.title);
	}
	i++;
}

console.log("The Canon products from eBay are: ")
for(var i = 0; i<ebayCanon.length; i++) {
	console.log(i+1 + ") " + ebayCanon[i]);
}
console.log("")

// 6. **************************************************************************
// Print all the products with their **brand**, **price**, and an **image link**

}
console.log("")


// console.log(data["items"]);




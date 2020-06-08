	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.00
	},
	{
		name: "tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 9.00
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.00
	},
	{
		name: "cookies",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 7.98
	},
	{
		name: "organic peanut butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.50
	},
	{
		name: "organic beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.00
	},
	{
		name: "peanut butter",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.98
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		if ((restriction == "Vegetarian and GlutenFree and Organic") && (prods[i].vegetarian == true) &&
		    (prods[i].glutenFree == true) && (prods[i].organic == true)){
			
				product_names.push(prods[i]);

		}else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetarian == true) &&
		(prods[i].glutenFree == true) ) {
			product_names.push(prods[i]);

		}else if ((restriction == "Organic and GlutenFree") && (prods[i].organic == true) &&
		          (prods[i].glutenFree == true) ) {
			product_names.push(prods[i]);

		}else if ((restriction == "Vegetarian and Organic") && (prods[i].vegetarian == true) &&
		(prods[i].organic == true) ) {
			product_names.push(prods[i]);

		}else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

function sortByPrice(restrictListProducts){

	for(var j = (restrictListProducts.length - 1); j >= 0; j--){
		
		for(var i = 1; i <= j; i++){
			
			if(restrictListProducts[i-1].price > restrictListProducts[i].price){
				
				var temp = restrictListProducts[i-1];
				restrictListProducts[i-1] = restrictListProducts[i];
				restrictListProducts[i] = temp;
			}
		}
	}

	return restrictListProducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

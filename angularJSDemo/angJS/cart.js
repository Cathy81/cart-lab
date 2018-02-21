var app=angular.module("cartApp",[]);
app.controller('cartCtrl', function($scope){
    // Q1) add two more pizza objects 
    $scope.pizzas=[
        {name:'Pepperoni',price:9.99,img: "pepperoni.jpg"},
        {name:'Alfredo',price:10.99,img: "chickenAlf.jpg"},
        {name:'Works',price:12.99,img:"works.jpg"},
        {name:'Veg',price:13.99,img:"veg.jpg"}
    ]
    // add two variables: cart, and total for web page cart.html
 	$scope.cart=JSON.parse(localStorage.getItem("cart"))
 	$scope.total=0.0
    $scope.numItems=$scope.cart.reduce((total, item) => total + item.quantity,0)

//Q2: addToCart() function

//Q3: removeFromCart() function

//Q4: clearCart() function

//Q5: calcTotalPrice() function
	
})
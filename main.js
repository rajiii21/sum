// Program for divde two numbers using callback function Create one function name  "operation" in this function first two parameter is value  the third parameter is a callback function. create another function named Divide pass this function (callback")as an argument and then calling it inside the parent function 


function sum(num1,num2){
	return num1+num2
}

function operation(num1,num2,find){

	return find(num1,num2)
}
console.log(operation(10,2,sum));



// ** Print "Five!" 3 times
// var tripleFive = function() {
// 	for(i = 0; i<3; i++) {
// 	console.log("Five!")
// 	}
// }

// tripleFive()




// ** Get last letter of word using a function
// var lastLetter = function(string) {
// 	var lastLetter = string.charAt(string.length-1);
// 	return lastLetter;
// }

// console.log(lastLetter("hello"));


// // ** Get number
// var square = function(x) {
// 	var output = x * x;
// 	return output;
// }
// console.log(square(10));

//  ** alterantive way to do above code:

// var square = function(x) {
	//  return = x * x;
// }



//  ** Negate, which returns negative number
// var negate = function (x) {
// 	var output = -x;
// 	return output;
// }

// console.log(negate(5));


// ** other way to do var 
// var negate = function (x) {
// return -x;
// }
// console.log(negate(10));



// *** Function with an Array
// var toArray = function(x,y,z) {
// 	return [x,y,z];
// }

// console.log(toArray(1,3,6));


// *** Function for true / false
// var startsWithA = function (string) {
// 	return string[0].toUpperCase() ==="A";	
// }

// console.log(startsWithA("ant"));


// *** Takes string argument and returns the string plus 3 exclamation marks
// var excite = function(string) {
// 	return string +"!!!";
// }

// alert(excite("Help"));


//  *** Takes a single string argument and returns true if the string contains the word 'sun' within it.
// var sun = function(string) {
// 	return string.indexOf("sun") >=0;
// }

// console.log(sun("sundries"))
// console.log(sun("xyzsundries"))
// console.log(sun("store"))


// *** Takes a single number argument and returns true if the number is between 0 and 1.
// var tiny = function(x) {
// 	return x >0 && x <1;
// }

// console.log(tiny(14))



//  **** Take a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and 
// returns the total number of seconds represented by that timespan.
var getSeconds = function(string){
	var timeRaw = string.split(":");
	var hourSeconds = (Number(timeRaw[0]))*60;
	var seconds = Number(timeRaw[1]);
	return hourSeconds + seconds;
}

console.log(getSeconds("02:30"))





























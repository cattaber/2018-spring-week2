
var beers = 99;


function printVerse(num) {

	var name = "bottles"
	if (num === 1) {name = "bottle";}

console.log (num + " " + name + " of beer on the wall");
console.log (num + " " + name + " of beer");
console.log ("take one down, pass it around");
num--;
console.log (num + " bottles of beer on the wall\n");
return num;
}
while(beers > 0) {
	if (beers ===1) {
		console.log (beers + " bottle of beer on the wall");
		console.log (beers + " bottle of beer");
		console.log ("take one down, pass it around");
		beers--;
		console.log ("No more bottles of beer on the wall!");
	} else {
		beers = printVerse (beers);
}
}




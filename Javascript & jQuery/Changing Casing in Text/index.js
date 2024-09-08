var name = prompt("Enter your name");

var firstCharactor = name.slice(0,1);
var upperCaseFirstCharactor = firstCharactor.toLocaleUpperCase();
var restOfName = name.slice(1,name.length);
var lowerCaseCharactor = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstCharactor + lowerCaseCharactor;

alert(" Hello " + capitalisedName );

// var names = ["Shubham","Chetan","Prateek","Yash","Suyog"];

function whosPaying(names){

        var names = ["Shubham","Chetan","Prateek","Yash","Suyog"];

        var numOfPeoples = names.length;
        var randomPersonPosition = Math.floor(Math.random() * numOfPeoples);
        var randomPerson = names[randomPersonPosition];

        return randomPerson + " Is going to buy lunch today !!"
}

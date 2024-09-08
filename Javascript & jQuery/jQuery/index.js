
// for (var i =  0; i < 5; i++ ){
// document.querySelectorAll("button")[i].addEventListener("click", function(){
// document.querySelector("h1").style.color = "purple";
// });
// }
        
// $("h1").click(function(){
// $("h1").css("color","purple")
// });


// $("h1").text(event.key);
// $("input").keypress(function(event){
// })


// $("h1").on("mouseover",function(){
// $("h1").css("color","purple")
// });

// $("h1").on("click",function(){
//     $("h1").css("color","purple")
// });

// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });

// $("button").on("click",function(){
//     $("h1").slideToggle();
// });

$("button").on("click",function(){
    $("h1").animate({
        opacity:0.5
    });
});
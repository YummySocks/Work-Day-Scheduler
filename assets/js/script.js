var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var middleBlock = $('textarea');
var nine = moment(9, "H").isBefore();
var ten = moment(10, "H").isBefore();
var eleven = moment(11, "H").isBefore();
var twelve = moment(12, "H").isBefore();
var one = moment(13, "H").isBefore();
var two = moment(14, "H").isBefore();
var three = moment(15, "H").isBefore();
var four = moment(16, "H").isBefore();
var five = moment(17, "H").isBefore();
var times = [nine, ten, eleven, twelve, one, two, three, four, five]
console.log(times);
var storage = [];
$(".saveBtn").on("click",storeValues);
var hourNow = moment().format("H");
console.log(hourNow);
var hoursInDay = $('span')
console.log(hoursInDay[0].innerHTML)
middleBlock.each( function(i){
    tempT = times[i];
    tempH = $(this).parent().attr('id');
    if (tempH == hourNow ){
        $(this).toggleClass("present");
    } else if (tempT){
        $(this).toggleClass("past");
    } else {
        $(this).toggleClass("future")
    }
    $(this).val(localStorage.getItem(tempH))  
})
function storeValues(){
    var input = $(this).siblings("textarea").val().trim();
    var valueId = $(this).parent().attr('id')
    localStorage.setItem(valueId, input)
}
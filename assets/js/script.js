// setting the current day into the p tag in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var middleBlock = $('textarea');
// getting the boolean of whether or not the current time is before each hour
var nine = moment(9, "H").isBefore();
var ten = moment(10, "H").isBefore();
var eleven = moment(11, "H").isBefore();
var twelve = moment(12, "H").isBefore();
var one = moment(13, "H").isBefore();
var two = moment(14, "H").isBefore();
var three = moment(15, "H").isBefore();
var four = moment(16, "H").isBefore();
var five = moment(17, "H").isBefore();
// stores those booleans into an array
var times = [nine, ten, eleven, twelve, one, two, three, four, five];
// adds the event listener to that links to storing the values
$(".saveBtn").on("click",storeValues);
// pulls the current hour based on right now
var hourNow = moment().format("H");
// iterates through each textarea element and sets the class depending on current time
middleBlock.each( function(i){
    tempT = times[i];
    tempH = $(this).parent().attr('id');
    if (tempH == hourNow ){
        $(this).toggleClass("present");
    } else if (tempT){
        $(this).toggleClass("past");
    } else {
        $(this).toggleClass("future");
    }
    // writes the stored values back into the text area based on its key
    $(this).val(localStorage.getItem(tempH));  
})
// saves each text area input based on its position on the page
function storeValues(){
    var input = $(this).siblings("textarea").val().trim();
    var valueId = $(this).parent().attr('id');
    localStorage.setItem(valueId, input);
}
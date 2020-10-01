

var timeOfDayEl = $(".row");
var textInputEl = $(".description");
 var bttn = $(".saveBtn");

var date = $("#currentDay");

date.text(moment().format('dddd, MMM Do'));

// keep track of past, present, and future time
function color(){
     var displayColor = moment();

 if (moment()){
    timeOfDayEl.style("background-color", "red");
  }

else if(){
    timeOfDayEl.style("background-color", "yellow");
}

else{
        timeOfDayEl.style("background-color", "gray");
};

// write text and click button to save into local storage


// on click button saves event
// bttn.on("click", function(event){

// var eventText = localStorage.setItem("text", )
// });





// how do the elements change?







var timeOfDayEl = $(".row");
var textInputEl = $(".description");
var bttn = $(".saveBtn");
var date = $("#currentDay");
var currentTime = parseInt(moment().format('h'));

// display current day
date.text(moment().format('dddd, MMM Do'));

// // keep track of past, present, and future time by color coding

function color() {
    
    textInputEl.each(function( index ) {
        var timeText = parseInt($(this).attr("id"));  
        
        if (timeText === currentTime) {
            $(this).css("background-color", "red");
        }

        else if (timeText > currentTime) {
            $(this).css("background-color", "yellow");
        }

        else {
            $(this).css("background-color", "gray");
        }

}); 
};
color();

// on click button get text current row and save to local storage
bttn.on("click", function(event){
    
var currentRow = $(event.target).parent(); 
var textArea = currentRow.find("textarea");
var text = textArea.val();
// // textArea.each(fucntion()){
// //     var eventText= localStorage.setItem("text" , JSON.stringfiy(text));
//  }



// });
// //  Get from local storage
// function store(){
//     var storedText = JSON.parse(localStorage.getItem("text"));

// }

// store();








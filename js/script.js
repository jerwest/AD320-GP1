window.onload=function(){
var weight = document.getElementById('exampleWeightInput');
var cal_intake = document.getElementById('CalInput');
var cal_use = document.getElementById('calUse');
var workout_type = document.getElementById('workoutInput');
var activity_level = document.getElementById('activity_options');
var activity_level_val = activity_level[0].value;
var time = document.getElementById('timeInput');
var sleep = document.getElementById('sleepInput');
    
var outputField = document.getElementById('output');
//adding event listene to the last input field
sleep.addEventListener('change', function(){
    //testing event listener
     console.log(weight);
    
    outputField.innerHTML = "Today you weight: " + weight.value + " lbs"+ "<br>Calories you consumed: " + cal_intake.value+ "<br> Calories you used: " + cal_use.value + "<br>Workout : " + workout_type.value + "<br>Active time "+ time.value + "<br>You slept " + sleep.value + " hours";
});

};
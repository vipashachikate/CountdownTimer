var end = new Date("14 oct ,2021 00:01:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var diff = end-now;
var days = Math.floor(diff/(1000*60*60*24));
var hours = Math.floor(diff%(1000*60*60*24)/1000*60*60);
var mins = Math.floor(diff%(1000*60*60)/1000*60);
var secs = Math.floor(diff%(1000*60)/1000);
document.getElementById("demo").innerHTML = days+"Days "+hours+"Hours "+mins+"min "+secs+"sec"
},1000);

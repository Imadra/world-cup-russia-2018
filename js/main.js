var target_date = new Date(2018, 5, 14, 21, 0, 0);
utc = target_date.getTime();
var days, hours, minutes, seconds;
var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
	var current_date = new Date().getTime();
	var seconds_left = (current_date - utc) / 1000;

	days = parseInt(seconds_left / 86400);
	seconds_left = seconds_left % 86400;
		 
	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;
		  
	minutes = parseInt(seconds_left / 60);
	seconds = parseInt( seconds_left % 60 );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function f2() {
	var radi = document.getElementsByName('ch');
	for(var i=0;i<radi.length;i++) {
		if(radi[i].checked) {
			alert(i);
		}
	}
}
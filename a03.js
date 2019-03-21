window.addEventListener("load", init);

var last_color = 0; // bit 2 is red, bit 1 is green, bit 0 is blue
var counter = 0; // counter variable
var bcolor = 0; // page background colour: 0 for black, 1 is white

function init(){
	
	document.getElementById("box1").addEventListener("click", box1_color);
	document.getElementById("box3").addEventListener("click", box3_click);
	document.getElementById("box4").addEventListener("click", box4_click);
	document.getElementById("box2").addEventListener("dragstart", box2_dragstart);
	document.getElementById("box2").setAttribute("draggable", "true");
	document.getElementById("box5").addEventListener("drop", box5_drop);
	document.getElementById("box5").addEventListener("dragover", box5_dragover);
	

}


//function for box1
//change color on click
function box1_color(evt){
	
	if(last_color == 8){
		
		last_color = 0;
		
	}
	
	last_color++;
	
	var color_to_set = "#";
	
	var bcolor_to_set = "#";
	
	
	//red, blue and green for the text
	var red = (last_color & 4) ? '0' : 'F';
	
	var green = (last_color & 2) ? '0' : 'F';
	
	var blue = (last_color & 1) ? '0' : 'F';
	
	//red, blue and green for the background
	
	var bred = (last_color & 4) ? 'F' : '0';
	
	var bgreen = (last_color & 2) ? 'F' : '0';
	
	var bblue = (last_color & 1) ? 'F' : '0';
	

	
	//color_to_set = color_to_set + (last_color & 4) ? '0' : 'F' + (last_color & 2) ? '0' : 'F' + (last_color & 1) ? '0' : 'F';
	
	//bcolor_to_set = bcolor_to_set + (last_color & 4) ? 'F' : '0' + (last_color & 2) ? 'F' : '0' + (last_color & 1) ? 'F' : '0';

	
	color_to_set = color_to_set + red + green + blue;
	
	bcolor_to_set = bcolor_to_set + bred + bgreen + bblue;

	this.style.backgroundColor = bcolor_to_set;
	
	this.style.color = color_to_set ;
	
}



//function for box3
//increment number counter on click
function box3_click(evt){
	
	
	this.innerHTML = "<p>Count = " + counter + ".</p>";
	
	counter++;
	
}

//function for box4
//change background color on click
function box4_click(evt){
	
	if(bcolor == 0){
		
	document.documentElement.style.backgroundColor = "#000"
	
	bcolor = 1;
		
	}else if(bcolor == 1){
		
		document.documentElement.style.backgroundColor = "#FFF"
		
		bcolor = 0;
	}
		
	
}

//function for box2
//draggable box
function box2_dragstart(evt){
	
	evt.dataTransfer.setData("text/plain", counter);

}



//function for box5
//drop box2 here
function box5_drop(evt){
	
	evt.preventDefault();
	
	var data = evt.dataTransfer.getData("text/plain");
	
	evt.target.innerHTML = "counter = " + data;
	
}



//function for box5
function box5_dragover(evt){
	
	evt.preventDefault();
	
	
}




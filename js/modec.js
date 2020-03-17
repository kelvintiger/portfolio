// function mode(){
// 	if (document.getElementsByClassName("mode").id == "light"){
// 		var head = document.head;

// 		var original = document.getElementById('styles');
// 		original.parentNode.removeChild(original);

// 		var link = document.createElement("link");
// 		link.type = "text/css";
// 		link.rel = "stylesheet";
// 		link.href = "css/stylelight.css";
// 		head.appendChild(link);

// 		console.log(document.getElementsByClassName("mode").id);
// 		document.getElementsByClassName("mode").innerHTML="Dark Mode";
		
// 	}

// 	else {
// 		var head = document.head;

// 		var original = document.getElementById('styles');
// 		original.parentNode.removeChild(original);

// 		var link = document.createElement("link");
// 		link.type = "text/css";
// 		link.rel = "stylesheet";
// 		link.href = "css/style.css";
// 		head.appendChild(link);

// 		console.log(document.getElementsByClassName("mode"));
// 		document.getElementsByClassName("mode").innerHTML="Light Mode";
		
// 	}
// }


function lightMode(){
	var head = document.head;

	var original = document.getElementById('styles');
	original.parentNode.removeChild(original);

	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = "css/styleconnectlight.css";
	link.id = "styles";
	head.appendChild(link);

	// var mode = document.getElementById("light");
	// var parent = mode.parentNode;
	// mode.parentNode.removeChild(mode);

	// var nmode = document.createElement("a");
	// nmode.id="dark";
	// nmode.onclick=function() {darkMode()};
	// nmode.innerHTML="Dark Mode";

	// parent.appendChild(nmode);



}

function darkMode(){
	var head = document.head;

	var original = document.getElementById('styles');
	original.parentNode.removeChild(original);

	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = "css/styleconnect.css";
	link.id = "styles";
	head.appendChild(link);

	// var mode = document.getElementById('dark');
	// var parent = mode.parentNode;
	// mode.parentNode.removeChild(mode);

	// var nmode = document.createElement("a");
	// nmode.id="light";
	// nmode.onclick="lightMode()";
	// nmode.innerHTML="Light Mode";

	// parent.appendChild(nmode);
}
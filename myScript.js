function Uppercase(){
	let data=document.getElementById('textInput').value;
	//console.log(data.toUpperCase())
	document.getElementById('textInput').value=data.toUpperCase();
}

function Lowercase(){
	let data=document.getElementById('textInput').value;
	document.getElementById('textInput').value=data.toLowerCase();
}

function removeSpace(){
	let data=document.getElementById('textInput').value;
	
	let newData=data.split(/[ ]+/);
	console.log(newData)
	document.getElementById('textInput').value=(newData.join(" "));
}

function TextCopy(){
	let data=document.getElementById('textInput');
	//data.select();
	navigator.clipboard.writeText(data.value);

}

function clearText(){
	let data=document.getElementById('textInput').value;
	document.getElementById('textInput').value="";
}
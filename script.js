var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement(), createDiscardButton();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement(), createDiscardButton();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





//var done = document.getElementsByClassName("done");

/*
var listItem = document.querySelector("li");

function addDoneLineAfterClick() {
	listItem.classList.toggle("done");
};

listItem.addEventListener("click", addDoneLineAfterClick);
*/

var listItems = document.querySelector("ul");

function addDoneLineAfterClick(event) {
	event.target.classList.toggle("done");
};

listItems.addEventListener("click", addDoneLineAfterClick);

/////////////////////////////////////////////////////////////////////////


function createDiscardButton() {
	discardButton = document.createElement("button");
	discardButton.innerText = "Remove - newitem";
	document.body.appendChild(discardButton);
};


function defaultDiscardButtons() {
	sideButtonItem1 = document.createElement("button");
	sideButtonItem1.innerText = "Remove1";
	document.body.appendChild(sideButtonItem1);

	sideButtonItem2 = document.createElement("button");
	sideButtonItem2.innerText = "Remove2";
	document.body.appendChild(sideButtonItem2);

	sideButtonItem3 = document.createElement("button");
	sideButtonItem3.innerText = "Remove3";
	document.body.appendChild(sideButtonItem3);
};
defaultDiscardButtons();


function removeListItem1() {
	item1.remove();
};

function removeListItem2() {
	item2.remove();
};

function removeListItem3() {
	item3.remove();
};

function removeDiscardButton(event) {
	event.target.remove();
};

function removeUserInputListItem() {
	listItems.remove("li");

};

sideButtonItem1.addEventListener("click", removeDiscardButton);
sideButtonItem1.addEventListener("click", removeListItem1);

sideButtonItem2.addEventListener("click", removeDiscardButton);
sideButtonItem2.addEventListener("click", removeListItem2);

sideButtonItem3.addEventListener("click", removeDiscardButton);
sideButtonItem3.addEventListener("click", removeListItem3);

discardButton.addEventListener("click", removeDiscardButton);
discardButton.addEventListener("click", removeUserInputListItem);

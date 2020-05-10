const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('list');


function addToList() {
	var li = document.createElement("LI");
	var textNode = document.createTextNode(input.value);
	li.appendChild(textNode);
	if (input.value !== '') {
		list.appendChild(li);
	}
	input.value = ''
	addCloseToElement(li);
}

function addCloseToAll() {
	let listElements = list.getElementsByTagName('LI');

	for (let i = 0; i < listElements.length; i++) {
		let span = document.createElement("SPAN");
		let txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		listElements[i].appendChild(span);

		span.onclick = function () {
			let div = this.parentElement;
			div.style.display = "none";
		}
	}
}

function addCloseToElement(element) {
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	element.appendChild(span);

	span.onclick = function () {
		let div = this.parentElement;
		div.style.display = "none";
	}
}

addBtn.addEventListener('click', () => addToList());

input.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		addToList();
	}
})

list.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
}, false);


addCloseToAll();
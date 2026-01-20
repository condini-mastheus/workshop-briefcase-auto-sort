export default {
	draw,
	drawItem,
	generateItem,
	add,
};


// ****************************

const NUM_COLUMS = 8;
const NUM_ROWS = 6;

const slots = [];

function draw(boardEl) {
	for (let i = 0; i < NUM_ROWS; i++) {
		slots.push([]);
		let rowEl = document.createElement("div")
		for (let j = 0; j < NUM_COLUMS; j++) {
			let tileEl = document.createElement("div");
			slots[i].push(tileEl);
			rowEl.appendChild(tileEl)
		}	
		
		boardEl.appendChild(rowEl)
	}
}

function drawItem(el, rows, cols, color) {
	el.innerHTML = '';

	for (let i = 0; i < rows; i++) {
		let rowEl = document.createElement("div")
		for (let j = 0; j < cols; j++) {
			let tileEl = document.createElement("div");
			tileEl.style.backgroundColor = color;
			rowEl.appendChild(tileEl)
		}	
		
		el.appendChild(rowEl)
	}
}

function generateHexColor() {
  let hexLetters = "0123456789ABCDEF";
  let color = "#";
  
	for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateItem() {
	/*	this will add a range of 1 ... param / 2
	*   to generante small itens semi-random width and heights
	*/
	const rows = Math.round((Math.random() * 100 % NUM_ROWS + 1) / 2);
	const cols = Math.round((Math.random() * 100 % NUM_COLUMS + 1) / 2);
	const color = generateHexColor()

	return {
		rows, cols, color
	}
}

function add(currItem) {
	if(Object.keys(currItem).length === 0) { 
		throw Error('no item found');
	}

	/*	This will only add the begining of the inventory
	*   change this to place wherever you need
	*/

	for (let i = 0; i < currItem.rows; i++) {
		for (let j = 0; j < currItem.cols; j++) {
			slots[i][j].style.backgroundColor = `${currItem.color}`;
		}	
	}
}
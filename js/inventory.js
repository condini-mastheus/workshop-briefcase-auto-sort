export default {
	draw,
	drawItem,
	generateItem,
	add,
};


// ****************************

const NUM_COLUMNS = 8;
const NUM_ROWS = 6;

const slotsDOM = [];
let state = {};

function createEmptyGrid() {
  return Array.from({ length: NUM_ROWS }, () => Array(NUM_COLUMNS).fill(0));
}

function resetState() {
  state = {
    grid: createEmptyGrid(),      // [row][col] => 0 or itemId
    itemsById: new Map(),         // itemId => { id, rows, cols, color, x, y }
    nextId: 1,
		anchors: new Set(),
  };
}

function draw(boardEl) {
	for (let i = 0; i < NUM_ROWS; i++) {
		slotsDOM.push([]);
		let rowEl = document.createElement("div")
		for (let j = 0; j < NUM_COLUMNS; j++) {
			let tileEl = document.createElement("div");
			slotsDOM[i].push(tileEl);
			rowEl.appendChild(tileEl)
		}			
		boardEl.appendChild(rowEl)
	}

	resetState();
	render();
}

function render() {
  for (let r = 0; r < NUM_ROWS; r++) {
    for (let c = 0; c < NUM_COLUMNS; c++) {
      const cell = slotsDOM[r][c];
      const id = state.grid[r][c];

      if (id === 0) {
        cell.style.backgroundColor = "white";
      } else {
        const item = state.itemsById.get(id);
        cell.style.backgroundColor = item.color;
      }
    }
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
	const rows = Math.round((Math.random() * 100 % NUM_ROWS + 1) / 2);
	const cols = Math.round((Math.random() * 100 % NUM_COLUMNS + 1) / 2);
	const color = generateHexColor()

	return {
		rows, cols, color
	}
}

function calculateAnchors(pos, placedItem) {
	const { y, x } = pos;
	const { rows, cols } = placedItem;

	state.anchors.add(`${x + cols},${y}`);
	state.anchors.add(`${x},${y + rows}`);
}

function add(currItem) {
	if(Object.keys(currItem).length === 0) { 
		throw new Error('no item found');
	}

	const pos = findFitByAnchors(state.grid, currItem);

	if (!pos) return false;

	const id = state.nextId++;
	const placed = { id, ...currItem, x: pos.x, y: pos.y };

	state.itemsById.set(id, placed);
	place(state.grid, id, currItem, pos.x, pos.y);
	calculateAnchors(pos, currItem);

	render();
	return true;
}

// Baseline: top-left to bottom-right
function findFirstFit(grid, item) {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLUMNS; x++) {
      if (canPlace(grid, item, x, y)) return { x, y };
    }
  }
  return null;
}

function findFitByAnchors(grid, item) {
	if(state.anchors.size === 0) {
		return { x: 0, y: 0 };
	};

	for (let anchor of state.anchors) {
		const [x, y] = anchor.split(",");

		const numberX = Number(x);
		const numberY = Number(y);

		if (canPlace(grid, item, numberX, numberY)) {
			return { x: numberX, y: numberY };
		}
	}

	return null;
}

function place(grid, itemId, item, x, y) {
  for (let r = 0; r < item.rows; r++) {
    for (let c = 0; c < item.cols; c++) {
      grid[y + r][x + c] = itemId;
    }
  }
}

function canPlace(grid, item, x, y) {
  // bounds
  if (x < 0 || y < 0) return false;
  if (x + item.cols > NUM_COLUMNS) return false;
  if (y + item.rows > NUM_ROWS) return false;

  // collisions
  for (let r = 0; r < item.rows; r++) {
    for (let c = 0; c < item.cols; c++) {
      if (grid[y + r][x + c] !== 0) return false;
    }
  }

  return true;
}
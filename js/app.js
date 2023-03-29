import Inventory from "./inventory.js";

document.addEventListener("DOMContentLoaded",async function ready(){
	var boardEl = document.getElementById("inventory");
	var itemEl = document.getElementById("item");
	var getItemBtn = document.getElementById("get-item-btn");
	var addItemBtn = document.getElementById("add-item-btn");

	var currItem = {};

	Inventory.draw(boardEl);

	getItemBtn.addEventListener("click", drawItem, false);
	addItemBtn.addEventListener("click", add, false);

	function drawItem() {
		const {
			rows, cols, color
		} = Inventory.generateItem();

		currItem = {
			rows, 
			cols, 
			color
		}
		
		Inventory.drawItem(itemEl, rows, cols, color)
	}

	function add() {
		Inventory.add(currItem)
	}
});

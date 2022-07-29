const List = document.querySelector('.List');
var i = document.querySelector('.inputArea');
const insert = document.querySelector('.inputButton');

if(window.localStorage.getItem("task") == undefined){
     var task = [];
     window.localStorage.setItem("task", JSON.stringify(task));
}

var task_eg = window.localStorage.getItem("task");
var task = JSON.parse(task_eg);

class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "DELETE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));
        
    	List.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(remove);
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = task.indexOf(name);
        task.splice(index, 1);
        window.localStorage.setItem("task", JSON.stringify(task));
    }
}

insert.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(i.value != ""){
		new item(i.value);
        task.push(i.value);
        window.localStorage.setItem("task", JSON.stringify(task));
		i.value = "";
	}
}
for (var v = 0 ; v < task.length ; v++){
    new item(task[v]);
}
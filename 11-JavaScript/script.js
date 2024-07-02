let itemsMap = new Map();

itemsMap.set(1, 'Item 1');
itemsMap.set(2, 'Item 2');
itemsMap.set(3, 'Item 3');

function displayItems(map){
    let itemList = document.getElementById('itemList');
    itemList.innerHTML=''; //clear existing items
    map.forEach((value,key) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${key}:${value}`;
        //Create Edit and Delete Buttons
        let editButton = document.createElement('button');
        editButton.textContent='Edit';
        editButton.onclick = ()=> editItem(key);

        let deleteButton = document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.onclick = ()=> deleteItem(key);

        let controlsDiv = document.createElement('div');
        controlsDiv.className ='controls';
        
        controlsDiv.appendChild(editButton);
        controlsDiv.appendChild(deleteButton);


        listItem.appendChild(controlsDiv);
        itemList.appendChild(listItem);        
    });

    
}

function addItem(key,value){
    itemsMap.set(key,value);
    displayItems(itemsMap);
}

function editItem(key){
    let newValue = prompt('Enter new value:',itemsMap.get(key));
    if(newValue!==null){
        itemsMap.set(key,newValue);
        displayItems(itemsMap);
    }
}

function deleteItem(key){
    itemsMap.delete(key);
    displayItems(itemsMap);
}

document.getElementById('addItemForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    let key = document.getElementById('itemKey').value;
    let value = document.getElementById('itemValue').value;
    addItem(key,value);
    document.getElementById('addItemForm').reset();
});

window.onload = () => {
    displayItems(itemsMap);
};
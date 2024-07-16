const inventory = new Map();

//function to add an item
function addItem(id,name,category,quantity){
    if(inventory.has(id)){
        console.log(`Error: Item with ID ${id} already exists.`);
    } else{
        inventory.set(id,{name,category,quantity});
        console.log(`Item with ID ${id} added.`);
    }
}

//function to remove an item
function removeItem(id){
    if(inventory.has(id)){
        inventory.delete(id);
        console.log(`Item with ID ${id} removed.`);
    } else{
        console.log(`Error: Item with ID ${id} not found.`);
    }
}

//function to search for items
function searchItems(searchTerm){
    const results =[];
    for(const [id,item] of inventory){
        if(id.includes(searchTerm) || item.name.includes(searchTerm) || item.category.includes(searchTerm)){
            results.push({id,...item});
        }
    }
    if(results.length>0){
        console.log('Search Results:',results);
    } else{
        console.log('No items found!');
    }
}

//function to update an item
function updateItem(id, newName, newCategory, newQuantity){
    if(inventory.has(id)){
        const item = inventory.get(id);
        item.name = newName || item.name;
        item.category = newCategory || item.category;
        item.quantity = newQuantity !== undefined ? newQuantity : item.quantity;
        inventory.set(id,item);
        console.log(`Item with ID ${id} updated.`);
    } else {
        console.log(`Error: Item with ID ${id} not found.`);
    }

}

//function to print a summary report of all items

function printSummary(){
    if(inventory.size>0){
        console.log('Inventory Summary:');
        for(const [id,item] of inventory){
            console.log(`ID: ${id}, Name: ${item.name}, Category: ${item.category},
                Quantity: ${item.quantity}`);
        }
    } else{
        console.log('Inventory is empty.')
    }
}

//Hardcoded values
addItem('1','Laptop','Electronics', 10);
addItem('2','Chair', 'Furniture',100);
addItem('3', 'Notebook', 'Stationary', 100);

//removing an item
removeItem('2');

//searching for an item
searchItems('Laptop');
searchItems('Stationary');
searchItems('1');

//updating an item
updateItem('1','Gaming Laptop', 'Electronics',8);

//print summary

printSummary();



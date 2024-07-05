const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventory = new Map();

function askCommand(){
    console.log("Welcome to the Inventory Management CLI!");
    console.log("Available commands: add ,remove, search, update, summary, exit");
    rl.question("\Enter a Command: ", function(command){
        switch(command.trim().toLowerCase()){
            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemsPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log("Invalid Command. Please try again!");
                askCommand();
                break;
        }
    });
}

//function to add item prompt
function addItemPrompt(){
    rl.question("Enter item id: ", function(id){
        rl.question("Enter item name: ", function(name){
            rl.question("Enter item category: ", function(category){
                rl.question("Enter item quantity", function(quantity){
                    addItem(id,name,category,parseInt(quantity));
                    askCommand();
                });
            });
        });
    });
}



//function to add an item
function addItem(id,name,category,quantity){
    if(inventory.has(id)){
        console.log(`Error: Item with ID ${id} already exists.`);
    } else{
        inventory.set(id,{name,category,quantity});
        console.log(`Item with ID ${id} added.`);
    }
}

// Function to remove an item
function removeItemPrompt() {
    rl.question("Enter search term: ", function(id) {
        removeItem(id);
        askCommand();
    });
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

// Function to search for items
function searchItemsPrompt() {
    rl.question("Enter search term: ", function(searchTerm) {
        searchItems(searchTerm);
        askCommand();
    });
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

//function to add item prompt
function updateItemPrompt(){
    rl.question("Enter item id: ", function(id){
        rl.question("Enter item name: ", function(name){
            rl.question("Enter item category: ", function(category){
                rl.question("Enter item quantity", function(quantity){
                    updateItem(id, newName, newCategory, newQuantity ? parseInt(newQuantity) : undefined);
                    askCommand();
                });
            });
        });
    });
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

askCommand();
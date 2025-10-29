const inventory = [];

const findProductIndex = (pdctName) => {
  const pdctNameLowerCase = pdctName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === pdctNameLowerCase) {
      return i;
    }
  }
  return -1;
};


const addProduct = (product) => {
  const nameLower = product.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1){
    inventory[index].quantity += product.quantity;
    console.log(`${nameLower} quantity updated`);  
  }else{
    inventory.push({name:nameLower, quantity: product.quantity});
    console.log(`${nameLower} added to inventory`);
  }
}

const removeProduct = (name, quantity) => {
  const nameLower = name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  const currentQuantity = inventory[index].quantity;

  if (currentQuantity < quantity) {
    console.log(`Not enough ${nameLower} available, remaining pieces: ${currentQuantity}`);
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(`Remaining ${nameLower} pieces: ${inventory[index].quantity}`);
  }
};



removeProduct("FLOUR", 5 )

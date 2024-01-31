function totalInkoop(inventory) {
    let totalBought = 0;

    for(let i = 0; i < inventory.length; i++){
        totalBought = totalBought + inventory[i].originalStock;
    }

    return totalBought;
}

export default totalInkoop;
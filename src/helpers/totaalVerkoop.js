function totalSold(inventory) {

    let total = 0;

    for(let i = 0; i < inventory.length; i++ ){
        total = total + inventory[i].sold;
    }
    return  total ;
}

export default totalSold;



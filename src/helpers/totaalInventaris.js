import totaalInkoop from "./totaalInkoop.js";
import totaalVerkoop from "./totaalVerkoop.js";

function totalNogVerkocht(inventory) {
    const inkoop = totaalInkoop(inventory);
    const verkoop = totaalVerkoop(inventory);
    return inkoop - verkoop;
}

export default totalNogVerkocht;
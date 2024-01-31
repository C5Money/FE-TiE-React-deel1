
function tvNaamString(tvArray) {
    const merkTv = tvArray.brand;
    const typeTv = tvArray.type;
    const nameTv = tvArray.name;
    return `${merkTv} ${typeTv} - ${nameTv}`;
}

export default tvNaamString;
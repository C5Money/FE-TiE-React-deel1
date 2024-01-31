function schermgrootte(tvObject) {
    let result = [];

    for(let i= 0; i < tvObject.availableSizes.length; i++){
        const cm = tvObject.availableSizes[i];
        const inch = tvObject.availableSizes[i] * 0.394;

        result = `${inch} inches (${cm} cm) | `;
    }
    return result;
}

export default schermgrootte;
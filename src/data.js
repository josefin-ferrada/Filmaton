window.data = {

    filterData: (pokemonData, condition) => {
        let result;
        if (condition === "none") {
            result = pokemonData;
        } else {
            result = pokemonData.filter(element => {
                if (element.type.includes(condition)) {
                    return element;
                }
            });
        }

        return result;

    }

    
}

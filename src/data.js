window.data = {
    filterData: (data, condition) => {
        let result;
        console.log(data);
        result = data.filter(element => {
            if (element.genre_ids.includes(parseInt(condition))) {
                console.log("contiene");
                return element;
            }
        });
        return result;
    },
    sortData: (data, Order) => {
        let ordered;
        if (Order === "asc") {
            ordered = data.sort((a, b) => {
                if (a.popularity < b.popularity)
                    return -1;
                else if (a.popularity > b.popularity)
                    return 1;
                else
                    return 0;
            });
        } else if (Order === "desc") {
            ordered = data.sort((a, b) => {
                if (a.popularity < b.popularity)
                    return 1;
                else if (a.popularity > b.popularity)
                    return -1;
                else
                    return 0;
            });
        }
        return ordered;
    }
};
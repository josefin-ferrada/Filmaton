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

    }
}
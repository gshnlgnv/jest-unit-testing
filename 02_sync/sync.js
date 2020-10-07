class Lodash {
    compact(arr) {
        return arr.filter( val => !!val) // removing values
    }

    groupBy(arr, prop) {
        return arr.reduce( (acc, elem) => {
            const key = typeof prop === 'function' ? prop(elem) : elem[prop];
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(elem);
            return acc;
        }, {})
    }
}

module.exports = Lodash;
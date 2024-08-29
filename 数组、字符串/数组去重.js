function uniqueArray(arr) {
    return [...new Set(arr)];
}
function uniqueArray(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function uniqueArray(arr) {
    return arr.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}

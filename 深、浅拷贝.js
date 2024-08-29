//浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    return Object.assign({}, obj);
}
//深拷贝

function deepCopy(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // 如果是日期或正则对象则直接返回一个新对象  
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    // 如果hash中有这个对象，则直接返回hash中存储的对象引用  
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    let newObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, newObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key], hash);
        }
    }

    return newObj;
}  

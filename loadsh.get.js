function get(obj, path, defaultValue = undefined) {
    const pathArray = path.split('.');
    let currentObj = obj;
  
    for (const key of pathArray) {
      if (currentObj && currentObj.hasOwnProperty(key)) {
        currentObj = currentObj[key];
      } else {
        return defaultValue;
      }
    }
  
    return currentObj;
  }
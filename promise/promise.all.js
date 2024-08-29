Promise.myAll = function (promises) {
  let res, rej
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;

  })
  let i = 0;
  const result = []
  for (const prom of promises) {
    const index = i
    i++;
    Promise.resolve(prom).then((res) => {
      result[index] = res;
      i--;
      if (i == 0) {
        res(result)
      }

    }, rej)
  }
  if (i == 0) {
    res([])
  }
  return p;
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason))
}
Promise.resolve = function (value) {
  if (value && value instanceof Promise) {
    return value;
  } else if (value && typeof value === 'object' && typeof value.then === 'function') {
    let then = value.then;
    return new Promise(resolve => {
      then(resolve);
    });
  } else if (value) {
    return new Promise(resolve => resolve(value));
  } else {
    return new Promise(resolve => resolve());
  }
}


Promise.race = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(val => {
        resolve(val)
      }, err => {
        rejecte(err)
      })
    })
  })
}


Promise.allSettled = function myPromiseAllSettled(array) {
  return new Promise((resolve, reject) => {
    if (array && typeof array[Symbol.iterator] === "function") {
      let arrayLength = array.length;
      let resultArray = [];
      array.forEach((value, index) => {
        Promise.resolve(value).then(
          (res) => {
            resultArray[index] = res;
            if (resultArray.length === arrayLength) {
              resolve(resultArray);
            }
          },
          (err) => {
            resultArray[index] = err;
            if (resultArray.length === arrayLength) {
              resolve(resultArray);
            }
          },
        );
      });
    }
  });
}

Promise.any = function myPromiseAny(array) {
  return new Promise((resolve, reject) => {
    let arrayLength = array.length;
    let errList = [];
    if (array && typeof array[Symbol.iterator] === "function") {
      array.forEach((value, index) => {
        Promise.resolve(value).then(
            (res) => {
              resolve(res);
            },
            (err) => {
              errList[index] = new Error(err);
              if (errList.length === arrayLength) {
                reject(new AggregateError(errList));
              }
            },
        );
      });
    }
  });
}


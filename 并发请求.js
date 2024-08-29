function concurrentRequest(urls, maxNum) {

    return new Promise((resolve, reject) => {
        if (!urls || !urls.length) return resolve([]);
        const result = [];
        let index = 0;
        let promiseFinishCount = 0;
        async function _request() {
            const i = index
            const url = urls[index];
            index++;
            const res = await fetch(url);
            result[i] = res;
            if (index < urls.length) {
                _request()
            }
            promiseFinishCount++;
            if (promiseFinishCount === urls.length) {
                resolve(result)
            }

        }
        for (let i = 0; i < maxNum; i++) {
            _request()
        }
        
    })
}
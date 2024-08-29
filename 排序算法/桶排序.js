
//n+m
function bucketSort(arr, numBuckets) {
    // 1. 创建桶
    const buckets = new Array(numBuckets).fill().map(() => []);
    // 2. 确定每个桶的范围
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);
    const range = (maxValue - minValue) / numBuckets;
    // 3. 将数据分配到桶中
    for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - minValue) / range);
      if (bucketIndex === numBuckets) {
        // 处理最大值的情况，将其放入最后一个桶
        bucketIndex--;
      }
      buckets[bucketIndex].push(arr[i]);
    }
    // 4. 对每个桶中的数据进行排序（这里使用插入排序作为示例）
    const sortedBuckets = buckets.map(bucket => {
      return insertionSort(bucket);
    });
    // 5. 合并桶中的数据
    let sortedArray = [];
    for (let i = 0; i < sortedBuckets.length; i++) {
      sortedArray = sortedArray.concat(sortedBuckets[i]);
    }
    return sortedArray;
  }
  
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
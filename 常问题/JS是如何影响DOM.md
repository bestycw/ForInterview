1. HTML 解析器是等整个 HTML 文档加载完成之后开始解析的，还是随着 HTML 文档边加载边解析的？
  a. HTML 解析器并不是等整个文档加载完成之后再解析的，而是网络进程加载了多少数据，HTML 解析器便解析多少数据。
2. 当遇到script标签时，因为无法判断是否js会修改dom，所以必然会暂停解析。
  a. 浏览器提供了预解析，浏览器会开启一个线程，提前扫描，提前下载。
  b. CDN加速，压缩体积。
  c. 如果js不操作dom可以在script上加入defer或者async。
    ⅰ. async加载完立即执行
    ⅱ. defer延后执行，需要在DOMContentloaded事件后
3. css的文件为什么最好放在body之前呢 ？
  a. 因为js中可能存在css的操作，所以如果js之上存在css文件，需要先下载才能执行js
  b. css-js-dom 所以css会间接的影响dom的合成
  c. 因此js通常引用在最后方，为了不阻塞dom生成
4. 瓶颈出现在，下载js、css、执行js
  a. 内联jscss。减少下载
  b. webpack压缩
  c. async、defer
  d. 将css拆分 
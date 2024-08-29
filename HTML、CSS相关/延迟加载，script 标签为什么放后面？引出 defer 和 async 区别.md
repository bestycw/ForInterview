前端加载 html，html 解析器运行于主线程中，如果遇到<script>
标签后会阻塞，直到脚本从网络中下载并被执行，也就是说<script>
标签的脚本会阻塞浏览器的渲染。这里还涉及到页面生命周期：

DOMContentLoaded 页面已经完全加载了 html 并且构建了 dom 树，但样式和 img
这样的资源还没有加载完
load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
beforeunload/unload —— 当用户正在离开页面时。

当浏览器处理一个 HTML 文档，并在文档中遇到 <script> 标签时，就会在继续构建 DOM
之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行
document.write
操作，所以 DOMContentLoaded 必须等待脚本执行结束。如何解决这个问题，可以使用
script
标签的两个属性，defer 和 async。

没有 defer 或 async，就会阻塞了，浏览器会立即加载执行这个script
脚本，就是卡在这个标签之后的这些文档元素前加载并执行
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行。
有 defer ，同样也是并行异步的，不同的地方就是 script js 的执行会在所有元素解析完，并且在DOMContentLoaded 事件触发前完成。


async 执行时机：下载完后，立即执行
defer 下载完后，在 dom 解析完之后、触发 DOMContentLoaded 方法之前执行
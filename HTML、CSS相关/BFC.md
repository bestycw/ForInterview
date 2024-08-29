BFC（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，容器页面里的子元素不会影响到外部的元素，并且有一套属于自己的渲染规则：

BFC 是一个块级元素，块级元素会在垂直方向上一个接一个的排列。
BFC 就是页面中的一个隔离的独立容器，容器里的元素不会影响到容器外的元素。
垂直方向的距离由margin决定，属于同一个 BFC 内的两个相邻标签的外边距会发生重叠。
计算 BFC 的时候，浮动元素也参与其中。
# 下列方式会创建块格式化上下文：

文档的根元素（<html>）。
浮动元素（即 float 值不为 none 的元素）。
绝对定位元素（position 值为 absolute 或 fixed 的元素）。
行内块元素（display 值为 inline-block 的元素）。
表格单元格（display 值为 table-cell，HTML 表格单元格默认值）。
表格标题（display 值为 table-caption，HTML 表格标题默认值）。
匿名表格单元格元素（display 值为 table（HTML 表格默认值）、table-row（表格行默认值）、table-row-group（表格体默认值）、table-header-group（表格头部默认值）、table-footer-group（表格尾部默认值）或 inline-table）。
overflow 值不为 visible 或 clip 的块级元素。
display 值为 flow-root 的元素。
contain 值为 layout、content 或 paint 的元素。
弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
多列容器（column-count 或 column-width (en-US) 值不为 auto，且含有 column-count: 1 的元素）。
column-span 值为 all 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（规范变更、Chrome bug）

（创建BFC的方式：根元素、浮动元素和绝对定位元素，非块级盒子的块级容器，overflow 值不为 visiable 的块级盒子）
# 应用场景：

防止 margin 塌陷，例如两个 p 取大的值，这个时候可以在外层包一层 div
清除浮动，例如在子元素浮动的情况，父元素没有被撑开，BFC 在计算高度时浮动元素也会计算的，给父元素加上 overflow hidden
自适应多栏布局，例如使用 float 布局两栏布局，左侧 float left，左边依然会与包含块的左边相接触，这个时候可以给外边距加 overflow: hidden;


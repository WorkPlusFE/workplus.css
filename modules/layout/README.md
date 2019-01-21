# @workplus-css/layout

### 安装

```bash
npm install @workplus-css/layout
```

### 页面基本框架

提供*w-pages*, *w-page*和*w-page-content*，一般页面元素，都应该写到*w-content*内：

```html
<div className='w-page'>
  <div className='w-page-content'>
    <!-- content -->
  </div>
</div>
```

通过*w-block*及*w-block-title*，可以很方便地实现带标题的块元素：

```html
<div class="w-block-title">Title</div>
<div class="w-block">
  content
</div>
```

### 浮动

提供*w-float-left*及*w-float-right*设置浮动属性，同时提供*w-clearfix*来清除浮动:

```html
<div className="w-clear">
  <div className="w-col-4 w-float-left">
    <div className="border grid-item">1</div>
  </div>
  <div className="w-col-4 w-float-left">
    <div className="border grid-item">2</div>
  </div>
  <div className="w-col-4 w-float-left">
    <div className="border grid-item">3</div>
  </div>
</div>
```

### 其他

提供*w-table*及*w-table-cell*来进行table形式的布局，及*w-middle*这样的垂直居中设置。

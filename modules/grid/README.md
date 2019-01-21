# @workplus-css/grid

### 安装

```bash
npm install @workplus-css/grid
```

### col-[*]

提供*col-1*至*col-12*的尺寸选择，布局上，需要配合浮动，如*w-float-left*：

```html
<div className="w-clear">
  <div className="w-col-4 w-float-left border grid-item">1</div>
  <div className="w-col-4 w-float-left border grid-item">2</div>
  <div className="w-col-4 w-float-left border grid-item">3</div>
</div>
```

### Gutter

提供3个尺寸的间隔：

* w-gutter: 10px
* w-gutter-20: 20px
* w-gutter-30: 30px

```html
<div className="w-clear w-gutter-20">
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

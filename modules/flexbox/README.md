# @workplus-css/flexbox

### 安装

```bash
npm install @workplus-css/flexbox
```

### 布局/方向

通过添加*w-flex*类名来开启flexbox弹性布局，同时提供*w-flex-[1-10]*的占比类名，而通过*w-flex-auto*、*w-flex-none*、*w-flex-noshrink*可以满足大部分常规的元素模块布局。

```html
<div class="w-flex">
  <div class="flex-item w-flex-1">1</div>
  <div class="flex-item w-flex-2">2</div>
  <div class="flex-item w-flex-3">3</div>
</div>
```

通过*w-flex-column*、*w-flex-row-reverse*、*w-flex-column-reverse*来控制items的方向：

```html
<div class="w-flex w-flex-column"></div>
<div class="w-flex w-flex-row-reverse"></div>
<div class="w-flex w-flex-column-reverse"></div>
```

通过*w-flex-nowrap*、*w-flex-wrap-reverse*来控制换行：

```html
<div class="w-flex w-flex-nowrap"></div>
<div class="w-flex w-flex-wrap-reverse"></div>
```

### 对齐

通过*w-flex-center*，可以设置完全的居中效果：

```css
w-flex-center {
  justify-content: center;
  align-items: center;
  align-content: center;
}
```

##### justify-content

该属性包含以下的可选值：

justify-content: flex-start | flex-end | center | space-between | space-around;

该包提供以下样式类名：

* w-flex-justify-start/w-flex-js: flex-start
* w-flex-justify-end/w-flex-je: flex-end
* w-flex-justify-center/w-flex-jc: center
* w-flex-justify-between/w-flex-jb: space-between
* w-flex-justify-around/w-flex-ja: space-around


##### align-items

该属性包含以下的可选值：

align-items： stretch | flex-start | flex-end | center | baseline; 

该包提供以下样式类名：

* w-flex-align-start/w-flex-as: flex-start
* w-flex-align-end/w-flex-ae: flex-end
* w-flex-align-center/w-flex-ac: center
* w-flex-align-baseline/w-flex-ab: baseline
* w-flex-align-stretch/w-flex-ast: stretch

##### align-self

该属性包含以下的可选值：

align-self: stretch | auto | flex-start | flex-end | center | baseline;

该包提供以下样式类名：

* w-flex-self-stretch/w-flex-sst: stretch
* w-flex-self-auto/w-flex-sa: auto
* w-flex-self-start/w-flex-ss: flex-start
* w-flex-self-end/w-flex-se: flex-end
* w-flex-self-center/w-flex-sc: center
* w-flex-self-baseline/w-flex-sb: baseline

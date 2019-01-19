# @workplus-css/gap

### 安装

```bash
npm install @workplus-css/gap
```

### 简写属性

| 简写  | 描述    |
| -------------- | :----- |
| m   | margin   |
| p   | padding   |
| t   | top   |
| r   | right   |
| b   | bottom   |
| l   | left   |
| x   | horizontal, left & right   |
| y   | vertical, top & bottom   |
| 5   | 5px   |
| 10   | 10px   |
| 15  | 15px   |
| 20  | 20px   |
| 25  | 25px   |
| 30  | 30px   |

### Gap 元素

w-gap-[size]

```html
<div class="w-block">
  <p>w-gap-5</p>
  <p class="gap-bg w-gap-5"></p>
  <p>w-gap-10</p>
  <p class="gap-bg w-gap-10"></p>
  <p>w-gap-15</p>
  <p class="gap-bg w-gap-15"></p>
  <p>w-gap-20</p>
  <p class="gap-bg w-gap-20"></p>
  <p>w-gap-25</p>
  <p class="gap-bg w-gap-25"></p>
  <p>w-gap-30</p>
  <p class="gap-bg w-gap-30"></p>
</div>
```

### Padding/Margin

w-p[direction]-[size]/ w-m[direction]-[size]

Padding:

```html
<div class="w-block">
  <div class="class w-p-5">
    <span>w-p-5</span>
  </div>
  <div class="class w-p-10">
    <span>w-p-10</span>
  </div>
  <div class="class w-p-15">
    <span>w-p-15</span>
  </div>
  <div class="class w-p-20">
    <span>w-p-20</span>
  </div>
  <div class="class w-p-25">
    <span>w-p-25</span>
  </div>
  <div class="class w-p-30">
    <span>w-p-30</span>
  </div>
  <div class="class w-pt-30">
    <span>w-pt-30</span>
  </div>
  <div class="class w-pr-30">
    <span>w-pr-30</span>
  </div>
  <div class="class w-pb-30">
    <span>w-pb-30</span>
  </div>
  <div class="class w-pl-30">
    <span>w-pl-30</span>
  </div>
  <div class="class w-px-30">
    <span>w-px-30</span>
  </div>
  <div class="class w-py-30">
    <span>w-py-30</span>
  </div>
</div>


Margin:

<div class="w-block">
  <div class="margin-orange">
    <span class="w-m-5">w-m-5</span>
  </div>
  <div class="margin-orange">
    <span class="w-m-10">w-m-10</span>
  </div>
  <div class="margin-orange">
    <span class="w-m-15">w-m-15</span>
  </div>
  <div class="margin-orange">
    <span class="w-m-20">w-m-20</span>
  </div>
  <div class="margin-orange">
    <span class="w-m-25">w-m-25</span>
  </div>
  <div class="margin-orange">
    <span class="w-m-30">w-m-30</span>
  </div>
  <div class="margin-orange">
    <span class="w-mt-30">w-mt-30</span>
  </div>
  <div class="margin-orange">
    <span class="w-mr-20">w-mr-20</span>
  </div>
  <div class="margin-orange">
    <span class="w-mb-10">w-mb-10</span>
  </div>
  <div class="margin-orange">
    <span class="w-ml-30">w-ml-30</span>
  </div>
  <div class="margin-orange">
    <span class="w-mx-30">w-mx-30</span>
  </div>
  <div class="margin-orange">
    <span class="w-my-30">w-my-30</span>
  </div>
</div>
```
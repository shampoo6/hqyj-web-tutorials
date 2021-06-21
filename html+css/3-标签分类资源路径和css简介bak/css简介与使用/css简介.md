# css简介
## 什么是css?
css (cascading style sheet):

cascading: 级联（层叠），有点加的含义

style: 样式，风格，可以理解为元素的风格

sheet: 表，代表一种表状结构

## 作用？
如果把一个页面比作是一个人的话，那么html就相当于人的骨架，css就是皮肤。

所以说css的作用，就是决定元素的外观张什么样。

## 使用

### 三种引入样式的方式
1. 通过元素样式属性，使用css
2. 通过style标签，使用css
3. 通过外部文件，使用css

### 样式的具体写法
举例如下：
```css
.box1 {
    color: white;
    margin: 20px;
    padding: 20px;
    border: 4px solid red;
}
```

整个样式由两部分组成
- 第一部分：`.box1` 叫做css选择器，css选择器的作用是通过选择器可以选中html页面中的指定元素。
- 第二部分：选择器后的花括号部分，是我们的样式表，其中包括很多样式属性。

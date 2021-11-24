# json 对象
json 对象是js中的对象，且该对象的格式采用json的格式（js中也称为朴素对象 plain object）

## json JavaScript Object Notation （js 对象简谱）
json是一种js的轻量化交互式数据

json的格式：
- 根节点只能有一个
- json中用 "key": value 的方式定义属性，多个属性用逗号隔开
- 属性名必须用双引号包裹
- 属性值若为字符串，字符串必须用双引号包裹

## json 对象
json 对象采用json格式，但可以有一些省略的写法

完整写法
```js
let human = {
    "name": "张三",
    "age": 16,
    "是否已婚": false,
    "company": {
        "name": "hqyj"
    }
}
```

js中可以的写法：
```js
let human = {
    'name': '张三', // 字符串可以用单引号
    age: 16, // 若属性名不包含特数字符则可以省略引号
    "是否已婚": false,
    "company": {
        "name": "hqyj"
    }
}
```

若属性名和属性值的变量名相同则可以省略冒号后面的内容，如：
```js
let name = '张三'
let zhangSan = {
    // name: name // 完整写法
    name // 省略后的写法
}
```

若在json对象中声明函数，那么可以省略function关键字或lamda表达式的箭头
```js
let a = {
    // 完整写法如下
    // fn: ()=>{
    //     console.log('fn被调用了')
    // }

    // 省略写法
    fn() {
        console.log('fn被调用了')
    }
}
```
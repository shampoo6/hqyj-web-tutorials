# html 文件结构
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <div>hello world!!!</div>
        <img src="http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg"/>
    </body>
</html>
```
第一行 `<!DOCTYPE html>`: 声明文档类型，告诉浏览器文档的类型是什么
第二行 `html`: html 根
第三行 `head`: 编写页面上不会显示的内容
第四行 `body`: 编写页面上显示的内容

## 标签（节点）

### 什么是标签?
html文件中，所有尖括号包裹的部分就是标签，如：`html` `head` `body`

在html中，标签还有另一个称呼，叫做文档元素（document element）和节点（node）

名称是根据站的角度不同而不同。

### 标签的特点
- 有头有尾
- 标签头部包含标签的属性，属性由属性名和属性的值组成，例如：`<img src="1.png"/>` 中的 `src="1.png"` 部分就是标签属性
- 树状结构，有父节点子节点和兄弟节点
- 在标签的头尾中间部分，我们叫做标签体
- html 文本中，标签名和属性名都是小写的，如果一个名称由多个英文单词构成，那么单词之间用短横线隔开。（因为在html文档中，大小写不敏感）

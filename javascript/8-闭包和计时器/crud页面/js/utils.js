
// 获取元素的函数
// 参数是css选择器
function $(selector) {
    return document.querySelector(selector)
}

// 获取页面参数
function getParams() {
    let result = {}
    // index=0&name=1&age=12
    let search = location.search.substring(1)
    let splits = search.split('&')
    splits.forEach(el => {
        let s = el.split('=')
        result[s[0]] = s[1]
    })

    return result
}
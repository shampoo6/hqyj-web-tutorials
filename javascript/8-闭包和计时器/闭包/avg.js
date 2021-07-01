
let _sum = 0

// 求平均数
function avg(arr) {
    _sum = 0
    arr.forEach(num => {
        _sum += num
    })
    return _sum / arr.length
}
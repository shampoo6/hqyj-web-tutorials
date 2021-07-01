const sum = (() => {
    let _sum = 0
    return (arr) => {
        _sum = 0
        arr.forEach(num => {
            _sum += num
        })
        return _sum
    }
})()
// mapReduce 运算模型是拿来做大数据统计的
// 要统计出结果，需要经历 map 和 reduce 两个步骤
// 1. map 的作用 用于返回统计结果所需的数据结构
// 2. reduce 的作用就是具体的统计逻辑
// reduce api: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let arr = [
    {
        name: '李四666',
        score: 45,
        sex: 'female'
    },
    {
        name: '张三1',
        score: 45,
        sex: 'male'
    },
    {
        name: '李四1',
        score: 89,
        sex: 'female'
    },
    {
        name: '老王1',
        score: 48,
        sex: 'male'
    },
    {
        name: '张三2',
        score: 65,
        sex: 'female'
    },
    {
        name: '李四2',
        score: 32,
        sex: 'female'
    },
    {
        name: '老王2',
        score: 17,
        sex: 'male'
    }
]

// 1. 统计上述数组中不及格的人数
let r = arr.map(el => {
    return {
        count: el.score < 60 ? 1 : 0 // 构造一个作为结果的数据格式
    }
}).reduce((p, n) => {
    // reduce 参数 p 代表上次统计的结果， n 代表下一个成员
    p.count += n.count
    return p
})

console.log(r);

// 2. 按男女统计分数最低的两个人
r = arr.map(el => {
    let temp = {
        male: [],
        female: []
    }
    if (el.sex === 'male')
        temp.male.push(el)
    else
        temp.female.push(el)
    return temp
}).reduce((p, n) => {
    let sex = n.male.length > 0 ? 'male' : 'female' // 查找应该统计 男 还是 女 的数据
    // 判断 p 中对应性别的数据长度是否已经有2个了
    if (p[sex].length < 2) {
        // 若对应性别长度不足2
        p[sex].push(n[sex][0])
        return p
    } else {
        // 为了保证顺序 先进行降序排列
        p[sex].sort((el1, el2) => {
            return el2.score - el1.score
        })

        // 查找 p 中是否存在分数比 n 更高的数据
        let index = p[sex].findIndex(el => {
            return el.score > n[sex][0].score
        })

        // 若找到对应索引就替换成员
        if (index >= 0) {
            p[sex].splice(index, 1, n[sex][0])
        }

        return p
    }
})

console.log(r)
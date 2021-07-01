// database 模拟数据库的 js

// 利用匿名函数，返回一个闭包的数据库操作对象
const db = (() => {
    // 初始化数据库操作对象，获取localStorage中保存的数据
    let students = JSON.parse(localStorage['students']? localStorage['students']: '[]')
    students = students || [] // 用 students 或 空数组初始化

    return {
        // 获取学生列表
        list() {
            return students
        },
        // 保存函数
        // 参数是学生对象
        save(student) {
            students.push(student)
            localStorage['students'] = JSON.stringify(students)
        },
        // 编辑函数
        // index: 修改那个学生
        // student：新数据
        edit(index, student) {
            students[index] = student
            localStorage['students'] = JSON.stringify(students)
        },
        // 删除函数
        // index: 删除哪个学生
        remove(index) {
            students.splice(index, 1)
            localStorage['students'] = JSON.stringify(students)
        }
    }
})()

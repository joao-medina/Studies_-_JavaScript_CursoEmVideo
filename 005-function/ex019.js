function fat(n) {
    let res = 1
    for(n; n > 0; n--) {
        res *= n
    }
    return res
}

console.log(fat(5))
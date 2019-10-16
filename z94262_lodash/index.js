const _ = module.exports = {}

_.dropRight =  function(list, n=1) {
    const drlist = []
    //i<list.length-n  ->  如果長度為3，n為2的話  i<3-2=1 i=0 => [1]
    for(let i=0; i<list.length-n; i++) {
        drlist.push(list[i])
    }
    return drlist
}

_.tail = function(list) {
    const tlist = []
    let n = 1
    for(let i=n; i<list.length; i++) {
        tlist.push(list[i])
    }
    return tlist
}

_.sum = function(list) {
    var a = 0
    for(let i=0; i<list.length; i++) {
       a += list[i]
    }
    return a
}
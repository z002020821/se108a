const _ = module.exports = {}

/*
_.tail([1, 2, 3]);
// => [2, 3]
*/

_.tail = function(list) {
    const tlist = []
    let n = 1
    for(let i=n; i<list.length; i++) {
        tlist.push(list[i])
    }
    return tlist
}


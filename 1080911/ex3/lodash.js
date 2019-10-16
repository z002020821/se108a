const _ = module.exports = {}

/*
_.sum([4, 2, 8, 6]);
// => 20
*/

_.sum = function(list) {
    var a = 0
    for(let i=0; i<list.length; i++) {
       a += list[i]
    }
    return a
}
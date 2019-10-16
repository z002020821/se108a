var f1 = [0, 1]

function f (n) {
    if (n < 0) throw Error('f:n < 0')
    if(f1[n] != null) return f1[n]
    f1[n] = 3 * f(n - 1) + 2 * f(n - 2)
    return f1[n]
}

var startTime = Date.now()
console.log('f(30)=', f(30))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)
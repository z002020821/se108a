function f (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  if (n === 0) return 0
  if (n === 1) return 1

  let i = 1
  let j = 0

  for(let count = 2 ; count <= n ; count++) {
    var sum = 3 * i + 2 * j
    j = i
    i = sum
  }
  return i
}

console.log('f(30)=', f(30))



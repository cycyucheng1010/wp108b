var e2c = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 追: 'chase', 吃: 'eat' }

function mt (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var cword = e2c[eword]
    c.push(cword)
  }
  return c
}

var c = mt(process.argv.slice(2))
console.log(c)
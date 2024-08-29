const num1 = '100'

const res = num1.replace(/(\d)(?=(\d{3})+$)/g,'$1,')

console.log(res)
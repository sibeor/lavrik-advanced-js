function sum (a, b) {
  return a + b
}

function mult (a, b) {
  return a * b
}

function div (a, b) {
  return a / b
}

export function mathOp (a, b, op) {
  let res
  switch (op) {
    case '+':
      res = sum(a, b)
      break
    case '*':
      res = mult(a, b)
      break
    case '/':
      res = div(a, b)
      break
  }
  return res
}
const STORAGE_PROPABILITY = 0.8
const CALC_PROPABILITY = 0.7

function getItemsFromDB () {
  if (Math.random() > STORAGE_PROPABILITY) {
    throw new CalcError(`Storage Error: cant get items from DB`)
    // return null; // ошибка хранилища
  }
  
  return [
    { id: 5, price: 1000 },
    { id: 7, price: 2000 },
    { id: 8, price: 4000 }
  ]
}

function calcTotal (items) {
  if (Math.random() > CALC_PROPABILITY) {
    throw new CalcError(`Calc Error: cant get total of items`)
    // return null; // ошибка рассчёта
  }
  
  return items.reduce((total, item) => {
    return total + item.price
  }, 0)
}

function calcYearBalance (total) {
  if (Math.random() > CALC_PROPABILITY) {
    throw new CalcError(`Calc Error: cant get balance of total`)
    // return null; // ошибка рассчёта
  }
  
  return Math.floor(total * Math.random())
}

function main () {
  
  try {
    let items = getItemsFromDB()
    let total = calcTotal(items)
    let balance = calcYearBalance(total)
    document.body.innerHTML = `Nice! ${balance}`
  } catch (e) {
    document.body.innerHTML = `${e.message}`
  }
}

class CalcError extends Error {}

main()
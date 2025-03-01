const STORAGE_PROPABILITY = 0.6
const CALC_PROPABILITY = 0.7

function getItemsFromDB () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > STORAGE_PROPABILITY) {
        console.log('err getItemsFromDB')
        // throw new CalcError(`Storage Error: cant get items from DB`)
        // return null; // ошибка хранилища
        reject('`Storage Error: cant get items from DB`')
      }
      resolve([
        { id: 5, price: 1000 },
        { id: 7, price: 2000 },
        { id: 8, price: 4000 }
      ])
    }, 100)
  })
}

function calcTotal (items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > CALC_PROPABILITY) {
        console.log('err calcTotal')
        reject(`Calc Error: cant get total of items`)
        // throw new CalcError(`Calc Error: cant get total of items`)
        // return null; // ошибка рассчёта
        return
      }
      
      const res = items.reduce((total, item) => {
        return total + item.price
      }, 0)
      resolve(res)
    }, 100)
  })
}

function calcYearBalance (total) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > CALC_PROPABILITY) {
        console.log('err calcYearBalance')
        reject(`Calc Error: cant get balance of total`)
        return
        // throw new CalcError(`Calc Error: cant get balance of total`)
        // return null; // ошибка рассчёта
      }
      
      const tot = Math.floor(total * Math.random())
      resolve(tot)
    }, 100)
  })
}

function main () {
  getItemsFromDB().then((items) => {
    calcTotal(items).then(res => {
      calcYearBalance(res).then(balance => {
        document.body.innerHTML = `Nice! ${balance}`
      })
    })
  }).catch(err => showError(err))
  // getItemsFromDB((items) => {
  //   calcTotal(items, res => {
  //       calcYearBalance(res, balance => {
  //         document.body.innerHTML = `Nice! ${balance}`
  //       }, error1 => showError(error1))
  //     }, erMsg => showError(erMsg)
  //   )
  // }, er => {
  //   showError(er)
  // })
  // let total = calcTotal(items)
  // let balance = calcYearBalance(total)
  // document.body.innerHTML = `Nice! ${balance}`
}

function showError (msg) {
  console.log('showError')
  console.log(msg)
  console.log(document)
  document.body.innerHTML = `Err! ${msg}`
}

class CalcError extends Error {}

main()
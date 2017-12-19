import axios from 'axios'
export const getRates = async () => {
  const USDtoILSRate = await getUSDtoILSRate()
  let { data: rates } = await axios.get(
    'https://api.coinmarketcap.com/v1/ticker/?limit=15'
  )
  rates = rates.map(rate => ({
    ...rate,
    price_ils: (rate.price_usd * USDtoILSRate).toString()
  }))
  return rates
}
const getUSDtoILSRate = async () => {
  const { data: { rates: { ILS } } } = await axios.get(
    'https://api.fixer.io/latest?base=USD'
  )
  return ILS
}
//RECHECK

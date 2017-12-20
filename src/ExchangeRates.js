import axios from 'axios'
export const getRates = async () => {
  return (await axios.get(
    'https://api.coinmarketcap.com/v1/ticker/?convert=ILS&limit=22'
  )).data
}
export const getRate = async (currencyName, convertSymbol) => {
  return (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/${currencyName}/?convert=${
      convertSymbol
    }`
  )).data
}

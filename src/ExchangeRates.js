import axios from 'axios'
export const getRatesLimit = async limit => {
  return (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/?convert=ILS&limit=${limit}`
  )).data
}
export const getRate = async (currencyName, convertSymbol) => {
  return (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/${currencyName}/?convert=${
      convertSymbol
    }`
  )).data[0]
}

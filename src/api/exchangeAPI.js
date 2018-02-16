import axios from 'axios'
export const getRatesLimit = async limit => {
  return (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/?convert=ILS&limit=${limit}`
  )).data
}
export const getRate = async (depositCurrency, receiveCurrency) => {
  return (await axios.get(
    `https://flybucks-api-bpoiayjhed.now.sh/getexchangeamount/${
      depositCurrency.symbol
    }/${receiveCurrency.symbol}/1`
  )).data
}
export const getMinAmount = async (depositCurrency, receiveCurrency) => {
  return (await axios.get(
    `https://flybucks-api-bpoiayjhed.now.sh/getminamount/${depositCurrency}/${receiveCurrency}`
  )).data
}

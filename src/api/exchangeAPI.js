import axios from 'axios'
export const getRatesLimit = async limit =>
  (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/?convert=ILS&limit=${limit}`
  )).data

export const getRate = async (fromCurrency, toCurrency) =>
  (await axios.get(
    `https://flybucks-api.now.sh/exchangeAmount/${fromCurrency.symbol}/${
      toCurrency.symbol
    }/1`
  )).data

export const getMinAmount = async (fromCurrency, toCurrency) =>
  (await axios.get(
    `https://flybucks-api.now.sh/minAmount/${fromCurrency.symbol}/${
      toCurrency.symbol
    }`
  )).data

export const createTransaction = async (
  fromCurrency,
  toCurrency,
  recipientAddress,
  amount
) =>
  (await axios.post(
    `https://flybucks-api.now.sh/createtransaction/${fromCurrency.symbol}/${
      toCurrency.symbol
    }/${recipientAddress}/${amount}`
  )).data

import axios from 'axios'
export const getRatesLimit = async limit =>
  (await axios.get(
    `https://api.coinmarketcap.com/v1/ticker/?convert=ILS&limit=${limit}`
  )).data

export const getRate = async (depositCurrency, receiveCurrency) =>
  (await axios.get(
    `https://flybucks-api-zwzgisagaz.now.sh/getexchangeamount/${
      depositCurrency.symbol
    }/${receiveCurrency.symbol}/1`
  )).data

export const getMinAmount = async (depositCurrency, receiveCurrency) =>
  (await axios.get(
    `https://flybucks-api-zwzgisagaz.now.sh/getminamount/${depositCurrency}/${receiveCurrency}`
  )).data

export const createTransaction = async (
  depositCurrency,
  receiveCurrency,
  recipientAddress,
  amount
) =>
  (await axios.post(
    `https://flybucks-api-zwzgisagaz.now.sh/createtransaction/${depositCurrency}/${receiveCurrency}/${recipientAddress}/${amount}`
  )).data

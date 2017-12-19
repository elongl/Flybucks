import axios from 'axios'
const defaultCurrencies = [
  'BTC',
  'ETH',
  'DASH',
  'XMR',
  'XRP',
  'LTC',
  'DOGE',
  'ZEC'
]

export const getTickers = async (currencies = defaultCurrencies) => {
  const USDtoILSRate = await getUSDtoILSRate()
  let tickers = await Promise.all(
    currencies.map(currency =>
      axios.get(`https://api.cryptonator.com/api/ticker/${currency}-USD`)
    )
  )
  tickers = tickers.map(ticker => ticker.data.ticker)
  tickers = tickers.map(ticker => ({
    ...ticker,
    target: 'ILS',
    price: ticker.price * USDtoILSRate,
    change: ticker.change * USDtoILSRate
  }))
  return tickers
}
const getUSDtoILSRate = async () => {
  const { data: { quotes: { USDILS } } } = await axios.get(
    'http://www.apilayer.net/api/live?access_key=acafc0bb45eef112ab535b81dfc1116b'
  )
  return USDILS
}

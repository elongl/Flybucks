import { observable } from 'mobx'
import { digitsAfterDot } from './pureFunctions'
import * as exchangeRates from './api/exchangeRates'
class Store {
  @observable authenticated = undefined
  @observable deposit = { value: '', currency: undefined }
  @observable receive = { value: '', currency: undefined }
  @observable currencyList = { deposit: undefined, receive: undefined }
  @observable rate = undefined

  changeValue(value) {
    this.deposit.value = value
    this.receive.value = digitsAfterDot(value / this.rate, 6)
  }
  changeAuthState(authState) {
    this.authenticated = authState
  }
  async changeCurrency(currencyObject, currencyType) {
    this.receive.value = '...'
    this[currencyType].currency = currencyObject
    await this.updateRate()
    this.receive.value = digitsAfterDot(this.deposit.value / this.rate, 6)
  }

  async updateRate() {
    const rate = await exchangeRates.getRate(
      this.receive.currency.value,
      this.deposit.currency.key
    )
    this.rate = rate[`price_${this.deposit.currency.key.toLowerCase()}`]
  }

  async setCurrencies() {
    const currencies = [{ key: 'ILS', text: 'ILS', value: 'shekel' }]
    const currencyList = await exchangeRates.getRatesLimit(16)
    currencyList.map(currency =>
      currencies.push({
        key: currency.symbol,
        text: currency.symbol,
        value: currency.id
      })
    )
    this.currencyList.deposit = currencies.slice(0)
    this.currencyList.receive = currencies.slice(1)
    this.deposit.currency = currencies[0]
    this.receive.currency = currencies[1]
  }
}
export default new Store()

import { observable } from 'mobx'
import { digitsAfterDot } from './pureFunctions'
import * as exchangeRates from './api/exchangeRates'
class Store {
  @observable deposit = { value: '', currency: undefined }
  @observable receive = { value: '', currency: undefined }
  @observable currencyList = { deposit: undefined, receive: undefined }
  @observable rate = undefined

  changeValue(value) {
    this.deposit.value = value
    this.receive.value = digitsAfterDot(value / this.rate, 6)
  }

  async changeCurrency(currencyObject, currencyType) {
    this.receive.value = '...'

    this[currencyType].currency = currencyObject
    await this.updateRate()
    this.receive.value = digitsAfterDot(this.deposit.value / this.rate, 6)
  }

  async updateRate() {
    const rate = await exchangeRates.getRate(
      this.receive.currency.id,
      this.deposit.currency.symbol
    )
    this.rate = rate[`price_${this.deposit.currency.symbol.toLowerCase()}`]
  }

  async setCurrencies() {
    const currencies = [{ id: 'shekel', name: 'Shekel', symbol: 'ILS' }]
    const currencyList = await exchangeRates.getRatesLimit(16)
    currencyList.map(currency => currencies.push(currency))
    this.currencyList.deposit = currencies.slice(0)
    this.currencyList.receive = currencies.slice(1)
    this.deposit.currency = currencies[0]
    this.receive.currency = currencies[1]
  }
}
export default new Store()

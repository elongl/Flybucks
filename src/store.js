import { observable } from 'mobx'
import { digitsAfterDot } from './pureFunctions'
import * as exchangeAPI from './api/exchangeAPI'
class Store {
  @observable from = { value: '', currency: undefined }
  @observable to = { value: '', currency: undefined }
  @observable currencyList = undefined
  @observable rate = undefined
  @observable recipientAddress = ''
  @observable transactionInformation = undefined

  changeValue(value) {
    this.from.value = value
    this.to.value = digitsAfterDot(value * this.rate)
  }

  async changeCurrency(currencyObject, currencyType) {
    if (currencyObject === this[currencyType].currency) return undefined
    this.to.value = '...'
    if (
      (currencyType === 'from' && currencyObject === this.to.currency) ||
      (currencyType === 'to' && currencyObject === this.from.currency)
    ) {
      ;[this.from.currency, this.to.currency] = [
        this.to.currency,
        this.from.currency
      ]
      this.rate = 1 / this.rate
    } else {
      this[currencyType].currency = currencyObject
      await this.updateRate()
    }
    this.to.value = digitsAfterDot(this.from.value * this.rate)
  }

  async updateRate() {
    this.rate = (await exchangeAPI.getRate(
      this.from.currency,
      this.to.currency
    )).result
  }

  async setCurrencies() {
    this.currencyList = await exchangeAPI.getRatesLimit(16)
    this.from.currency = this.currencyList[0]
    this.to.currency = this.currencyList[1]
  }
}
export default new Store()

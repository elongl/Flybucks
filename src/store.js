import { observable } from 'mobx'
import { digitsAfterDot } from './pureFunctions'
import * as exchangeAPI from './api/exchangeAPI'
class Store {
  @observable deposit = { value: '', currency: undefined }
  @observable receive = { value: '', currency: undefined }
  @observable currencyList = undefined
  @observable rate = undefined
  @observable recipientAddress = ''
  @observable transactionInformation = undefined

  changeValue(value) {
    this.deposit.value = value
    this.receive.value = digitsAfterDot(value * this.rate, 6)
  }

  async changeCurrency(currencyObject, currencyType) {
    this.receive.value = '...'
    if (
      (currencyType === 'deposit' &&
        currencyObject === this.receive.currency) ||
      (currencyType === 'receive' && currencyObject === this.deposit.currency)
    )
      [this.deposit.currency, this.receive.currency] = [
        this.receive.currency,
        this.deposit.currency
      ]
    else this[currencyType].currency = currencyObject
    await this.updateRate()
    this.receive.value = digitsAfterDot(this.deposit.value * this.rate, 6)
  }

  async updateRate() {
    this.rate = (await exchangeAPI.getRate(
      this.deposit.currency,
      this.receive.currency
    )).result
  }

  async setCurrencies() {
    this.currencyList = await exchangeAPI.getRatesLimit(16)
    this.deposit.currency = this.currencyList[0]
    this.receive.currency = this.currencyList[1]
  }
}
export default new Store()

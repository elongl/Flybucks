import React from 'react'
import { Dropdown, Input, Image, Icon } from 'semantic-ui-react'

export default class extends React.Component {
  state = { filter: '', open: false }

  closeDropdownListener = () => this.setState({ open: false })

  componentWillMount = () =>
    window.addEventListener('click', this.closeDropdownListener)

  componentWillUnmount = () =>
    window.removeEventListener('click', this.closeDropdownListener)

  render() {
    const { props, state } = this
    const { currencyList } = props
    return (
      <Dropdown
        pointing="top right"
        text={props.chosenCurrency && props.chosenCurrency.symbol}
        icon={
          <Icon
            style={{ marginLeft: '0.5rem', color: '#faa61a' }}
            name="angle down"
          />
        }
        open={state.open}
        onClick={() =>
          this.setState({ open: !state.open }, () => this.inputRef.focus())
        }
      >
        <Dropdown.Menu style={{ marginTop: '1.5rem' }}>
          <Input
            value={state.filter}
            ref={ref => (this.inputRef = ref)}
            style={{ margin: 0, padding: 0, width: 250 }}
            placeholder="Search..."
            icon="search"
            iconPosition="left"
            onChange={event => this.setState({ filter: event.target.value })}
            onClick={event => event.stopPropagation()}
          />
          <Dropdown.Menu scrolling>
            {currencyList !== undefined &&
              currencyList
                .filter(
                  currency =>
                    currency.symbol
                      .toUpperCase()
                      .includes(state.filter.toUpperCase()) ||
                    currency.name
                      .toUpperCase()
                      .includes(state.filter.toUpperCase())
                )
                .map(currency => (
                  <Dropdown.Item
                    currency={currency}
                    key={currency.id}
                    onClick={(event, data) => {
                      props.onChangeCurrency(data.currency, props.type)
                      this.setState({ filter: '' })
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <b style={{ width: 70, fontSize: 18 }}>{currency.symbol}</b>
                    <Image src={`/assets/cryptoicons/${currency.symbol}.svg`} />
                    <span
                      style={{
                        color: 'gray',
                        fontSize: 16,
                        width: 90
                      }}
                    >
                      {currency.name}
                    </span>
                  </Dropdown.Item>
                ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

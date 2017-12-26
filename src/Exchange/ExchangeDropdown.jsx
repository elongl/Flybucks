import React from 'react'
import { Dropdown, Input, Image, Icon } from 'semantic-ui-react'
import bitcoin from '../assets/bitcoin.svg'

const capitalizeFirstLetter = word =>
  word.charAt(0).toUpperCase() + word.slice(1)

export default class extends React.Component {
  state = { filter: '', open: false }

  eventListener = event => {
    this.setState({ open: false })
  }
  componentDidMount = () => {
    window.addEventListener('click', this.eventListener)
  }
  componentWillUnmount = () => {
    window.removeEventListener('click', this.eventListener)
  }
  render() {
    const { props, state } = this
    const { currencies } = props
    return (
      <Dropdown
        pointing="top right"
        text={props.chosenCurrency && props.chosenCurrency.key}
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
            value={this.state.filter}
            ref={ref => (this.inputRef = ref)}
            style={{ margin: 0, padding: 0, width: 250 }}
            placeholder="Search..."
            icon="search"
            iconPosition="left"
            onChange={event => this.setState({ filter: event.target.value })}
            onClick={event => event.stopPropagation()}
          />
          <Dropdown.Menu scrolling style={{ height: 250 }}>
            {currencies !== undefined &&
              currencies
                .filter(
                  currency =>
                    currency.value
                      .toUpperCase()
                      .includes(state.filter.toUpperCase()) ||
                    currency.text
                      .toUpperCase()
                      .includes(state.filter.toUpperCase())
                )
                .map(currency => (
                  <Dropdown.Item
                    currency={currency}
                    key={currency.key}
                    onClick={(event, data) => {
                      props.onChangeCurrency(data.currency, props.type)
                      this.setState({ filter: '' })
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <b style={{ width: 70, fontSize: 18 }}>{currency.text}</b>
                    <Image src={bitcoin} />
                    <span
                      style={{
                        color: 'gray',
                        fontSize: 16,
                        width: 90
                      }}
                    >
                      {capitalizeFirstLetter(currency.value)}
                    </span>
                  </Dropdown.Item>
                ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

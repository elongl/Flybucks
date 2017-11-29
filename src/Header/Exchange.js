import React, { Component } from "react";
import axios from "axios";
import { Container, Button, Input, Label, Icon } from "semantic-ui-react";
export default class extends Component {
  state = {
    youGive: "",
    youGet: "",
    ILStoBTC: ""
  };

  componentDidMount = () => {
    this.getCurrentRate();
    this.youGive.focus();
  };
  getCurrentRate = async () => {
    let { data: { quotes } } = await axios.get(
      "http://www.apilayer.net/api/live?access_key=acafc0bb45eef112ab535b81dfc1116b"
    );
    this.setState({ ILStoBTC: 1 / quotes.USDILS * quotes.USDBTC });
  };
  handleExchangeFromILStoBTC = event => {
    const { ILStoBTC } = this.state;
    const give = event.target.value;
    const get = give * ILStoBTC;
    this.setState({ youGive: give, youGet: get });
  };
  handleExchangeFromBTCtoILS = event => {
    const BTCtoILS = Math.pow(this.state.ILStoBTC, -1);
    const get = event.target.value;
    const give = get * BTCtoILS;
    this.setState({ youGet: get, youGive: give });
  };
  checkIfNumber = event => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault();
  };

  render() {
    return (
      <Container style={{ paddingTop: "2em" }}>
        <Input
          labelPosition="right"
          placeholder="You Give"
          size="huge"
          style={{
            marginRight: "0.5em",
            opacity: 0.9,
            color: "#FFFF00"
          }}
          value={this.state.youGive}
          ref={ref => (this.youGive = ref)}
          onChange={this.handleExchangeFromILStoBTC}
          onKeyPress={this.checkIfNumber}
        >
          <Label basic content="ILS" />
          <input />
          <Label icon="shekel" />
        </Input>

        <Icon
          name="exchange"
          size="big"
          style={{ color: "lightGreen", marginBottom: 10 }}
        />

        <Input
          labelPosition="right"
          placeholder="You Get"
          size="huge"
          style={{ marginLeft: "0.5em", marginRight: "1em", opacity: 0.9 }}
          value={this.state.youGet}
          onChange={this.handleExchangeFromBTCtoILS}
          onKeyPress={this.checkIfNumber}
        >
          <Label basic content="BTC" />
          <input />
          <Label icon="bitcoin" />
        </Input>

        <Button
          content="Exchange"
          icon="right arrow"
          labelPosition="right"
          size="huge"
          color="green"
          style={{
            paddingTop: "0.9em",
            paddingBottom: "0.9em"
          }}
          onClick={() => window.alert(this.state.ILStoBTC)}
        />
      </Container>
    );
  }
}

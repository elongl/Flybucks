import React, { Component } from "react";
import axios from "axios";
import { Container, Button, Input, Label, Icon } from "semantic-ui-react";

// Components
const Field = props => (
  <Input
    labelPosition="right"
    placeholder={props.placeholder}
    size="huge"
    style={props.style}
    value={props.value}
    onChange={props.onChange}
    onKeyPress={this.checkIfNumber}
  >
    <Label basic content={props.content} />
    <input />
    <Label icon={props.icon} />
  </Input>
);
export default class extends Component {
  state = {
    youGive: "",
    youGet: "",
    ILStoBTC: ""
  };

  componentDidMount = () => {
    this.getCurrentRate();
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
        <Field
          placeholder="You Give"
          value={this.state.youGive}
          onChange={this.handleExchangeFromILStoBTC}
          content="ILS"
          icon="shekel"
          style={{
            marginRight: "0.5em",
            opacity: 0.9,
            color: "#FFFF00"
          }}
        />

        <Icon
          name="exchange"
          size="big"
          style={{ color: "lightGreen", marginBottom: 10 }}
        />
        <Field
          placeholder="You Get"
          value={this.state.youGet}
          onChange={this.handleExchangeFromBTCtoILS}
          content="BTC"
          icon="bitcoin"
          style={{
            marginLeft: "0.5em",
            marginRight: "1em",
            opacity: 0.9
          }}
        />

        <Button
          labelPosition="right"
          content="Exchange"
          icon="right arrow"
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

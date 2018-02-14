import React, { Component } from 'react'
import { Segment, Card, Icon, Container, Image } from 'semantic-ui-react'
const reviews = [
  {
    header: 'Elon Gliksberg',
    meta: 'Fullstack Developer',
    description:
      'Flybucks is very attractive to the user. It is simple and plays its part in the industry.',
    exchangeCount: 159,
    image: '/assets/images/elon-gliksberg.jpg'
  },
  {
    header: 'Tom Henkins',
    meta: 'Financial Advisor',
    description:
      'With this trustworthy website, I’m exchanging with confidence all the time.',
    exchangeCount: 232,
    image: '/assets/images/tom-henkins.jpg'
  },
  {
    header: 'Pattrick Stewart',
    meta: 'Product Designer',
    description:
      'The user experience really feels like magic. Now I can finally exchange simply.',
    exchangeCount: 213,
    image: '/assets/images/pattrick-stewart.png'
  },
  {
    header: 'Steve Jobs',
    meta: 'CEO at Apple',
    description:
      'Why do I only hear about Flybucks now? I would have invested earlier.',
    exchangeCount: 59,
    image: '/assets/images/steve-jobs.png'
  }
]

export default class extends Component {
  state = { hover: false }
  render() {
    return (
      <Segment
        textAlign="center"
        style={{
          background: 'linear-gradient(-45deg,#ff9966,#ff5e62)',
          paddingBottom: '10rem',
          paddingTop: '2rem'
        }}
        vertical
      >
        <h2
          style={{
            margin: '2.5rem 0',
            fontFamily: 'Montserrat',
            color: 'white',
            fontSize: 33
          }}
        >
          What people are saying
        </h2>
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 1550
          }}
        >
          <Icon
            onMouseOver={() => this.setState({ hover: true })}
            onMouseOut={() => this.setState({ hover: false })}
            circular={this.state.hover}
            size="huge"
            name="angle left"
            style={{ color: '#fff', cursor: 'pointer', width: '2em' }}
          />
          <Container
            style={{
              width: 1300,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {reviews.map(customer => (
              <div className="reviewCard" key={customer.header}>
                <Card
                  link
                  raised
                  style={{ cursor: 'default', margin: '1em' }}
                  header={customer.header}
                  meta={customer.meta}
                  description={customer.description}
                  image={
                    <Image src={customer.image} height={290} width={290} />
                  }
                  extra={
                    <a
                      onClick={() =>
                        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
                      }
                    >
                      <Icon name="exchange" />
                      {customer.exchangeCount} Exchanges
                    </a>
                  }
                />
              </div>
            ))}
          </Container>
          <Icon
            onMouseOver={() => this.setState({ hover: true })}
            onMouseOut={() => this.setState({ hover: false })}
            circular={this.state.hover}
            size="huge"
            name="angle right"
            style={{ color: '#fff', cursor: 'pointer', width: '2em' }}
          />
        </Container>
      </Segment>
    )
  }
}

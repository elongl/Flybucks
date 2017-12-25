import React from 'react'
import { Segment, Card, Icon, Container } from 'semantic-ui-react'
import elon_gliksberg from '../assets/elon-gliksberg.jpg'
import tom_henking from '../assets/tom-henkins.jpg'
import pattrick_stewart from '../assets/pattrick-stewart.png'
import steve_jobs from '../assets/steve-jobs.png'

const team = [
  {
    header: 'Elon Gliksberg',
    meta: 'Fullstack Developer',
    description: 'Elon is the creator of Flybucks.',
    exchangeCount: 159,
    image: elon_gliksberg
  },
  {
    header: 'Tom Henkins',
    meta: 'Financial Advisor',
    description: 'Tom is the financial advisor of the company.',
    exchangeCount: 232,
    image: tom_henking
  },
  {
    header: 'Pattrick Stewart',
    meta: 'Product Designer',
    description: 'Pattrick is head of design at Flybucks.',
    exchangeCount: 213,
    image: pattrick_stewart
  },
  {
    header: 'Steve Jobs',
    meta: 'Secretary',
    description: 'Steve founded Apple and now works for us.',
    exchangeCount: 59,
    image: steve_jobs
  }
]

export default () => (
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
        padding: '2.5rem 0',
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize: 33
      }}
    >
      Meet Our Team
    </h2>
    <Container
      style={{
        width: 1300,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      {team.map(employee => (
        <Card
          style={{ margin: '1rem 1rem', padding: 0 }}
          key={employee.header}
          header={employee.header}
          meta={employee.meta}
          description={employee.description}
          image={employee.image}
          extra={
            <a
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: 'smooth' })
              }
            >
              <Icon name="exchange" />
              {employee.exchangeCount} Exchanges
            </a>
          }
        />
      ))}
    </Container>
  </Segment>
)

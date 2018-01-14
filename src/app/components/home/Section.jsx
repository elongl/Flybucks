import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'
import FloatingContainer from '../common/FloatingContainer'
export const SectionHeader = ({ children }) =>
  <Header as="h3" style={{ fontSize: '2rem' }}>{ children }</Header>
export const SectionParagraph = ({ children }) => <p style={{ fontSize: '1.33rem' }}>
  { children }
</p>
export const SectionContent = ({ centered, floatingImage, image, children }) =>
  <Grid.Row>
    <Grid.Column { ...(centered ? { width: 5 } : {}) }>
      { children }
    </Grid.Column>
    <Grid.Column { ...(centered ? { width: 4 } : {}) }>
      {
        floatingImage
          ? <FloatingContainer>
              <Image src={image} />
            </FloatingContainer>
          : <Image src={image} />
      }
    </Grid.Column>
  </Grid.Row>

export const CenteredSection = ({ children }) =>
  <Segment style={{ padding: '2rem' }} vertical>
    <Grid centered stackable verticalAlign="middle">
      { children }
    </Grid>
  </Segment>
export const Section = ({ children }) =>
  <Segment style={{ padding: '5rem' }} vertical>
    <Grid container stackable verticalAlign="middle" columns="equal">
      { children }
    </Grid>
  </Segment>

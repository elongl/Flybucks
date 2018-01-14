import React from 'react'
import { Image, Header, Segment, Button } from 'semantic-ui-react'
import FullPageContainer from './FullPageContainer'
import { withRouter } from 'react-router-dom'

const removeStaticContext = props => {
  const newProps = { ...props }
  delete newProps.staticContext
  return newProps
}
const ReturnButton = withRouter(props => {
  console.log(props.history)
  return (
    <Button
      {...removeStaticContext(props)}
      onClick={() => props.history.goBack()}
      content={`Return to ${props.history.location.pathname}`}
    />
  )
})

export default ({ header, description, previousPage }) => (
  <FullPageContainer>
    <Segment
      raised
      style={{
        width: 950,
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image src={'/assets/images/warning.svg'} size="large" />
      <Header style={{ marginTop: '3rem' }}>{header}</Header>
      <ReturnButton
        labelPosition="right"
        icon="right arrow"
        size="big"
        style={{
          color: 'white',
          backgroundColor: '#faa61a'
        }}
      />
    </Segment>
  </FullPageContainer>
)

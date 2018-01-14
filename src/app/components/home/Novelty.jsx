import React from 'react'
import { SectionHeader, SectionParagraph, SectionContent, CenteredSection } from './Section'
import BackToTopDivider from './BackToTopDivider'

export default () => (
  <CenteredSection>
    <SectionContent centered image="/assets/images/notifications.svg">
      <SectionHeader>Why Flybucks?</SectionHeader>
      <SectionParagraph>
        We provide individuals and businesses a world class experience to
        exchange cryptos and digital tokens. Flybucks is the go-to spot for
        traders who demand lightning fast exchange execution, and best
        security practices. Whether you are new to cryptocurrencies, or a
        veteran, Flybucks was created for you!
      </SectionParagraph>
    </SectionContent>
    <BackToTopDivider />
    <SectionContent centered image="/assets/images/cryptocurrencies.svg">
      <SectionHeader>Today's Money. Cryptocurrencies.</SectionHeader>
      <SectionParagraph>
        Cryptocurrencies are digital gold. Money that promises to preserve
        and increase its value over time. Cryptos are also a fast and
        comfortable means of payment with a worldwide scope, private and
        anonymous. It{"'"}s time to ditch paper money. Cryptocurrencies.
      </SectionParagraph>
    </SectionContent>
  </CenteredSection>
)

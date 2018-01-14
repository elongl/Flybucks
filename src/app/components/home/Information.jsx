import React from 'react'
import { SectionHeader, SectionParagraph, SectionContent, Section } from './Section'

export default () => (
  <Section>
    <SectionContent floatingImage image="/assets/images/globe.svg">
      <SectionHeader>
        Start Your Afilliate Program Today
      </SectionHeader>
      <SectionParagraph>
        If you have a business and you wish to accept Bitcoin as a payment
        option, while keeping your books in Shekel Dollar or Euro, we offer
        a Checkout with Bitcoin service for stores and online stores.
      </SectionParagraph>
      <SectionHeader>
        The Future Is Already Here
      </SectionHeader>
      <SectionParagraph>
        Fair. Trustworthy. Instant. Our rates are the most competitive in
        Israel. We support same day Wire transfers, Cash transfers, with a
        layout of over 150 branches, operate a Bitcoin ATM and offer you to
        purchase your Bitcoins using a Credit Card.
      </SectionParagraph>
    </SectionContent>
  </Section>
)

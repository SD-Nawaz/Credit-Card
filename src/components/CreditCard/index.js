// Write your code here
import {useState} from 'react'

import {
  CreditCardContainer,
  CardContainer,
  CardDetails,
  Heading,
  HorizontalLine,
  CardNameHeading,
  CardName,
  CardNumber,
  InputContainer,
  InputDetails,
  CardNumberInput,
  CardNameInput,
  PaymentMethodHeading,
} from './styledComponents'

const CreditCard = () => {
  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const onChangeCardholderName = event => {
    setCardholderName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardDetails data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardNameHeading>CARDHOLDER NAME</CardNameHeading>
          <CardName>{cardholderName}</CardName>
        </CardDetails>
      </CardContainer>
      <InputContainer>
        <InputDetails>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
            value={cardNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardholderName}
            value={cardholderName}
          />
        </InputDetails>
      </InputContainer>
    </CreditCardContainer>
  )
}

export default CreditCard

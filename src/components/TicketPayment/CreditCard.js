import React from 'react';
import Cards from 'react-credit-cards-2';
import styled from 'styled-components';
import 'react-credit-cards-2/es/styles-compiled.css';
import { postPayment } from '../../services/paymentsApi';
import { toast } from 'react-toastify';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const ticket = this?.props?.ticket;
    const body = {
      ticketId: ticket?.id,
      cardData: {
        issuer: 'visa',
        number: this?.state?.number,
        name: this?.state?.name,
        expirationDate: this?.state?.expiry,
        cvv: this?.state?.cvv,
      },
    };
    postPayment(this?.props?.token, body).then((res) => {
      this?.props?.setTicket({ ...ticket, status: 'PAID' });
      toast('Pagamento realizado com sucesso!');
    }).catch (err => {
      toast('Algo deu errado com o pagamento!');
    });
  };

  render() {
    return (
      <Container>
        <CreditCardContainer>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            required
          />
        </CreditCardContainer>

        <CreditCardForm onSubmit={this.handleSubmit}>
          <CreditCardInput
            type="tel"
            name="number"
            minLength={16}
            maxLength={16}
            placeholder="Card Number"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></CreditCardInput>

          <CreditCardInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          ></CreditCardInput>

          <DateAndCvcContainer>
            <CreditCardDate
              type="text"
              name="expiry"
              pattern="(0[1-9]|1[0-2])((2[3-9])|([3-9][0-9]))"
              minLength={4}
              maxLength={4}
              required
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            ></CreditCardDate>

            <CreditCardCVC
              type="tel"
              name="cvc"
              minLength={3}
              maxLength={3}
              placeholder="CVC"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            ></CreditCardCVC>
          </DateAndCvcContainer>
          <HiddenButtom type="submit" id="submit-form"></HiddenButtom>
        </CreditCardForm>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CreditCardContainer = styled.div`
  display: flex;
  height: 100%;
  .rccs__card {
    height: 100%;
    width: auto;
  }
`;
const CreditCardForm = styled.form`
  height: 100%;
  margin-left: 20px;
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const CreditCardInput = styled.input`
  border-radius: 5px;
  border: 1px solid #222;
  padding: 10px;
  outline: none;
  height: 35px;
  width: 100%;
`;

const DateAndCvcContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreditCardDate = styled.input`
  border-radius: 5px;
  border: 1px solid #222;
  padding: 10px;
  outline: none;
  height: 35px;
  width: 60%;
`;

const CreditCardCVC = styled.input`
  border-radius: 5px;
  border: 1px solid #222;
  padding: 10px;
  outline: none;
  height: 35px;
  margin-left: 20px;
  width: 30%;
`;
const HiddenButtom = styled.button`
  display: none;
`;

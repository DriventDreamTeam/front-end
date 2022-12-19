import React from 'react';
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';

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
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
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
          />
        </CreditCardContainer>
       
        <CreditCardForm>
        	<CreditCardInput type="tel"
            name="number"
            minLength={16}
            maxLength={16}
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}>
          </CreditCardInput>

          <CreditCardInput type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}>
          </CreditCardInput>

          <DateAndCvcContainer>
            <CreditCardDate        type="tel"
              name="expiry"
              minLength={4}
              maxLength={4}
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFoc
              us={this.handleInputFocus}>
            </CreditCardDate>

            <CreditCardCVC           type="tel"
              name="cvc"
              minLength={3}
              maxLength={3}
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}>
            </CreditCardCVC>

          </DateAndCvcContainer>
        </CreditCardForm>
      </Container>
    );
  }
};

const Container = styled.div`
display:flex;
align-items:center;
    `;
const CreditCardContainer = styled.div`
display:flex;
`;
const CreditCardForm = styled.form`
margin-left:20px;
display:flex;
width:40%;
flex-direction:column;
justify-items:center;
align-items:center;
`;
const CreditCardInput = styled.input`
margin-bottom:20px;
border-radius:5px;
border:1px solid #222;
padding:10px;
outline: none;
height: 30px;
width: 100%;
`;

const DateAndCvcContainer = styled.div`
display:flex;
justify-content:space-between
`;

const CreditCardDate = styled.input`
margin-bottom:15px;
border-radius:5px;
border:1px solid #222;
padding:10px;
outline: none;
height: 30px;
width: 60%;
`;

const CreditCardCVC = styled.input`
margin-bottom:15px;
border-radius:5px;
border:1px solid #222;
padding:10px;
outline: none;
height: 30px;
margin-left:20px;
width: 30%;
`;

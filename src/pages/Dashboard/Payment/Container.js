import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import PaymentForm from './CreditCard';
import getTicketType from './getTicketType';
import { CheckmarkCircle } from 'react-ionicons';

export default function Container({ ticket, setTicket }) {
  let ticketData= {};
  const { userData } = useContext(UserContext);
  if(ticket) {
    ticketData= getTicketType(ticket);
  }
  return (
    <>
      <PageTitle>
        Ingresso e pagamento
      </PageTitle>
      <TicketTitle>
        Ingresso escolhido
      </TicketTitle>
      <TicketTypeContainer>
        <TicketTypeName>
          {ticketData?.title}
        </TicketTypeName>
        <TicketTypePrice>
          R$ {ticketData?.price}
        </TicketTypePrice>
      </TicketTypeContainer>
      <TicketTitle>
         Pagamento
      </TicketTitle>
      <CreditCardContainer>
        {ticket?.status!== 'PAID'? 
          <PaymentForm token={userData?.token} ticket={ticket} setTicket={setTicket}></PaymentForm> :
          <SucessPaymentContainer>
            <CheckmarkCircle
              color={'#36B853'} 
              title={'check'}
              height="41px"
              width="41px"
            />
            <SucessPaymentTextContainer>
              <TextSucessPaymentConfirmation>
                Pagamento confirmado!
              </TextSucessPaymentConfirmation>
              <TextSucessPaymentInstructions>
                Prossiga para escolha de hospedagem e atividades
              </TextSucessPaymentInstructions>
            </SucessPaymentTextContainer>
          </SucessPaymentContainer>
        }
      </CreditCardContainer>
      {ticket?.status!== 'PAID'? <ButtomLabel htmlFor='submit-form' tabindex="0">
       FINALIZAR PAGAMENTO
      </ButtomLabel> : ''}
    
    </>
  );
};

const PageTitle = styled.h1`
font-family: Roboto;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
color: #000000;
margin-bottom:15px;
`;

const TicketTitle = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
`;

const TicketTypeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 108px;
width: 290px;
border-radius: 20px;
background-color: #FFEED2;
margin-top:17px;
margin-bottom:15px;
`;

const TicketTypeName = styled.h2`
margin-top:36px;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #454545;
`;
const TicketTypePrice = styled.h2`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: #8E8E8E;
margin-top:8px;
`;

const CreditCardContainer = styled.div`
margin-top:21px;    
border-radius: 4px;
height:160px;
max-height:100x;
`;

const ButtomLabel = styled.label`
display:inline-block;
margin-top:20px;
height: 37px;
width: 182px;
border-radius: 4px;
padding:12px;
box-shadow: 0px 2px 10px 0px #00000040;
background: #E0E0E0;
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;

`;
const SucessPaymentContainer = styled.div`
display:flex;
`;
const SucessPaymentTextContainer = styled.div`
margin-left:14px;
display:flex;
flex-direction:column;
justify-content:center;
`;

const TextSucessPaymentConfirmation = styled.h1`
font-family: Roboto;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
`;

const TextSucessPaymentInstructions = styled.h1`
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
`;

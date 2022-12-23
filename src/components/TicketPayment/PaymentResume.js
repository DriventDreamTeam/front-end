import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import getTicketType from './getTicketType';
import PaymentForm from './CreditCard';
import { Title } from '../utils';
import SucessPayment from './SucessPayment';
import FinishPaymentButtom from './FinishPaymentButtom';
import { Subtitle } from '../utils';

export default function PaymentResume({ ticket, setTicket }) {
  let ticketData = {};
  const { userData } = useContext(UserContext);
  if (ticket.length!==0) {
    ticketData = getTicketType(ticket);
  }
  return (
    <>
      <Title variant="h4">Ingresso e Pagamento</Title>
      <Subtitle>Ingresso escolhido</Subtitle>
      <TicketTypeContainer>
        <TicketTypeName>{ticketData?.title}</TicketTypeName>
        <TicketTypePrice>R$ {ticketData?.price}</TicketTypePrice>
      </TicketTypeContainer>
      <Subtitle>Pagamento</Subtitle>
      <CreditCardContainer>
        {ticket?.status !== 'PAID' ? (
          <PaymentForm token={userData?.token} ticket={ticket} setTicket={setTicket}></PaymentForm>) : (
          <SucessPayment> </SucessPayment> )}
      </CreditCardContainer>
      {ticket?.status !== 'PAID' ? <FinishPaymentButtom></FinishPaymentButtom>: ''}
    </>
  );
}
const TicketTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 108px;
  width: 290px;
  border-radius: 20px;
  background-color: #ffeed2;
  margin-top: 17px;
  margin-bottom: 15px;
`;

const TicketTypeName = styled.h2`
  margin-top: 36px;
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
  color: #8e8e8e;
  margin-top: 8px;
`;

const CreditCardContainer = styled.div`
  margin-top: 21px;
  border-radius: 4px;
  height: 160px;
  max-height: 100x;
`;

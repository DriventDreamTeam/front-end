import styled from 'styled-components';
import getTicketType from './getTicketType';

export default function Container({ ticket }) {
  let ticketData= {};
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
`;

const TicketTitle = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-top:37px;
`;

const TicketTypeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 108px;
width: 290px;
left: 330px;
top: 292px;
border-radius: 20px;
background-color: #FFEED2;
margin-top:17px;
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


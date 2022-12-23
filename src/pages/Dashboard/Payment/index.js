import { useContext, useState, useEffect } from 'react';
import Container from '../../../components/TicketPayment/PaymentResume';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketsApi';

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    getTickets(userData?.token).then((res) => {
      setTicket({ ...res });
    }).catch(error => {
    });
  }, []);
  return (
    <>
      {ticket.length!==0 &&  <Container ticket={ticket} setTicket={setTicket}></Container>}
    </>
  );
}

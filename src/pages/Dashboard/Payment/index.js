import { useContext, useState, useEffect } from 'react';
import Container from './Container';
import UserContext from '../../../contexts/UserContext';
import { getTicket } from '../../../services/ticketApi';

export default function Payment() {
  const [ticket, setTicket] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getTicket(userData.token).then((res) => {
      setTicket({ ...res });
    });
  }, []);
  return (
    <>
      <Container ticket={ticket} setTicket={setTicket}>
        {' '}
      </Container>
    </>
  );
}

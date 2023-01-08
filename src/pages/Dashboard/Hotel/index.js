import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import { getHotels, getBooking } from '../../../services/hotelApi';
import Container from '../../../components/Hotel/Container';
import Typography from '@material-ui/core/Typography';
import ChooseRoom from '../../../components/Hotel/ChooseRoom.js';
import HotelBrief from '../../../components/Hotel/HotelBrief.js';
import { getPayment } from '../../../services/paymentsApi';
import useTicket from '../../../hooks/api/useTicket';
import UnauthorizedAccessMessage from '../../../components/UnauthorizedMessage';
import { Title } from '../../../components/utils';
import MyLoader from '../../../components/Loading';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [payment, setPayment] = useState([]);
  const [selected, setSelected] = useState({});
  const [loadBrief, setLoadBrief] = useState(false);
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const { ticket } = useTicket();

  const unauthorizedMessagePayment = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';

  useEffect(() => {
    getHotels(userData.token).then((res) => {
      setHotels([...res]);
    });
    getBooking(userData.token).then((res) => {
      setLoadBrief(true);
    });
    if (!loadBrief) {
      getBooking(userData.token).then((res) => {
        setLoadBrief(true);
      });
    }
    if (ticket) {
      getPayment(userData.token, ticket?.id).then((res) => {
        setPayment({ ...res });
        setLoading(false);
      });
    }
  }, [loadBrief, ticket]);

  const doesNotExistPayment = Object.keys(payment).length === 0 || !ticket;

  if (loading && !doesNotExistPayment) {
    return <MyLoader />;
  }

  const doesNotIncludeHotel = hotels.length === 0;

  return (
    <>
      <Title variant="h4">Escolha de hotel e quarto</Title>
      {loadBrief ? (
        <>
          <HotelBrief hotelId={selected.id} setLoadBrief={setLoadBrief} loadBrief={loadBrief} />
        </>
      ) : doesNotExistPayment ? (
        <UnauthorizedAccessMessage text={unauthorizedMessagePayment} />
      ) : (
        <>
          {doesNotIncludeHotel ? (
            <Wrapper>
              <Warning>
                <span>Sua modalidade de ingresso não inclui hospedagem</span>
              </Warning>
              <Warning>
                <span>Prossiga para a escolha de atividades</span>
              </Warning>
            </Wrapper>
          ) : (
            <>
              <ChooseHotel>
                <span>Primeiro, escolha o seu hotel</span>
              </ChooseHotel>
              <Hotels>
                {hotels.map((value, index) => (
                  <Container value={value} selected={selected} setSelected={setSelected} key={index} />
                ))}
              </Hotels>
            </>
          )}
          {selected.id ? <ChooseRoom hotelId={selected.id} setLoadBrief={setLoadBrief} loadBrief={loadBrief} /> : <></>}
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Warning = styled(Typography)`
  color: #8e8e8e;

  & > span {
    font-size: 18px;
  }
`;

const ChooseHotel = styled(Warning)`
  padding-bottom: 15px;
`;

const Hotels = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 19px;
  row-gap: 19px;
  width: 100%;
`;

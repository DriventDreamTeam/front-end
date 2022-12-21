import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import { getHotels, getBooking } from '../../../services/hotelApi';
import Container from './Container';
import Typography from '@material-ui/core/Typography';
import ChooseRoom from './ChooseRoom';
import HotelBrief from './HotelBrief';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [selected, setSelected] = useState({});
  const [loadBrief, setLoadBrief] = useState(false);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getHotels(userData.token).then((res) => {
      setHotels([...res]);
    });

    if(!loadBrief) {
      getBooking( userData.token ).then((res) => {
        setLoadBrief(true);
      });
    }
  }, [loadBrief]);

  return (
    <>
      {loadBrief ? (
        <>
          <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
          <HotelBrief hotelId={selected.id} setLoadBrief={setLoadBrief} loadBrief={loadBrief} />
        </>
      ) : (
        <>
          {hotels.length === 0 ? (
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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

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

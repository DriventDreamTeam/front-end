import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import { getHotels } from '../../../services/hotelApi';
import Container from './Container';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [selected, setSelected] = useState({});
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getHotels(userData.token).then((res) => {
      setHotels([...res]);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
      
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
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Wrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Warning = styled(Typography)`
  color: #8E8E8E;

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

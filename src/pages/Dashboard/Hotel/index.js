import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import { getHotels } from '../../../services/hotelApi';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getHotels(userData.token).then((res) => {
      setHotels([...hotels, res.data]);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de quarto e hotel</StyledTypography>
      <Wrapper>
        <Warning>
          <span>Sua modalidade de ingresso não inclui hospedagem</span>
        </Warning>
        <Warning>
          <span>Prossiga para a escolha de atividades</span>
        </Warning>
      </Wrapper>
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

export const Warning = styled(Typography)`
  color: #8E8E8E;

  & > span {
    font-size: 18px;
  }
`;

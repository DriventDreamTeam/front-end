import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import { getHotels } from '../../../services/hotelApi';
import Typography from '@material-ui/core/Typography';

function HotelComp({ value, selected, setSelected }) {
  function handleClick() {
    if(selected.id !== value.id) {
      setSelected({ ...value });
    }
  }

  return (
    <UniqueHotel hotelid={value.id} selectedid={selected.id} onClick={handleClick}>
      <div>
        <img src={value.image} alt='Hotel' />
        <span>{value.name}</span>
      </div>
    </UniqueHotel>
  );
}

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [selected, setSelected] = useState({});
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getHotels(userData.token).then((res) => {
      setHotels([...hotels, res.data]);
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
              <HotelComp value={value} selected={selected} setSelected={setSelected} key={index} />
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

const UniqueHotel = styled(Typography)`
  background-color: ${({ hotelid, selectedid }) => hotelid === selectedid ? '#FFEED2' : '#EBEBEB'};
  display: flex;
  justify-content: center;
  width: 196px;
  height: 264px;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;

  & img {
    object-fit: cover;
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  
  & > div {
    width: 100%;
    row-gap: 8px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div > span {
    display: flex;
    width: 100%;
    justify-content: left;
  }
`;

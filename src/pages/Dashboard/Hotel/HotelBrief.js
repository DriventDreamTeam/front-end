import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { getBooking } from '../../../services/hotelApi';
import UserContext from '../../../contexts/UserContext';
import SelectRoom from './SelectRoom';

export default function HotelBrief({ hotelId, setLoadBrief, loadBrief }) {
  const [myBooking, setMyBooking] = useState({});
  const { userData } = useContext(UserContext);
  const [changeRoom, setChangeRoom] = useState(false);
  const token = userData.token;

  useEffect(() => {
    getBooking(token).then((res) => {
      setMyBooking(res);
    });
  }, []);

  function handleClick() {
    setChangeRoom(!changeRoom);
  }

  return (
    <Wrapper>
      <h1>Você já escolheu seu quarto:</h1>
      <Container>
        <Booking>
          <img src={myBooking.Room?.Hotel.image} alt={'hotel'} />
          <div>
            <h2>{myBooking.Room?.Hotel.name}</h2>
            <h3>Quarto reservado</h3>
            <h4>
              {myBooking.Room?.name}
              {myBooking.Room?.capacity === 1
                ? ' (Single)'
                : myBooking.Room?.capacity === 2
                  ? ' (Double)'
                  : ' (Triple)'}
            </h4>
            <h3>Pessoas no seu quarto</h3>
            <h4>{myBooking.Room?.Booking === 1 ? 'Apenas você' : `Você e mais ${myBooking.Room?.Booking - 1}`}</h4>
          </div>
        </Booking>
      </Container>
      {changeRoom ? (
        <SelectRoom hotelId={myBooking.Room?.Hotel.id} setLoadBrief={setLoadBrief} loadBrief={loadBrief} changeRoom={changeRoom} myBooking={myBooking}/>
      ) : (
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          TROCAR DE QUARTO
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  h1 {
    margin-bottom: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Booking = styled.div`
  width: 196px;
  height: 264px;
  background: #ffeed2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 45px;
  img {
    width: 100%;
    height: 45%;
  }
  div {
    margin-top: 10px;
  }
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    margin-top: 15px;
  }
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
`;

const Button = styled.div`
  width: 182px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  background-color: #e0e0e0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;

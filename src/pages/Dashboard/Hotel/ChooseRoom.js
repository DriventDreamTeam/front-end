import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { useState, useContext, useEffect } from 'react';
import { getHotelRooms, postBooking } from '../../../services/hotelApi';
import UserContext from '../../../contexts/UserContext';

export default function ChooseRoom({ hotelId, setLoadBrief }) {
  const [rooms, setRooms] = useState({});
  const [selectedRoom, setSelectedRoom] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { userData } = useContext(UserContext);
  const token = userData.token;

  useEffect(() => {
    getHotelRooms({ token, hotelId }).then((res) => {
      setRooms([res.Rooms]);
    });
  }, [hotelId]);

  function Vacancy({ room }) {
    let display;

    if (room.capacity > 2) {
      if (room.capacity === room.Booking)
        display = (
          <>
            {' '}
            <BsPersonFill /> <BsPersonFill /> <BsPersonFill />{' '}
          </>
        );
      if (room.capacity - room.Booking > 2)
        display = (
          <>
            <BsPerson /> <BsPerson /> {selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />}
          </>
        );
      if (room.capacity - room.Booking === 2)
        display = (
          <>
            <BsPerson /> {selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />} <BsPersonFill />
          </>
        );
      if (room.capacity - room.Booking === 1)
        display = (
          <>
            {selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />} <BsPersonFill /> <BsPersonFill />
          </>
        );
    }
    if (room.capacity === 2) {
      if (room.capacity === room.Booking)
        display = (
          <>
            {' '}
            <BsPersonFill /> <BsPersonFill />{' '}
          </>
        );
      if (room.Booking === 0)
        display = (
          <>
            {' '}
            <BsPerson /> {selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />}{' '}
          </>
        );
      if (room.Booking === 1)
        display = (
          <>
            {selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />} <BsPersonFill />{' '}
          </>
        );
    }
    if (room.capacity < 2) {
      if (room.capacity === room.Booking) display = <BsPersonFill />;
      if (room.Booking === 0) display = selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />;
    }

    return display;
  }

  function handleClick() {
    if(!isDisabled) {
      const body = { roomId: Number(selectedRoom) };
      postBooking({ token, body }).then((res) => {
        setLoadBrief(true);
      }).catch((error) => {
        setIsDisabled(false);
      });
    };
    setIsDisabled(true);
    return;
  }

  return (
    <Wrapper>
      <h1>Ótima pedida! Agora escolha seu quarto:</h1>
      <Container>
        {rooms.map((room, index) => {
          const roomVacancy = room.capacity - room.Booking > 0 ? 'vague' : 'full';
          const colored = room.capacity - room.Booking > 3 ? 3 : room.capacity - room.Booking;
          return (
            <Room
              key={index}
              roomVacancy={roomVacancy}
              roomId={room.id}
              selectedRoom={selectedRoom}
              colored={colored}
              onClick={() => {
                roomVacancy === 'vague' ? setSelectedRoom(room.id) : setSelectedRoom(selectedRoom);
              }}
            >
              <h2>{room.name}</h2>
              <div>
                <Vacancy room={room} />
              </div>
            </Room>
          );
        })}
      </Container>
      <Button
        onClick={() => {handleClick();}}
      >
        RESERVAR QUARTO
      </Button>
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

const Room = styled.div`
  width: 190px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-radius: 10px;
  border: solid 1px #cecece;
  display: flex;
  background-color: ${(props) =>
    props.roomVacancy === 'full' ? '#CECECE' : props.selectedRoom === props.roomId ? '#FFEED2' : ''};
  selectedRoom div {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: ${(props) => (props.roomVacancy === 'full' ? '#9D9D9D' : '#454545')};
    margin-left: 10px;
  }
  svg {
    width: 20px;
    fill: ${(props) => (props.roomVacancy === 'full' ? '#8C8C8C' : '#000000')};
    :nth-child(${(props) => props.colored}) {
      fill: ${(props) => (props.selectedRoom === props.roomId ? '#FF4791' : '')};
    }
  }
  cursor: ${(props) => (props.roomVacancy === 'full' ? '' : 'pointer')};
`;

const Button = styled.div`
  width: 182px;
  height: 37px;
  margin: 45px 0;
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

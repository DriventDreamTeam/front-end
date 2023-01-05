import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { getHotelRooms, postBooking, putBooking } from '../../services/hotelApi';
import UserContext from '../../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';

export default function SelectRoom({ hotelId, setLoadBrief, loadBrief, changeRoom, myBooking }) {
  //changeRoom e myBooking são opicionais;
  const [selectedRoom, setSelectedRoom] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [reload, setReload] = useState(true);
  const [rooms, setRooms] = useState([]);
  const { userData } = useContext(UserContext);
  const token = userData.token;

  useEffect(() => {
    getHotelRooms({ token, hotelId }).then((res) => {
      setRooms(res.Rooms);
      setReload(true);
    });
  }, [hotelId]);

  function Vacancy({ room }) {
    let display = <></>;

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
    if (isDisabled) return;
    const body = { roomId: Number(selectedRoom) };

    if (changeRoom) {
      const bookingId = myBooking?.bookingId;
      setIsDisabled(true);

      putBooking({ token, body, bookingId })
        .then((res) => {
          setLoadBrief(false);
        })
        .catch((error) => {
          setIsDisabled(false);
        });
      return;
    }
    postBooking({ token, body })
      .then((res) => {
        setLoadBrief(true);
      })
      .catch((error) => {
        setIsDisabled(false);
      });
  }

  return (
    <>
      <Container>
        {reload ? (
          rooms.map((value, index) => {
            const roomVacancy = value.capacity - value.Booking > 0 ? 'vague' : 'full';
            const colored = value.capacity - value.Booking > 3 ? 3 : value.capacity - value.Booking;
            return (
              <Room
                key={index}
                roomVacancy={roomVacancy}
                roomId={value.id}
                selectedRoom={selectedRoom}
                colored={colored}
                onClick={() => {
                  roomVacancy === 'vague' && value.id !== myBooking?.Room.id
                    ? setSelectedRoom(value.id)
                    : setSelectedRoom(selectedRoom);
                }}
              >
                <h2>{value.name}</h2>
                <div>
                  <Vacancy room={value} />
                </div>
              </Room>
            );
          })
        ) : (
          <>Infelizmente esse hotel não possui quartos cadastrados!</>
        )}
        <Block>
          {selectedRoom ? (
            <Button
              onClick={() => {
                handleClick();
              }}
            >
              {loadBrief ? 'TROCAR DE QUARTO' : 'RESERVAR QUARTO'}
            </Button>
          ) : (
            <></>
          )}
        </Block>
      </Container>
    </>
  );
}

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
  @media (max-width: 600px) {
    width: 45%;
  }
`;

const Button = styled.div`
  width: 182px;
  height: 37px;
  margin: 35px 0;
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Block = styled.div`
  width: 100%;
`;

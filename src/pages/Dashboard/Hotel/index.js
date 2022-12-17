import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Hotel() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const hotel = {
    id: 1,
    name: 'hotel bonito',
    image: 'belaImagem.jpeg',
    createdAt: 'aaaaaa',
    updatedAt: 'aaaaaa',
    Rooms: [{
      id: 1,
      name: '1',
      capacity: 1,
      hotelId: 1,
      Booking: 0,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 2,
      name: '2',
      capacity: 1,
      hotelId: 1,
      Booking: 1,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 3,
      name: '3',
      capacity: 2,
      hotelId: 1,
      Booking: 0,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '4',
      capacity: 2,
      hotelId: 1,
      Booking: 1,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 5,
      name: '5',
      capacity: 2,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 6,
      name: '6',
      capacity: 3,
      hotelId: 1,
      Booking: 0,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 7,
      name: '7',
      capacity: 3,
      hotelId: 1,
      Booking: 1,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 8,
      name: '8',
      capacity: 3,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 9,
      name: '9',
      capacity: 3,
      hotelId: 1,
      Booking: 3,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 10,
      name: '10',
      capacity: 4,
      hotelId: 1,
      Booking: 0,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 11,
      name: '11',
      capacity: 4,
      hotelId: 1,
      Booking: 1,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 12,
      name: '12',
      capacity: 4,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 13,
      name: '13',
      capacity: 4,
      hotelId: 1,
      Booking: 3,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 14,
      name: '14',
      capacity: 4,
      hotelId: 1,
      Booking: 4,
      createdAt: true,
      updatedAt: true,
    }]
  };

  function Vacancy({ room }) {
    let display;
    if (room.capacity > 2) {
      if (room.capacity === room.Booking) display = <> <BsPersonFill /> <BsPersonFill /> <BsPersonFill /> </>;
      if (room.capacity - room.Booking > 2) display = <><BsPerson /> <BsPerson /> {(selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />)}</>;
      if (room.capacity - room.Booking === 2) display = <><BsPerson /> {(selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />)} <BsPersonFill /></>;
      if (room.capacity - room.Booking === 1) display = <>{(selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />)} <BsPersonFill /> <BsPersonFill /></>;
    }
    if (room.capacity === 2) {
      if (room.capacity === room.Booking) display = <> <BsPersonFill /> <BsPersonFill /> </>;
      if (room.Booking === 0) display = <> <BsPerson /> {(selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />)} </>;
      if (room.Booking === 1) display = <>{(selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />)} <BsPersonFill /> </>;
    }
    if (room.capacity < 2) {
      if (room.capacity === room.Booking) display = <BsPersonFill />;
      if (room.Booking === 0) display = (selectedRoom === room.id ? <BsPersonFill /> : <BsPerson />);
    }

    return display;
  };

  return (
    <Wrapper>
      <h1>
        Ótima pedida! Agora escolha seu quarto:
      </h1>
      <Container>
        {hotel.Rooms.map((room, index) => {
          const teste = (room.capacity - room.Booking > 0) ? 'vague' : 'full';
          return (
            <Room key={index} teste={teste} roomId={room.id} selectedRoom={selectedRoom} onClick={() => { teste === 'vague' ? setSelectedRoom(room.id) : setSelectedRoom(selectedRoom); }}>
              <h2>{room.name}</h2>
              <div>
                <Vacancy room={room} />
              </div>
            </Room>
          );
        })}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  h1{
    margin-bottom: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  };
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
  border: solid 1px #CECECE;
  display: flex;
  background-color:  ${props => props.teste === 'full' ? '#CECECE' : props.selectedRoom === props.roomId ? '#FFEED2' : ''};
  selectedRoom
  div{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  };
  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: ${props => props.teste === 'full' ? '#9D9D9D' : '#454545'};
    margin-left: 10px;
  };
  svg{
    width: 20px;
    fill:  ${props => props.teste === 'full' ? '#8C8C8C' : '#000000'};
  }
`;

import styled from 'styled-components';
import SelectRoom from './SelectRoom';

export default function ChooseRoom({ hotelId, setLoadBrief, loadBrief }) {
  return (
    <Wrapper>
      <h1>Ótima pedida! Agora escolha seu quarto:</h1>
      <SelectRoom hotelId={hotelId} setLoadBrief={setLoadBrief} loadBrief={loadBrief} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  h1 {
    margin: 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

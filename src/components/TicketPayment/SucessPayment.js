import { CheckmarkCircle } from 'react-ionicons';
import styled from 'styled-components';

export default function SucessPayment() {
  return (
    <SucessPaymentContainer>
      <CheckmarkCircle color={'#36B853'} title={'check'} height="41px" width="41px" />
      <SucessPaymentTextContainer>
        <TextSucessPaymentConfirmation>Pagamento confirmado!</TextSucessPaymentConfirmation>
        <TextSucessPaymentInstructions>
        Prossiga para escolha de hospedagem e atividades
        </TextSucessPaymentInstructions>
      </SucessPaymentTextContainer>
    </SucessPaymentContainer>
  );
}

const SucessPaymentContainer = styled.div`
  display: flex;
`;
const SucessPaymentTextContainer = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextSucessPaymentConfirmation = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const TextSucessPaymentInstructions = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

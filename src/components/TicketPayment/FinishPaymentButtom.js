import styled from 'styled-components';

export default function FinishPaymentButtom() {
  return  <ButtomLabel htmlFor="submit-form" tabindex="0">  FINALIZAR PAGAMENTO </ButtomLabel>;
}

const ButtomLabel = styled.label`
  display: inline-block;
  margin-top: 20px;
  height: 37px;
  width: 182px;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0px 2px 10px 0px #00000040;
  background: #e0e0e0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`;

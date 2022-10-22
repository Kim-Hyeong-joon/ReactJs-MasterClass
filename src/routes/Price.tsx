import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.accentColor};
  background-color: #171e28;
  border-radius: 20px;
  padding: 20px 0;
  span:nth-child(2) {
    margin: 5px 0;
  }
`;

interface PriceProps {
  priceData?: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

function Price({ priceData }: PriceProps) {
  console.log(priceData);
  return (
    <Container>
      <span>last 1day: ${priceData?.percent_change_24h}%</span>
      <span>last 7days: ${priceData?.percent_change_7d}%</span>
      <span>last 30day: ${priceData?.percent_change_30d}%</span>
    </Container>
  );
}

export default Price;

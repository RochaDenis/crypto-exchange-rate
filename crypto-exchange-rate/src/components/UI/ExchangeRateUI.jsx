import { Typography, Card } from "antd";

export function ExchangeRateUI(props) {
  return (
    <div className="exchange-rate-ui">
      <Card
        extra={3}
        bordered={false}
        style={{ width: 350, backgroundColor: "#4d4add", color: "#fff" }}
        size="default"
      >
        <Typography.Paragraph style={{ color: "#fff" }}>
          Bitcoin
        </Typography.Paragraph>
      </Card>
    </div>
  );
}

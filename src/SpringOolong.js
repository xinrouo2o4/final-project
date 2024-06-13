import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CheeseOolong from './CheeseOolong'
import GoldenBubble from './GoldenBubble';
import HongJiMilkTea from './HongJiMilkTea';
import CheeseMatcha from './CheeseMatcha';
const { Title, Text } = Typography;
const { Meta } = Card;

const SpringOolong = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://kellylife.tw/wp-content/uploads/20220115152351_94.jpg"
          alt="Maku Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆單品介紹☆</h4>
      </div>
      <Row justify="center">
        <Col xs={24} sm={10} md={8} style={{ padding: '20px' }}>
          <Image
            width="100%"
            src="https://www.niusnews.com/upload/imgs/default/202305_JEN/dejengoolongtea/8.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '70px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>春烏龍</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$30 &nbsp;/&nbsp; 大杯：$35</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>冬片四季春烏龍有似高山茶的清香喉韻，口感清香順口，蘊含細緻茶香，口感很像四季春茶和青茶，簡單純粹又清澈回甘！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.niusnews.com/=P14vnbxn1" target="_blank" rel="noopener noreferrer">NIUSNEWS 妞新聞</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他得正推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 芝士奶蓋春烏龍 */}
      <Routes>
        <Route path="/CheeseOolong" element={<CheeseOolong />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://img.huablog.tw/uploads/20220817131659_29.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/CheeseOolong')}
        >
          <Meta title="#得正" description="芝士奶蓋春烏龍" />
        </Card>
      {/* 黃金珍珠奶綠 */}
      <Routes>
        <Route path="/GoldenBubble" element={<GoldenBubble />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://bucket-img.tnlmedia.com/cabinet/2023/05/d01425de-e9ae-4b8c-be47-56548bfd8365.jpg?fit=max&w=2560&auto=compress" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/GoldenBubble')}
        >
          <Meta title="#得正" description="黃金珍珠奶綠 " />
        </Card>
      {/* 烘吉奶茶 */}
      <Routes>
        <Route path="/HongJiMilkTea" element={<HongJiMilkTea />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0WUTtfDsq4UnM6jFD0DnZ4wenLwkyFBYhg&s" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/HongJiMilkTea')}
        >
          <Meta title="#得正" description="烘吉奶茶" />
        </Card>
      {/* 芝士奶蓋抹茶 */}
      <Routes>
        <Route path="/CheeseMatcha" element={<CheeseMatcha />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiD2M5dJ106jInZJwSmnv-F4vHAfZsja3bRs1keGjIq4rGsPSF0s6xVXiqVgMVaV4Z1kU&usqp=CAU" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/CheeseMatcha')}
        >
          <Meta title="#得正" description="芝士奶蓋抹茶" />
        </Card>
      </div>
    </div>
  );
};

export default SpringOolong;
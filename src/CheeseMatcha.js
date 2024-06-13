import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CheeseOolong from './CheeseOolong'
import SpringOolong from './SpringOolong';
import HongJiMilkTea from './HongJiMilkTea';
import GoldenBubble from './GoldenBubble';
const { Title, Text } = Typography;
const { Meta } = Card;

const CheeseMatcha = () => {

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
            src="https://i.ibb.co/xFQKRLx/40657-C73-E8-F8-47-A0-A7-B4-2-F8-BC0-E642-CD-scaled-1-jpg.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>芝士奶蓋抹茶</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$55 &nbsp;/&nbsp; 大杯：$65</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>得正奶蓋香氣濃郁、鹹味明顯，初嘗能喝到抹茶的細末口感！<br></br>（推薦大家點有糖）</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://bigshark.tw/oolongteaproject2024/" target="_blank" rel="noopener noreferrer">鯊魚大口咬</a>、<a href="https://tristaliu.com/oolong-tea-project/" target="_blank" rel="noopener noreferrer">小崔的生活開箱</a></Text>
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
      {/* 春烏龍 */}
      <Routes>
        <Route path="/SpringOolong" element={<SpringOolong />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://bucket-img.tnlmedia.com/cabinet/2023/05/039ec1ac-27f4-4ba5-ac01-4e666b8fa31d.jpg?fit=max&w=2560&auto=compress" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/SpringOolong')}
        >
          <Meta title="#得正" description="春烏龍" />
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
      </div>
    </div>
  );
};

export default CheeseMatcha;
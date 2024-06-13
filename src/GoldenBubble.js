import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CheeseOolong from './CheeseOolong'
import SpringOolong from './SpringOolong';
import HongJiMilkTea from './HongJiMilkTea';
import CheeseMatcha from './CheeseMatcha';
const { Title, Text } = Typography;
const { Meta } = Card;

const GoldenBubble = () => {

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
            src="https://i.ibb.co/7rfTyFT/250326325-919188782035848-5539276191441241299-n.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>黃金珍珠奶綠</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$55 &nbsp;/&nbsp; 大杯：$60</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>以香醇的奶綠為基底，搭配 Q 彈的黃金珍珠，珍珠以黑糖蜜製，呈現誘人的金黃色澤，口感軟 Q 香甜，與奶綠的濃郁茶香完美融合，是一款經典不敗的珍珠奶茶選擇。</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://roo.cash/blog/oolongproject-drink-recommendation-article/" target="_blank" rel="noopener noreferrer">袋鼠金融 Roo.Cash</a></Text>
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

export default GoldenBubble;
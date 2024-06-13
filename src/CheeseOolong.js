import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SpringOolong from './SpringOolong';
import GoldenBubble from './GoldenBubble';
import HongJiMilkTea from './HongJiMilkTea';
import CheeseMatcha from './CheeseMatcha';
const { Title, Text } = Typography;
const { Meta } = Card;

const CheeseOolong = () => {
  
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
            src="https://i.ibb.co/y6bMydH/3e57f3ed-e6b0-4da9-87d9-a30910fb2e7c.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>芝士奶蓋春烏龍</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$50 &nbsp;/&nbsp; 大杯：$60</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>喝起來鹹香的奶蓋也是近幾年手搖飲流行大勢，多層次的口感擄獲不少忠實粉絲。「得正」奶蓋奶香氣很濃郁、鹹味明顯，配上兩種不同風味的烏龍茶真的好有深度，整杯喝完也不膩口，只想舔舔嘴唇、回味無窮。</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.popdaily.com.tw/forum/food/1370625" target="_blank" rel="noopener noreferrer">POPDAILY</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他得正推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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

export default CheeseOolong;
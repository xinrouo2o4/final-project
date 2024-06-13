import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Strawberry from './Strawberry';
import TaroBobo from './TaroBobo';
import Grape from './Grape';
import Mango from './Mango';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const Bobo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://im.marieclaire.com.tw/s1200c675h100b0/assets/mc/202305/645218131938D1683101715.jpeg"
          alt="Maku Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆單品介紹☆</h4>
      </div>
      <Row justify="center">
        <Col xs={24} sm={10} md={8} style={{ padding: '20px', display: 'flex', justifyContent: 'center',  alignItems: 'center', marginTop: '20px' }}>
          <Image
            width="100%"
            src="https://i.ibb.co/M2N35Gf/20240126-025709-U25889-M928738-b378.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '70px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>草莓果粒波波</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$90</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>咀嚼控首選飲品！酸甜多汁的草莓果粒，細緻冰沙迸發濃郁草莓香氣，脆彈爽口的寒天波波，散發茉莉花香的自製綠茶凍，滿料的多層次嚼感，讓人百喝不膩。</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.storm.mg/lifestyle/5001192" target="_blank" rel="noopener noreferrer">風傳媒</a>、<a href="https://www.marieclaire.com.tw/lifestyle/taste/77425" target="_blank" rel="noopener noreferrer">marie claire</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他麻古推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 芝芝草莓果粒 */}
      <Routes>
        <Route path="/Strawberry" element={<Strawberry />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://macutea.com.tw/source/710%E9%BA%BB%E5%8F%A4%E8%8C%B6%E5%9D%8A%E8%8D%89%E8%8E%93%E6%96%B0%E5%93%81%E4%B8%8A%E5%B8%82.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Strawberry')}
        >
          <Meta title="#麻古" description="芝芝草莓果粒" />
        </Card>
      {/* 芋泥波波鮮奶 */}
      <Routes>
        <Route path="/TaroBobo" element={<TaroBobo />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://goodsdesign.com.tw/macu_copy/images/drink-pic-8.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/TaroBobo')}
        >
          <Meta title="#麻古" description="芋泥波波鮮奶" />
        </Card>
      {/* 芝芝葡萄果粒 */}
      <Routes>
        <Route path="/Grape" element={<Grape />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://goodsdesign.com.tw/macu_copy/images/series-1.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Grape')}
        >
          <Meta title="#麻古" description="芝芝葡萄果粒" />
        </Card>
      {/* 楊枝甘露 */}
      <Routes>
        <Route path="/Mango" element={<Mango />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://goodsdesign.com.tw/macu_copy/images/is1-pic-2.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Mango')}
        >
          <Meta title="#麻古" description="楊枝甘露" />
        </Card>
      </div>
    </div>
  );
};

export default Bobo;
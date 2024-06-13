import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Bobo from './Bobo';
import Strawberry from './Strawberry';
import TaroBobo from './TaroBobo';
import Grape from './Grape';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const Mango = () => {

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
        <Col xs={24} sm={10} md={8} style={{ padding: '20px' }}>
          <Image
            width="100%"
            src="https://goodsdesign.com.tw/macu_copy/images/is1-pic-2.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>楊枝甘露</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$80</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>採用新鮮嚴選愛文芒果製作，底層加入清爽綠茶凍、愛文芒果碎冰砂，搭配芒果果粒與葡萄柚果粒、並加入特調椰奶，讓風味更圓潤，堆疊出層層豐富口感，成為廣受國內外粉絲心目中最經典的「飲中甜品」！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://macutea.com.tw/news_detail.php?id=4612" target="_blank" rel="noopener noreferrer">麻古</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他麻古推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 草莓果粒波波 */}
      <Routes>
        <Route path="/Bobo" element={<Bobo />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202301/63C4EC34677CE1673849908.jpeg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Bobo')}
        >
          <Meta title="#麻古" description="草莓果粒波波" />
        </Card>
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
      </div>
    </div>
  );
};

export default Mango;
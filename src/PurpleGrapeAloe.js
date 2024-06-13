import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Apple from './Apple';
import Pomelo from './Pomelo';
import YuHeBao from './YuHeBao';
import Xiushui from './Xiushui';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const PurpleGrapeAloe = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://guiji-group.com/wp-content/uploads/2023/03/%E9%BE%9C%E8%A8%98%E8%B6%85%E7%B4%9A%E5%A5%BD%E5%96%9D%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91.jpg"
          alt="Guiji Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆單品介紹☆</h4>
      </div>
      <Row justify="center">
        <Col xs={24} sm={10} md={8} style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            width="100%"
            src="https://i.ibb.co/NNNVj5P/photo-6257dcef74df6.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '40px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>紫葡蘆薈春</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$69</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>100%新鮮葡萄汁搭配台灣高山茶，色澤誘人、果香酸甜,茶韻清香回甘，入口時更可咀嚼蘆薈口感,香甜又順口，碰撞出龜記專屬的清爽香氣！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://guiji-group.com/%E7%B4%AB%E8%91%A1%E8%98%86%E8%96%88%E6%98%A5%F0%9F%8D%87%E5%85%A8%E5%8F%B0%E4%B8%8A%E5%B8%82/" target="_blank" rel="noopener noreferrer">龜記</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他龜記推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 蘋果紅萱 */}
      <Routes>
        <Route path="/Apple" element={<Apple />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://guiji-group.com/wp-content/uploads/2021/12/%E7%86%B1%E8%98%8B%E6%9E%9C%E4%B8%AD%E6%9D%AF90-02-1.png" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Apple')}
        >
          <Meta title="#龜記" description="蘋果紅萱" />
        </Card>
      {/* 紅柚翡翠 */}
      <Routes>
        <Route path="/Pomelo" element={<Pomelo />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://static.popdaily.com.tw/wp-content/uploads/2020/08/2oqg7saykbi8c4owo4wowwsk8qeksdd-802x1000.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Pomelo')}
        >
          <Meta title="#龜記" description="紅柚翡翠" />
        </Card>
      {/* 玉荷包茶王 */}
      <Routes>
        <Route path="/YuHeBao" element={<YuHeBao />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202308/64DDD0F86612C1692258552.jpeg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/YuHeBao')}
        >
          <Meta title="#龜記" description="玉荷包茶王" />
        </Card>
      {/* 紅柚翡翠 & 秀水旺梨春的冰棒 */}
      <Routes>
        <Route path="/Xiushui" element={<Xiushui />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://cdn2.ettoday.net/images/7045/d7045273.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Xiushui')}
        >
          <Meta title="#龜記" description="紅柚翡翠 & 秀水旺梨春的冰棒" />
        </Card>
      </div>
    </div>
  );
};

export default PurpleGrapeAloe;
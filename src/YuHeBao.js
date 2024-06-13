import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Apple from './Apple';
import Pomelo from './Pomelo';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import Xiushui from './Xiushui';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const YuHeBao = () => {

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
            src="https://i.ibb.co/wJ6m90Q/w1200.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '15px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>玉荷包茶王</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$80</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>嚴選自高雄大樹香氣十足、完熟果實，色澤光亮艷美的玉荷包，搭配香氣濃郁、餘韻層次豐富的三十三茶王。<br></br>入口後有著酸酸甜甜的香氣玉荷包果肉多汁，配上自然回甘的茶王讓整體口感香滑順暢而不甜膩，讓人一邊喝一邊感受嘴裡流動的滿足感與消暑感！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://guiji-group.com/%E7%8E%89%E8%8D%B7%E5%8C%85%E8%8C%B6%E7%8E%8B%F0%9F%8D%B9%E4%BB%8A%E5%A4%8F%E9%99%90%E5%AE%9A%E4%B8%8A%E5%B8%82/" target="_blank" rel="noopener noreferrer">龜記</a></Text>
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
      {/* 紫葡蘆薈春 */}
      <Routes>
        <Route path="/PurpleGrapeAloe" element={<PurpleGrapeAloe />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/264222929_1758230167706470_3855256267426836726_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Icwokr3I000Q7kNvgGFhfCY&_nc_ht=scontent-tpe1-1.xx&oh=00_AYAtIivTcnbPb6CQvLCPSDnYnazvePSDKHqOJaSAcMKfcQ&oe=666B70DF" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/PurpleGrapeAloe')}
        >
          <Meta title="#龜記" description="紫葡蘆薈春" />
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

export default YuHeBao;
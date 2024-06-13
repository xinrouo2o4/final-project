import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Pomelo from './Pomelo';
import YuHeBao from './YuHeBao';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import Xiushui from './Xiushui';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const Apple = () => {

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
            src="https://i.ibb.co/VL1g70R/90-02-e1638757387381.png"
          />
        </Col>
        <Col span={12} style={{ marginTop: '50px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>蘋果紅萱</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$59</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>以100%新鮮蘋果原汁為基底，而金萱使用紅茶發酵方式並烘焙後，搭配龜記招牌金萱三韻紅萱為茶底，茶相伴隨果香，清新香氣讓人一喝就愛上。</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://guiji-group.com/%E8%98%8B%E6%9E%9C%E7%B4%85%E8%90%B1%F0%9F%8D%8E%E7%86%B1%E9%A3%B2%E4%B8%8A%E5%B8%82/" target="_blank" rel="noopener noreferrer">龜記</a>、<a href="https://tw.news.yahoo.com/%E9%BE%9C%E8%A8%98%E8%8F%9C%E5%96%AE%E7%86%B1%E9%8A%B7%E6%8E%92%E8%A1%8C%E6%A6%9Ctop5%E6%9B%9D%E5%85%89-%E6%9C%88%E8%B3%A330%E8%90%AC%E6%9D%AF-%E5%A4%A7%E5%AE%B6%E6%9C%80%E6%84%9B%E7%9A%84%E6%98%AF%E5%AE%83-030107150.html" target="_blank" rel="noopener noreferrer">yahoo新聞</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他龜記推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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

export default Apple;
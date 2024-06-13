import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Apple from './Apple';
import YuHeBao from './YuHeBao';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import Xiushui from './Xiushui';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const Pomelo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://guiji-group.com/wp-content/uploads/2023/03/%E9%BE%9C%E8%A8%98%E8%B6%85%E7%B4%9A%E5%A5%BD%E5%96%9D%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91.jpg"
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
            src="https://i.ibb.co/WtS6SFb/20220717151700-3ed77b3c.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '20px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>紅柚翡翠</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$75</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>龜記當家招牌。<br></br>以輕盈爽口的綠茶為基底，此項飲料以綠茶為底，搭配手工現挖而新鮮的葡萄柚果肉，綠茶的輕柔茶韻與葡萄柚的酸甜交織，每一口都帶有輕柔的酸甜與優雅的茶香，怕茶澀、怕果酸的人也能完全免疫，喝到停不下來！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.look-in.com.tw/life-style/food/25217" target="_blank" rel="noopener noreferrer">LOOKin</a>、<a href="https://www.518.com.tw/article/2208" target="_blank" rel="noopener noreferrer">518熊班</a></Text>
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

export default Pomelo;
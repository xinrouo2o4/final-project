import React from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { Card } from 'antd';
import Apple from './Apple';
import Pomelo from './Pomelo';
import YuHeBao from './YuHeBao';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const Xiushui = () => {

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
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '10px'}}>
        <h4>☆單品介紹☆</h4>
      </div>
      <Row justify="center">
        <Col xs={24} sm={10} md={8} style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            width="100%"
            src="https://i.ibb.co/MfQHPMQ/9f88afb11f93824827eed88390bb71bf.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '-10px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>紅柚翡翠 & 秀水旺梨春的冰棒</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>$59</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>龜記攜手SUNFRIEND MOUTH 趁夏季推出熱賣飲料「紅柚翡翠」與「秀水旺梨春」兩款古早味冰棒。<br></br>紅柚翡翠以清爽的綠茶為基底，加入大量新鮮葡萄柚；秀水旺梨春則以台灣土鳳梨調入台灣四季春。<p></p>在全台 7-ELEVEN一天24小時都能買得到，中午也不用去排隊買飲料！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://tw.sports.yahoo.com/news/%E6%9E%9C%E8%8C%B6%E6%89%8B%E6%90%96%E9%A3%B2%E9%9C%B8%E4%B8%BB%E6%8E%A8-%E7%B4%85%E6%9F%9A%E7%BF%A1%E7%BF%A0-%E8%88%87-%E7%A7%80%E6%B0%B4%E6%97%BA%E6%A2%A8%E6%98%A5-%E5%86%B0%E6%A3%92-040000096.html" target="_blank" rel="noopener noreferrer">yahoo!運動</a></Text>
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
      </div>
    </div>
  );
};

export default Xiushui;
import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import One from './One';
import OatmealMilkTea from './OatmealMilkTea';
import IcecreamBlacktea from './IcecreamBlacktea';
import ChocolateBallet from './ChocolateBallet';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;


const FreshPomeloGreen = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://petit-tw.jp/wp-content/uploads/2019/02/DSC09314.jpg"
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
            src="https://i.ibb.co/bgnG13h/171585151078751-P29668007.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px', paddingLeft: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>鮮柚綠</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$50 &nbsp;/&nbsp; 大杯：$65</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>重重挑選出的葡萄柚，果肉細膩飽滿、入口酸甜多汁，每日新鮮手工挖取，精準避開白色薄膜，果肉50％鮮取、50%榨汁，果肉紅潤細嫩、果汁清爽，整體神清氣爽的清香更讓人迷戀，一喝上癮！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.niusnews.com/=P0g3hl3n7" target="_blank" rel="noopener noreferrer">NIUSNEWS 妞新聞</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他五十嵐推薦☆</h4>
      </div>
      {/* 一 號 */}
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      <Routes>
        <Route path="/One" element={<One />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://bigbro.tw/wp-content/uploads/2021/05/20210513185042_55.jpeg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/One')}
        >
          <Meta title="#五十嵐" description="一號" />
        </Card>
      {/* 燕麥紅茶拿鐵 */}
      <Routes>
        <Route path="/OatmealMilkTea" element={<OatmealMilkTea />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/91599691_2754030774716943_5105114100732526592_n.jpg?stp=dst-jpg_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=F2m1Vd6b6IwQ7kNvgHdLlyi&_nc_ht=scontent-tpe1-1.xx&oh=00_AYAatFA-Ka05UwyFt7qRK36m3cYIF1j5BluC4uLsHRGKJw&oe=668D2BF3" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/OatmealMilkTea')}
        >
          <Meta title="#五十嵐" description="燕麥紅茶拿鐵" />
        </Card>
      {/* 冰淇淋紅茶 */}
      <Routes>
        <Route path="/IcecreamBlacktea" element={<IcecreamBlacktea />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.18169-9/18922148_804850216356452_2479918462421853540_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iOO70i1vzbkQ7kNvgHMSVXm&_nc_ht=scontent-tpe1-1.xx&oh=00_AYDARn8VKmVc3fbh4nDxgvOikGAb-xlSLU6f-ZhVOVcQ8g&oe=668D2AFB" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/IcecreamBlacktea')}
        >
          <Meta title="#五十嵐" description="冰淇淋紅茶" />
        </Card>
      {/* 可可芭蕾拿鐵 */}
      <Routes>
        <Route path="/ChocolateBallet" element={<ChocolateBallet />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKY-XAoazxPPHS5Gj8jsirLH0_o8yY5v2Bx75fIZbX5qmE_bBnwevCU2Th4_eg5Mm1kA&usqp=CAU" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/ChocolateBallet')}
        >
          <Meta title="#五十嵐" description="可可芭蕾拿鐵" />
        </Card>
      </div>
    </div>
  );
};

export default FreshPomeloGreen;
import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nabe from './Nabe'
import EarlGreyMilkTea from './EarlGreyMilkTea';
import TraditionalBlackTeaLatte from './TraditionalBlackTeaLatte';
import AmberOolong from './AmberOolong';
const { Title, Text } = Typography;
const { Meta } = Card;

const Bubble = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://live.staticflickr.com/65535/51400550557_cf84f766cd_c.jpg"
          alt="Maku Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆單品介紹☆</h4>
      </div>
      <Row justify="center">
        <Col xs={24} sm={10} md={8} style={{ padding: '20px', display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>
          <Image
            width="100%"
            src="https://i.ibb.co/2tBBPJy/w644.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>珍珠紅茶拿鐵</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$45 &nbsp;/&nbsp; 大杯：$55</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>迷客夏招牌飲品，使用自家綠光牧場鮮奶調配而成的鮮奶茶，紅茶也可根據個人喜好選擇「娜杯、伯爵或大正紅茶」，搭配手工熬煮珍珠，<br></br>珍珠咀嚼蜜香滋味呈現豐富並拉長整體風味感受。</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.milksha.com/products_detail.php?cID=8" target="_blank" rel="noopener noreferrer">迷客夏</a>、<a href="https://www.518.com.tw/article/2216" target="_blank" rel="noopener noreferrer">518熊班</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他迷客夏推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 娜杯紅茶拿鐵 */}
      <Routes>
        <Route path="/nabablacktea" element={<Nabe />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://www.milksha.com/upload/image/%E3%80%8A%E5%9C%96%E4%B8%80%E3%80%8B%E5%A8%9C%E6%9D%AF%E7%B4%85%E8%8C%B6_%E6%8B%BF%E9%90%B5%20%E4%B8%BB%E8%A6%96%E8%A6%BA%20.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Nabe')}
        >
          <Meta title="#迷客夏" description="娜杯紅茶拿鐵" />
        </Card>
      {/* 伯爵紅茶拿鐵 */}
      <Routes>
        <Route path="/EarlGreyMilkTea" element={<EarlGreyMilkTea />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/430942228_885102013412525_3970341848004931493_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=20TN529fSBYQ7kNvgF-CvPi&_nc_ht=scontent-tpe1-1.xx&oh=00_AYBLTo4qV_rkWM40VlSr6wfLO9G6FqEYxKJswH7HliBNMg&oe=666BA022" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/EarlGreyMilkTea')}
        >
          <Meta title="#迷客夏" description="伯爵紅茶拿鐵" />
        </Card>
      {/* 大正紅茶拿鐵 */}
      <Routes>
        <Route path="/TraditionalBlackTeaLatte" element={<TraditionalBlackTeaLatte />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/430892242_885102133412513_1400692975391306934_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=09ZqX-vlzHUQ7kNvgFChUrG&_nc_ht=scontent-tpe1-1.xx&oh=00_AYCMnRxeOTxllb63ET4Z4Rtb3imxl5aw1N7WAYb-z-rdxw&oe=666BA749" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/TraditionalBlackTeaLatte')}
        >
          <Meta title="#迷客夏" description="大正紅茶拿鐵" />
        </Card>
      {/* 琥珀烏龍拿鐵 */}
      <Routes>
        <Route path="/AmberOolong" element={<AmberOolong />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/430982247_885102123412514_4693575091982079086_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oOZAa-XNeroQ7kNvgF_2mA3&_nc_ht=scontent-tpe1-1.xx&oh=00_AYAd6GKFldbohnQCQPG41bZwhFDLQwyswswN3HDUYs0Z-A&oe=666B8F19" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/AmberOolong')}
        >
          <Meta title="#迷客夏" description="琥珀烏龍拿鐵" />
        </Card>
      </div>
    </div>
  );
};

export default Bubble;
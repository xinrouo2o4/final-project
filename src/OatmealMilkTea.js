import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import One from './One';
import FreshPomeloGreen from './FreshPomeloGreen';
import IcecreamBlacktea from './IcecreamBlacktea';
import ChocolateBallet from './ChocolateBallet';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const OatmealMilkTea = () => {

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
            src="https://i.ibb.co/N7MVXH3/20180521173730-98.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '30px', paddingLeft: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>燕麥紅茶拿鐵</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$50 &nbsp;/&nbsp; 大杯：$65</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>牛奶與紅茶完美１：１比例，香濃又順口！<br></br>整顆新鮮燕麥粒長時間烹煮，品質有保障！<br></br>Ｑ滑又脆脆配濃醇紅茶拿鐵，好喝超上癮！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://gwan.tw/50lan/" target="_blank" rel="noopener noreferrer">吃關關</a>、<a href="https://www.facebook.com/photo.php?fbid=358965503315534&id=100076062604036&set=a.199524819259604&locale=zh_TW" target="_blank" rel="noopener noreferrer">50嵐（Facebook）</a></Text>
        </Col>
      </Row>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <h4>☆其他五十嵐推薦☆</h4>
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 一 號 */}
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
      {/* 鮮柚綠 */}
      <Routes>
        <Route path="/FreshPomeloGreen" element={<FreshPomeloGreen />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/441867113_457767320102018_582432034515933433_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=39nRIUYuBeEQ7kNvgG2v5m5&_nc_ht=scontent-tpe1-1.xx&oh=00_AYAp2pXETN0dQTnBPJkf_pYOa44c3YW2E_mj-dwosfoWAw&oe=666BA919" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/FreshPomeloGreen')}
        >
          <Meta title="#五十嵐" description="鮮柚綠 " />
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

export default OatmealMilkTea;
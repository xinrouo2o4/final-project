import React from 'react';
import { Image, Typography, Col, Row, Card } from 'antd';
import One from './One';
import OatmealMilkTea from './OatmealMilkTea';
import FreshPomeloGreen from './FreshPomeloGreen';
import ChocolateBallet from './ChocolateBallet';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
const { Meta } = Card;

const IcecreamBlacktea = () => {

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
            src="https://cc.tvbs.com.tw/img/program/upload/2023/10/04/20231004011803-eaf73c09.jpg"
          />
        </Col>
        <Col span={12} style={{ marginTop: '50px', paddingLeft: '30px' }}>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}>冰淇淋紅茶</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={4} style={{ color: '#000000', paddingLeft: '50px', marginBottom: '10px' }}>中杯：$40 &nbsp;/&nbsp; 大杯：$55</Title>
          <Title level={2} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Title level={5} style={{ color: '#3C3C3C', paddingLeft: '50px', lineHeight: '2.0' }}>以招牌紅茶為基底，搭配香草冰淇淋（怕甜的朋友建議點無糖）。<br></br>喝的時候隨著冰淇淋逐漸融化，能品嚐到多層次口感，真的讓人愛不釋手！</Title>
          <Title level={1} style={{ color: '#000000', paddingLeft: '50px' }}></Title>
          <Text style={{ color: '#7B7B7B',paddingLeft: '50px' }}>參考資料：<a href="https://www.beauty321.com/post/55968" target="_blank" rel="noopener noreferrer">BEAUTY 美人圈</a></Text>
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

export default IcecreamBlacktea;
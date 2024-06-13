import React, { useState } from 'react';
import { Collapse, Divider } from 'antd';
import { Card } from 'antd';
import Strawberry from './Strawberry';
import TaroBobo from './TaroBobo';
import Grape from './Grape';
import Mango from './Mango';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const text1 = `
嚴選當季鮮果農產，秉持著「自己都不能接受的東西，
絕不推銷給客人」的理念，麻古以最高標準把關食材安全，
鮮果茶飲皆現點、現切、現榨、現沖，喝出健康生活新風味。
`

const text2 = ` 
FUN 粽一夏，芒好的！超卡哇伊的保溫提袋 ＆ 多功能提袋 開賣啦 🌸
現在加入麻古數位會員，即可以加購價，把可愛又實用的提袋帶回家
`;

const text3 = `
麻古茶坊推出2款不同款式的環保杯，分別有方形透明環保杯以及圓長形的環保杯，不同款式一樣可愛！
`;;


const Maku = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleMouseOver = () => {
    setButtonHovered(true);
  };

  const handleMouseOut = () => {
    setButtonHovered(false);
  };


  const handleButtonClick = () => {
    setShowImage(prevState => !prevState); 
  };

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>

      <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <img
          src="https://im.marieclaire.com.tw/s1200c675h100b0/assets/mc/202305/645218131938D1683101715.jpeg"
          alt="Maku Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>

        </div>
      </div>
      <br /><br />
      <h4>☆熱門推薦☆</h4>
      <br /><br />
      <img
        src="https://goodsdesign.com.tw/macu_copy/images/drink-pic-5.jpg"
        alt="Maku Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【梅好旺萊】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>嚴選台灣在地飽滿多汁、糖酸比高的整顆鳳梨，再將煨煮至焦香的蜜糖</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>緩緩浸潤鮮甜的鳳梨果肉，現打成沁涼酸甜的鳳梨冰沙！</p>

      <br /><br /><br /><br />
      <img
        src="https://macutea.com.tw/upload_image/news/news_1087.jpg"
        alt="Maku Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />

      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【梅好番茄】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>嚴格篩選當令最優質的聖女小蕃茄，圓潤豔紅的果皮，富含滿滿的茄紅素。</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>搭配麻古獨家溫火慢熬的話梅，調製出鹹香唰嘴的梅汁，巧妙點綴出蕃茄的鮮美與香甜，每一口都是跳躍的味覺饗宴。</p>
      <br /><br /><br /><br />

      <img
        src="https://macutea.com.tw/source/1109-%E6%9F%B3%E6%A9%99.jpg"
        alt="Maku Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【柳橙果粒茶】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>季節嚴選台灣產地直送的柳橙🍊</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>台灣在地的香甜好滋味都在這一杯裡啦！滿滿的維他命C還有活力正能量💪</p>
      <br /><br /><br /><br />
      <div>
        <button
          style={{
            backgroundColor: buttonHovered ? '#006400' : '#008000',
            color: 'white',
            borderRadius: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleButtonClick}
        >
          {showImage ? '隱藏菜單' : '顯示菜單'}
        </button>

        {showImage && (
          <div style={{ marginTop: '24px' }}>
            <img
              src="https://img.sant.tw/a16241654ad530d0d2b70cf701a9a6a4.jpg" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        <br /><br />

      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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
      {/* 楊枝甘露 */}
      <Routes>
        <Route path="/Mango" element={<Mango />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://goodsdesign.com.tw/macu_copy/images/is1-pic-2.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/Mango')}
        >
          <Meta title="#麻古" description="楊枝甘露" />
        </Card>


      </div>

      <Divider orientation="left">【品牌故事】</Divider>
      <Collapse
        items={[
          {
            key: '1',
            label: '★ 點我知道更多',
            children: <p>{text1}</p>,
          },
        ]}
      />

      <Divider orientation="left">【最新消息】</Divider>
      <Collapse
        items={[
          {
            key: '2',
            label: '★ 點我知道更多',
            children: <p>{text2}</p>,
          },
        ]}
      />

      <Divider orientation="left">【最新消息】</Divider>
      <Collapse
        items={[
          {
            key: '3',
            label: '★ 點我知道更多',
            children: <p>{text3}</p>,
          },
        ]}
      />
    </div>
  );
};

export default Maku;

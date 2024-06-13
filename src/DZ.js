import React, { useState } from 'react';
import { Collapse, Divider } from 'antd';
import { Card } from 'antd';
import SpringOolong from './SpringOolong';
import GoldenBubble from './GoldenBubble';
import HongJiMilkTea from './HongJiMilkTea';
import CheeseMatcha from './CheeseMatcha';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const text1 = `
得正最早跟募資成名的大象環保杯聯名，
把自己跟環保議題緊緊捆綁。
最近又跟文青咖啡名店COFFEE STOPOVER 聯名的烏龍+咖啡茶飲，
把茶與咖啡原本是競爭的商品融合添加話題性。
`

const text2 = ` 
春日裡，浪漫氣息＿流淌🌸
CUP sleeve也悄換新裝
將原本純白設計，複製貼上＃得正藍
展現更一致的風格計劃
與窗上春日相映成趣
綠嫩的枝枒探頭、山櫻花溫柔綻放
在橫豎間開展序曲。
`;

const text3 = `
得正Oolong TEA Project 以三種不同焙火程度的烏龍茶：#春烏龍 #輕烏龍 #焙烏龍，
專注烏龍茶為品牌理念，得正從一杯烏龍開始，推廣茶飲的風格計劃！
`;;


const DZ = () => {
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
          src="https://kellylife.tw/wp-content/uploads/20220115152351_94.jpg"
          alt="DZ Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>

        </div>
      </div>
      <br /><br />
      <h4>☆熱門推薦☆</h4>
      <br /><br />

      <img
        src="https://bucket-img.tnlmedia.com/cabinet/2023/05/f87731f9-d9c4-4294-883e-2936d0191175.jpg?fit=max&w=2560&auto=compress"
        alt="DZ Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />

      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【芝士奶蓋春烏龍】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>厚實綿密的鹹奶蓋，加上「春烏龍」茶香，溫潤順口且不苦澀</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>雖然是芝士但完全不會膩口，而且喝完鼻腔會有烏龍茶的餘韻香氣！</p>

      <br /><br /><br /><br />
      
      <img
        src="https://bucket-img.tnlmedia.com/cabinet/2023/05/2224bde5-5f8f-4c36-bcb2-9da61cd17969.jpg?fit=max&w=2560&auto=compress"
        alt="DZ Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【檸檬春烏龍】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>使用每日現榨的屏東九如新鮮檸檬原汁，配上完美比例的「春烏龍」</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>喝得到烏龍的清甜，又帶有檸檬的酸香，清爽解膩無負擔！</p>

      <br /><br /><br /><br />

      <img
        src="https://bucket-img.tnlmedia.com/cabinet/2023/05/ca301449-f1b0-435f-9927-d14d09232727.jpg?fit=max&w=2560&auto=compress"
        alt="DZ Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【優酪春烏龍】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>是一支雙重水果系列，茶湯為香氣細膩輕發酵的春烏龍</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>添加「乳酸飲料」和鮮榨的「葡萄柚」，喝得到果粒，聞起來有著滿滿的柑橘香。</p>
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
              src="https://achingfoodie.tw/wp-content/uploads/20230708111500_60.jpg" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        <br /><br />
      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {/* 春烏龍 */}
      <Routes>
        <Route path="/SpringOolong" element={<SpringOolong />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://bucket-img.tnlmedia.com/cabinet/2023/05/039ec1ac-27f4-4ba5-ac01-4e666b8fa31d.jpg?fit=max&w=2560&auto=compress" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/SpringOolong')}
        >
          <Meta title="#得正" description="春烏龍" />
        </Card>
      {/* 黃金珍珠奶綠 */}
      <Routes>
        <Route path="/GoldenBubble" element={<GoldenBubble />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://bucket-img.tnlmedia.com/cabinet/2023/05/d01425de-e9ae-4b8c-be47-56548bfd8365.jpg?fit=max&w=2560&auto=compress" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/GoldenBubble')}
        >
          <Meta title="#得正" description="黃金珍珠奶綠 " />
        </Card>
      {/* 烘吉奶茶 */}
      <Routes>
        <Route path="/HongJiMilkTea" element={<HongJiMilkTea />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0WUTtfDsq4UnM6jFD0DnZ4wenLwkyFBYhg&s" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/HongJiMilkTea')}
        >
          <Meta title="#得正" description="烘吉奶茶" />
        </Card>
      {/* 芝士奶蓋抹茶 */}
      <Routes>
        <Route path="/CheeseMatcha" element={<CheeseMatcha />} />
      </Routes>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiD2M5dJ106jInZJwSmnv-F4vHAfZsja3bRs1keGjIq4rGsPSF0s6xVXiqVgMVaV4Z1kU&usqp=CAU" style={{ height: '300px', objectFit: 'cover' }} />}
          onClick={() => navigate('/CheeseMatcha')}
        >
          <Meta title="#得正" description="芝士奶蓋抹茶" />
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

export default DZ;

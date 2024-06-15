import React, { useState } from 'react';
import { Collapse, Divider } from 'antd';
import { Card } from 'antd';
import EarlGreyMilkTea from './EarlGreyMilkTea';
import TraditionalBlackTeaLatte from './TraditionalBlackTeaLatte';
import Nabe from './Nabe';
import AmberOolong from './AmberOolong';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const text1 = `
源於台灣酪農對土地的愛戀，
迷客夏一路走來始終如一，認真做好東西
，總有一天會被看見，這是我們一直相信的。
`

const text2 = ` 
迷客夏推出全新「夏日康波」系列新品，「粉綠豆鮮奶冰沙」、「夏日莫西多」、「鳳梨康波綠／青」本次分兩波段上市。
`;

const text3 = `
迷客夏2024第一波新品以《新台味》為主題，並於1/10全台門市開賣，
全系列包含「早安1960」及「1960麵茶拿鐵」兩款復古新飲品，
在手搖飲中加入充滿濃濃古早味的台灣製「麵茶」，素食者也可安心點。
`;;


const Milk = () => {
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
          src="https://live.staticflickr.com/65535/51400550557_cf84f766cd_c.jpg"
          alt="Milk Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>

        </div>
      </div>
      <br /><br />
      <h4>☆熱門推薦☆</h4>
      <br /><br />
      <img
        src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/03/14/0/16268028.jpg&s=Y&x=0&y=442&sw=1279&sh=1079&sl=W&fw=800&exp=3600&w=800"
        alt="Milk Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【蜜Q茉香拿鐵】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>蜂蜜特有香氣與迷客夏經典茉香綠茶拿鐵完美結合，讓你每一口喝的到蜂蜜的花香甜潤。</p>

      <br /><br /><br /><br />
      <img
        src="https://i.ibb.co/yy4QKXn/20240304-033752-U25889-M936602-2302.jpg"
        alt="Milk Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />

      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【巨峰葡啵綠】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>嚴選台灣在地 #巨峰葡萄 堅持不添加防腐劑和人工香料</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>喝的到葡萄本身的酸甜清香～彷彿不套濾鏡、𝟭𝟬𝟬%原圖輸出的最佳美味。</p>
      <br /><br /><br /><br />

      <img
        src="https://blog.dhconcept.com/wp-content/uploads/2022/09/%E3%80%8A%E5%9C%96%E4%B8%89%E3%80%8B%E5%8D%81%E7%A9%80%E7%BE%8E%E4%BA%BA%E6%8A%B9%E8%8C%B6%E7%B3%BB%E5%88%97-%E4%B8%80%E6%8A%B9%E9%9D%92%E6%83%85%E5%A2%83%E7%85%A7-1365x2048.jpg"
        alt="Milk Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【一抹青】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>選用十穀美人抹茶搭配台灣原片青茶，入口可以感受到炒焙堅果濃郁的穀米香氣</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>以及東方美人茶研製的抹茶甘甜，尾韻有迷客夏青茶特有的圓潤風味和清甜。</p>
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
              src="https://i.ibb.co/YDX7zFs/North-Milk-Sha-Menu.png" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        {showImage && (
          <div style={{ marginTop: '24px' }}>
            <img
              src="https://i.ibb.co/4tf1Sst/Milk-Sha-Menu.png" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        <br /><br />

      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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
      {/* 娜杯紅茶拿鐵 */}
      <Routes>
        <Route path="/Nabe" element={<Nabe />} />
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

export default Milk;

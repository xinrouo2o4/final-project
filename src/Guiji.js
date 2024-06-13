import React, { useState } from 'react';
import { Collapse, Divider } from 'antd';
import { Card } from 'antd';
import YuHeBao from './YuHeBao';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import Apple from './Apple';
import Xiushui from './Xiushui';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const text1 = `【小人物.大生活】是龜記茗品品牌的Slogan， 
目的是時刻提醒著勿忘初衷的經營理念，也是龜記品牌運營一直以來所秉持的態度。
`

const text2 = ` 
2024 春 | 四季春了 2024年，龜記以全新的四季春青茶，巧妙融合水果與蜂蜜的春季滋味，為您開啟一段春意…
`;

const text3 = `
2024年龜記再度誠摯邀請小朋友加入『小小店長體驗營』活動，一場充滿歡笑的門市冒險！
透過實際操作，小朋友們將認識標章、探索製作機器的神秘世界，還能學到有趣的額外小知識。這不僅是一場知識冒險，更是親子互動的時光。
`;;


const Guiji = () => {
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
          src="https://guiji-group.com/wp-content/uploads/2023/03/%E9%BE%9C%E8%A8%98%E8%B6%85%E7%B4%9A%E5%A5%BD%E5%96%9D%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91.jpg"
          alt="Guiji Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>

        </div>
      </div>
      <br /><br />
      <h4>☆熱門推薦☆</h4>
      <br /><br />
      <img
        src="https://guiji-group.com/wp-content/uploads/2020/11/%E7%B4%85%E6%9F%9A%E7%BF%A1%E7%BF%A0.jpg"
        alt="Guiji Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【紅柚翡翠】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>每日手挖超限量的新鮮紅柚，果粒滿滿保證一口接一口，讓你欲罷不能啊～</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>大方實在的份量、飽滿鮮豔的葡萄柚果肉。</p>

      <br /><br /><br /><br />
      <img
        src="https://www.kirakacha.com.tw/upload_public/article/2023/11/cuimpqvehky4q2btf2ur.jpg"
        alt="Guiji Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />

      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【茶王奶茶】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>添加特有三十三茶葉，經過三天三夜反覆焙火及回火後，靜置三十天熟成，</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>一共三十三天獨家工法，以此命名為「三十三茶王」，獨特回甘層次收服許多奶茶控。</p>
      <br /><br /><br /><br />

      <img
        src="https://today-obs.line-scdn.net/0hp5UYsXMWLxpoIDijnmdQTVB2I2tbRjUTSk5mfRkhc3hHDDxIXUJ8eR5zIzYVRGBLSE5gfk1zISJBFWpEUA/w1200"
        alt="Guiji Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【阿源楊桃紅茶】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>手工釀製的楊桃蜜搭配紅茶，在酸甜爽口中又帶點微鹹口感，清涼解膩，是夏季消暑的另一選擇。</p>
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
              src="https://cdn.myfeel-tw.com/media/O19LupQsCnF9S5DtjYGu2TLzxxmXeIANNStLRG4N.webp" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        <br /><br />

      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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

export default Guiji;

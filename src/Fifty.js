import React, { useState } from 'react';
import { Collapse, Divider } from 'antd';
import { Card } from 'antd';
import OatmealMilkTea from './OatmealMilkTea';
import FreshPomeloGreen from './FreshPomeloGreen';
import IcecreamBlacktea from './IcecreamBlacktea';
import ChocolateBallet from './ChocolateBallet';
import { Routes, Route, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const text1 = `
1995年，馬氏將攤位取名為「50嵐」，
並將販售重心轉移至茶飲，後期停止銷售果汁。 
1997年，馬氏籌備開設創始店，
第一間模範店（新孝店）成立於臺南市新孝路。
`

const text2 = ` 
「50嵐(南區)」的4個縣市門市，
將於6/1起調漲部分價格，
除了「純茶」這品項價格不變，
其餘的飲品皆「調漲5元」。
`;

const text3 = `
！50嵐這次與雀巢聯名出了「限量品牌環保袋」，
分別有「陪你四季款」、「週年紀念款」、「趣味選擇款」三種喔。
`;;


const Fifty = () => {
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
          src="https://petit-tw.jp/wp-content/uploads/2019/02/DSC09314.jpg"
          alt="Fifty Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}>

        </div>
      </div>
      <br /><br />
      <h4>☆熱門推薦☆</h4>
      <br /><br />

      <img
        src="https://images-tw.girlstyle.com/wp-content/uploads/2021/05/5ed3c140.gif?auto=format&w=1053"
        alt="Fifty Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />

      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【1號】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>四季春青茶加上珍珠、波霸及椰果，不到60元就能一次吃到三種料，</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>解膩又有飽足感，咀嚼系必嚐，原為北部隱藏版菜單，現在中南部也可以喝到啦！</p>

      <br /><br /><br /><br />
      
      <img
        src="https://static.popdaily.com.tw/u/202102/8b1eb020-7a21-4da9-80fe-5fff6bca402f.jpg"
        alt="Fifty Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【旺來紅茶】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>雖然天氣還在忽冷忽熱，但春天的腳步已經慢慢靠近，春季推薦的旺來系列悄悄回歸！</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>添加100%鳳梨汁的旺來紅茶，熱愛酸甜果茶系的朋友可以出發了！</p>

      <br /><br /><br /><br />

      <img
        src="https://i.klog.tw/media_attachments/files/110/146/277/380/445/755/original/aac5d02da3e0c025.jpeg"
        alt="Fifty Image"
        style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '100%' }}
      />
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>【8冰綠】</p>
      <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>由金桔＋梅醬＋綠茶組成，富有獨特金桔香味，風味更強烈，適合夏天帶去海邊飲用 ~</p>
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
              src="https://photo.518.com.tw/selfmedia/articles/2220/169138987315030.jpeg" 
              style={{ width: '100%', maxWidth: '600px' }}
            />
          </div>
        )}

        <br /><br />

      </div>
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
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

export default Fifty;

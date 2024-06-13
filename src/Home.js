import './index.css';
import React, { useRef } from 'react';
import { Layout, theme, Carousel, Card } from 'antd';
import { Routes, Navigate, Route, useNavigate } from 'react-router-dom';

// import One from './One';
import Bobo from './Bobo';
import Nabe from './Nabe';
import Apple from './Apple';
import Bubble from './Bubble';
import One from './One';
import CheeseOolong from './CheeseOolong';
import Grape from './Grape';
import Pomelo from './Pomelo';

const { Content } = Layout;
const { Meta } = Card;


const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    console.log('Menu item clicked:', key);
  };

  return (
    <Layout>

      {/* <Content
        style={{
          padding: '0 48px',
        }}
      > */}
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
              position: 'relative',
            }}
          >
            <Carousel ref={carouselRef} arrows infinite={false}>
              <div>
                <img
                  src="https://cc.tvbs.com.tw/img/program/upload/2022/07/17/20220717151700-3ed77b3c.jpg"
                  alt="Slide 1"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <img
                  src="https://tb-static.uber.com/prod/image-proc/processed_images/a177875e59348c48ff525266439af0aa/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg"
                  alt="Slide 2"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <img
                  src="https://www.niusnews.com/upload/posts/posts_image3_125795_1684743955.jpg"
                  alt="Slide 3"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <img
                  src="https://live.staticflickr.com/65535/51400550557_cf84f766cd_c.jpg"
                  alt="Slide 4"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <img
                  src="https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202305/64521742EC5C11683101506.jpeg"
                  alt="Slide 5"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </Carousel>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <h4>☆熱門推薦☆</h4>
            </div>
            
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
            {/* 草莓果粒波波 */}
            <Routes>
              <Route path="/Bobo" element={<Bobo />} />
            </Routes>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src="https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202301/63C4EC34677CE1673849908.jpeg" style={{ height: '300px', objectFit: 'cover' }} />}
                onClick={() => navigate('/Bobo')}
              >
                <Meta title="#麻古" description="草莓果粒波波" />
              </Card>
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
            {/* 珍珠紅茶拿鐵 */}
            <Routes>
              <Route path="/Bubble" element={<Bubble />} />
            </Routes>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src="https://www.niusnews.com/upload/imgs/default/2023_NOV11_ARENA_11/milk/milk1.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
                onClick={() => navigate('/Bubble')}
              >
                <Meta title="#迷客夏" description="珍珠紅茶拿鐵" />
              </Card>
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
            {/* 芝士奶蓋春烏龍 */}
            <Routes>
              <Route path="/CheeseOolong" element={<CheeseOolong />} />
            </Routes>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src="https://img.huablog.tw/uploads/20220817131659_29.jpg" style={{ height: '300px', objectFit: 'cover' }} />}
                onClick={() => navigate('/CheeseOolong')}
              >
                <Meta title="#得正" description="芝士奶蓋春烏龍" />
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
                cover={<img alt="example" src="https://s.yimg.com/ny/api/res/1.2/0p9yIZtNMeogBmkmYycHzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTYzMA--/https://media.zenfs.com/en/marieclaire.tw/ccec4cc984d4a7383118d6c9a8589f46" style={{ height: '300px', objectFit: 'cover' }} />}
                onClick={() => navigate('/Grape')}
              >
                <Meta title="#麻古" description="芝芝葡萄果粒" />
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
            </div>
          </Content>
        </Layout>
      {/* </Content> */}

      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Guiji" element={<Navigate replace to="/Guiji" />} />
        <Route path="/Fifty" element={<Navigate replace to="/Fifty" />} />
        <Route path="/DZ" element={<Navigate replace to="/DZ" />} />
        <Route path="/Milk" element={<Navigate replace to="/Milk" />} />
        <Route path="/MaKu" element={<Navigate replace to="/MaKu" />} />
      </Routes>

    </Layout>
  );
};

export default Home;

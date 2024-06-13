// App.js
import './index.css';
import React, { useRef } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Card } from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Guiji from './Guiji';
import YuHeBao from './YuHeBao';
import PurpleGrapeAloe from './PurpleGrapeAloe';
import Xiushui from './Xiushui';
import Home from './Home';
import DZ from './DZ';
import SpringOolong from './SpringOolong';
import GoldenBubble from './GoldenBubble';
import HongJiMilkTea from './HongJiMilkTea';
import CheeseMatcha from './CheeseMatcha';
import Fifty from './Fifty';
import OatmealMilkTea from './OatmealMilkTea';
import FreshPomeloGreen from './FreshPomeloGreen';
import IcecreamBlacktea from './IcecreamBlacktea';
import ChocolateBallet from './ChocolateBallet';
import Maku from './Maku';
import Strawberry from './Strawberry';
import TaroBobo from './TaroBobo';
import Mango from './Mango';
import Milk from './Milk';
import EarlGreyMilkTea from './EarlGreyMilkTea';
import TraditionalBlackTeaLatte from './TraditionalBlackTeaLatte';
import AmberOolong from './AmberOolong';
import Bobo from './Bobo';
import Nabe from './Nabe';
import Apple from './Apple';
import Bubble from './Bubble';
import One from './One';
import CheeseOolong from './CheeseOolong';
import Grape from './Grape';
import Pomelo from './Pomelo';


const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    console.log('Menu item clicked:', key);
    if (key === '首頁') {
      navigate('/Home');
    } else if (key === '龜記') {
      navigate('/Guiji');
    } else if (key === '五十嵐') {
      navigate('/Fifty');
    } else if (key === '得正') {
      navigate('/DZ');
    } else if (key === '迷客夏') {
      navigate('/Milk');
    } else if (key === '麻古') {
      navigate('/Maku');
    }
  };


  const items1 = ['首頁', '龜記', '五十嵐', '得正', '迷客夏', '麻古'].map((key) => ({
    key,
    label: `# ${key}`,
    onClick: () => handleMenuClick(key),
  }));

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
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
            <Routes>
              <Route path="/" element={<Navigate replace to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Guiji" element={<Guiji />} />
              <Route path="/YuHeBao" element={<YuHeBao />} />
              <Route path="/PurpleGrapeAloe" element={<PurpleGrapeAloe />} />
              <Route path="/Xiushui" element={<Xiushui />} />
              <Route path="/Fifty" element={<Fifty />} />
              <Route path="/OatmealMilkTea" element={<OatmealMilkTea />} />
              <Route path="/FreshPomeloGreen" element={<FreshPomeloGreen />} />
              <Route path="/IcecreamBlacktea" element={<IcecreamBlacktea />} />
              <Route path="/ChocolateBallet" element={<ChocolateBallet />} />
              <Route path="/DZ" element={<DZ />} />
              <Route path="/SpringOolong" element={<SpringOolong />} />
              <Route path="/GoldenBubble" element={<GoldenBubble />} />
              <Route path="/HongJiMilkTea" element={<HongJiMilkTea />} />
              <Route path="/CheeseMatcha" element={<CheeseMatcha />} />
              <Route path="/Milk" element={<Milk />} />
              <Route path="/EarlGreyMilkTea" element={<EarlGreyMilkTea />} />
              <Route path="/TraditionalBlackTeaLatte" element={<TraditionalBlackTeaLatte />} />
              <Route path="/AmberOolong" element={<AmberOolong />} />
              <Route path="/Maku" element={<Maku />} />
              <Route path="/Strawberry" element={<Strawberry />} />
              <Route path="/TaroBobo" element={<TaroBobo />} />
              <Route path="/Mango" element={<Mango />} />
              <Route path="/Bobo" element={<Bobo />} />
              <Route path="/Nabe" element={<Nabe />} />
              <Route path="/Apple" element={<Apple />} />
              <Route path="/Bubble" element={<Bubble />} />
              <Route path="/One" element={<One />} />
              <Route path="/CheeseOolong" element={<CheeseOolong />} />
              <Route path="/Grape" element={<Grape />} />
              <Route path="/Pomelo" element={<Pomelo />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by 梁雅涵 & 陳歆媃
      </Footer>
    </Layout>
  );
};

export default App;

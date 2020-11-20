import React from 'react';
import GlobalStyle from './styles/global';
import Title from './pages/Title';
import TopInfo from './pages/TopInfo';
import Description from './pages/Description';

const App: React.FC = () => (
  <>
    <Title />
    <TopInfo />
    <Description />
    <GlobalStyle />
  </>
);
export default App;

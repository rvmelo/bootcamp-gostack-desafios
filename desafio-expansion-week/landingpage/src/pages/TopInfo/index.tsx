import React from 'react';
import { MainInfoContainer } from './styles';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';

const TopInfo: React.FC = () => (
  <MainInfoContainer>
    <SectionOne />
    <SectionTwo />
  </MainInfoContainer>
);

export default TopInfo;

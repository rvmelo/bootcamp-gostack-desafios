/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { SectionContainer } from './styles';
import { Benefit, benefits } from './data';

const SectionOne: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [benefit, setBenefit] = useState<Benefit | null>();

  const handleBenefitClick = (data: Benefit) => {
    setIsOpen(true);
    setBenefit(data);
  };

  return (
    <>
      <SectionContainer>
        <ul>
          <li onClick={() => handleBenefitClick(benefits[0])}>Maior capacidade de adaptação </li>
          <li onClick={() => handleBenefitClick(benefits[1])}>Pensamento positivo</li>
          <li onClick={() => handleBenefitClick(benefits[2])}>
            Capacidade de vencer momentos de crise
          </li>
          <li onClick={() => handleBenefitClick(benefits[3])}>
            Aprender mais com as experiências de vida
          </li>
          <li onClick={() => handleBenefitClick(benefits[4])}>Saber se defender melhor</li>
          <li onClick={() => handleBenefitClick(benefits[5])}>Maior autoestima</li>
          <li onClick={() => handleBenefitClick(benefits[6])}>
            Criação de relacionamentos saudáveis
          </li>
          <li onClick={() => handleBenefitClick(benefits[7])}>Ganho de criatividade</li>
        </ul>
      </SectionContainer>

      <Modal
        isOpen={isOpen}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1>{benefit?.title}</h1>
        <p>{benefit?.text}</p>
      </Modal>

    </>
  );
};

export default SectionOne;

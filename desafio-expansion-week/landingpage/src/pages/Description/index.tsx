import React, { useState } from 'react';
import Modal from 'react-modal';
import { DescriptionContainer } from './styles';
import data from './data';

const Description:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DescriptionContainer>

      <p>
        A resiliência é a capacidade do indivíduo lidar com problemas, adaptar-se a mudanças,
        superar obstáculos ou resistir à pressão de situações adversas - choque, stresse,
        algum tipo de evento traumático, entre outros. Sem entrar em surto psicológico, emocional
        ou físico, por encontrar soluções estratégicas para enfrentar e superar as adversidades.
        Nas organizações, a resiliência se trata de uma tomada de decisão quando
        alguém se depara com um contexto entre a tensão do ambiente e a vontade de vencer.
        Essas decisões propiciam forças estratégicas na pessoa para enfrentar a adversidade.
        Manter a imunidade mental é a base para criar resiliência emocional. O indivíduo condiciona
        a mente a tolerar os pensamentos assustadores e consegue esquivar-se do sofrimento ao
        entender que a dor fará, inevitavelmente, parte da trajetória da vida.
      </p>
      <button type="button" onClick={() => setIsOpen(true)}>Leia Mais</button>
      <Modal
        isOpen={isOpen}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1>O Poder da Resiliencia</h1>
        <iframe
          title="Resilience"
          width="80%"
          height="80%"
          frameBorder="0"
          src="https://www.youtube.com/embed/NWH8N-BvhAw"
        />
        <p>{data.text}</p>

      </Modal>
    </DescriptionContainer>
  );
};

export default Description;

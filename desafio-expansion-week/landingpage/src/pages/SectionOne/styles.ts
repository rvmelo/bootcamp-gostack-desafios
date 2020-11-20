import styled from 'styled-components';

export const SectionContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;

ul {
  margin-top: 20px;
  list-style-type: none;
  width: 80%;
  li {
    border: 1px solid #808080;
    background: black;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: transform 0.2s;
    text-align: center;

    &:hover {
      transform: translateX(20px);
      cursor: pointer;
    }

  }
}

`;

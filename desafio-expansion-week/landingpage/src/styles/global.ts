import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: url('https://i.pinimg.com/originals/e5/59/c5/e559c582fa17ad0f7672cd45e972b434.jpg');
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 20px Goldman sans-serif;
  color: #22b455
}

button {
  border: #808080 solid 1px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  background: #020204;
  transition: background 0.2s;
  font-family: Matrix;
  font-weight: bold;

  &:hover {
    background: #22b455;
  }

}

#root {
  display: flex;
  flex-direction: column;
}

button {
  cursor: pointer;
}

.Modal {
  background: rgb(2,2,4, 0.8);
  width: 35%;
  flex: 1;
  border: #808080 solid 1px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    color: white;
  }

  p {
    text-align: center;
  }

  iframe {
    margin-bottom: 50px;
    margin-top: 30px;
  }

}

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0,0,0,0.5);
}

img {
  width: 100%;
  height: 300px;
}

`;

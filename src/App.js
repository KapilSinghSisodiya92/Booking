import React from 'react';
import Home from './Component/src/Home';
import Header from './Component/src/Header';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #e1e5ea;
  display:flex;
  flex-direction:column;
`

function App() {
  return (
    <AppContainer className="app">
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;

import React from 'react';
import styled from '@emotion/styled';
import './App.css';

function App() {
  return (
    <div>
      <H1 useTheTheme align="right">
        NPMM
      </H1>
    </div>
  );
}

const H1 = styled.h1`
  text-align: ${(props) => props.align || 'center'};
  color: ${(props) => props.useTheTheme && props.theme.color};
`;

// text-align: if a prop is passed in, align that way, if not, default to center
// color: if a useTheTheme prop is passed, access the theme color, else: normal

export default App;

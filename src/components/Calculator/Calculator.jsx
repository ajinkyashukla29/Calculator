import React, {Component} from 'react'
import styled from  'styled-components';

import ArithmeticControls from './ArithmeticControls'
import Display from './Display';
import MemoryControls from './MemoryControls';
import MemoryPanel from './MemoryPanel';
import Numpad from './Numpad';
import ResetControls from './ResetControls';
import KeyboardEvents from './KeyboardEvents';

class Calculator extends Component {
  render() {
    return (
      <Container>
        <LeftPanel>
          <Display />
          <UpperLeft>
            <ResetControls />
            <MemoryControls />
          </UpperLeft>
          <LowerLeft>
            <Numpad />
            <ArithmeticControls />
          </LowerLeft>
        </LeftPanel>
        <RightPanel>
          <MemoryPanel />
        </RightPanel>
        <KeyboardEvents />
      </Container>
    )
  }
}

export default Calculator;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  border: 1px solid black;
`

const LeftPanel = styled.div`
  flex: 4;
  flex-direction: column;
`

const RightPanel = styled.div`
  flex: 1;
  display: none;
` 

const UpperLeft = styled.div`
  flex: 1;
  font-size: 24px;
`

const LowerLeft = styled.div`
  display: flex
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly
  font-size: 24px;
`

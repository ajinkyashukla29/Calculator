import React, {Component} from 'react';
import styled from  'styled-components';
import { connect } from "react-redux";

import { op, operation } from './actions/actions';

class Numpad extends Component {

  constructor(props) {
    super(props)
    this.numKey = this.numKey.bind(this)
  }

  numKey(key) {
    this.props.op(key)
  }

  render() {
    return (
      <NumpadContainer>
        <Row>
          <StyledDiv onClick={() => this.numKey(7)}>7</StyledDiv>
          <StyledDiv onClick={() => this.numKey(8)}>8</StyledDiv>
          <StyledDiv onClick={() => this.numKey(9)}>9</StyledDiv>
        </Row>
        <Row>
          <StyledDiv onClick={() => this.numKey(4)}>4</StyledDiv>
          <StyledDiv onClick={() => this.numKey(5)}>5</StyledDiv>
          <StyledDiv onClick={() => this.numKey(6)}>6</StyledDiv>
        </Row>
        <Row>
          <StyledDiv onClick={() => this.numKey(1)}>1</StyledDiv>
          <StyledDiv onClick={() => this.numKey(2)}>2</StyledDiv>
          <StyledDiv onClick={() => this.numKey(3)}>3</StyledDiv>
        </Row>
        <Row>
          <StyledDiv onClick={() => this.numKey('.')}>.</StyledDiv>
          <StyledDiv onClick={() => this.numKey(0)}>0</StyledDiv>
          <StyledDiv onClick={() => this.props.operation('EQUAL')}>=</StyledDiv>
        </Row>
      </NumpadContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    op: key => dispatch(op(key)),
    operation: (operator) => dispatch(operation(operator)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numpad);

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly
`
const NumpadContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4
`
const StyledDiv = styled.div `
  padding: 20px;
  background-color: black;
  width: 100%;
  color: white;
  border: 1px solid white;
  text-align: center;
`

import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {operation} from './actions/actions';

class ArithmeticControls extends Component {

  constructor(props) {
    super(props)
    this.handleOperation = this.handleOperation.bind(this)
  }

  handleOperation(operator) {
    return this.props.operation(operator)
  }

  render() {
    return (
      <Column>
        <StyledDiv onClick={() => this.handleOperation('ADD')}>+</StyledDiv>
        <StyledDiv onClick={() => this.handleOperation('SUBTRACT')}>-</StyledDiv>
        <StyledDiv onClick={() => this.handleOperation('MULTIPLY')}>*</StyledDiv>
        <StyledDiv onClick={() => this.handleOperation('DIVIDE')}>/</StyledDiv>
      </Column>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    operation: (operator) => dispatch(operation(operator))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArithmeticControls)

const StyledDiv = styled.div `
  padding: 20px;
  background-color: black;
  color: white;
  border: 1px solid white;
  text-align: center;
`
const Column = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
`

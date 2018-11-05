import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {
  memoryClear, 
  memoryStore, 
  memoryRetrieve, 
  memoryAdd, 
  memorySubtract 
} from './actions/actions'

class MemoryControls extends Component {
  render() {
    return (
      <Row>
        <StyledDiv onClick={this.props.memoryClear}>MC</StyledDiv>
        <StyledDiv onClick={this.props.memoryRetrieve}>MR</StyledDiv>
        <StyledDiv onClick={this.props.memoryStore}>MS</StyledDiv>
        <StyledDiv onClick={this.props.memoryAdd}>M+</StyledDiv>
        <StyledDiv onClick={this.props.memorySubtract}>M-</StyledDiv>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    memoryClear: () => dispatch(memoryClear()),
    memoryStore: () => dispatch(memoryStore()),
    memoryRetrieve: () => dispatch(memoryRetrieve()),
    memoryAdd: () => dispatch(memoryAdd()),
    memorySubtract: () => dispatch(memorySubtract())
  }
}

export default connect(null, mapDispatchToProps)(MemoryControls)

const Row = styled.div `
  display: flex;
  justify-content: space-evenly;
`

const StyledDiv = styled.div `
  padding: 20px;
  background-color: black;
  width: 100%;
  color: white;
  border: 1px solid white;
  text-align: center;
`

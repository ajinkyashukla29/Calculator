import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {clear, clearEntry, backspace} from './actions/actions';

class ResetControls extends Component {
  render() {
    return (
      <Row>
        <StyledDiv onClick={this.props.clearEntry}>CE</StyledDiv>
        <StyledDiv onClick={this.props.clear}>C</StyledDiv>
        <StyledDiv onClick={this.props.backspace}>Backspace</StyledDiv>
      </Row>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clear()),
    clearEntry: () => dispatch(clearEntry()),
    backspace: () => dispatch(backspace())
  }
}

export default connect(null, mapDispatchToProps)(ResetControls);

const Row = styled.div`
  display: flex;
  flex-container: row;
  justify-content: space-evenly
`
const StyledDiv = styled.div `
  padding: 20px;
  background-color: black;
  width: 100%;
  color: white;
  border: 1px solid white;
  text-align: center;
`

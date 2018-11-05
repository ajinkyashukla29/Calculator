import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <StyledDisplay>
        <Result>{this.props.result}</Result>
        <Memory>{this.props.memory}</Memory>
      </StyledDisplay>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state && state.display,
    memory: state && state.memory
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);

const StyledDisplay = styled.div`
  height: 180px;
  background-color: lightgray;
  position: relative;
`

const Result = styled.div `
  font-size: 120px
  text-align: right
  padding-right: 20px
`

const Memory = styled.div `
  font-size: 30px;
  padding-left: 20px;
  position: absolute;
  bottom: 0;
`
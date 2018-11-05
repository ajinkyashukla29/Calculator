import {Component} from 'react';
import { connect } from 'react-redux';
import { op, operation, backspace, equal } from './actions/actions';

class KeyboardEvents extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown(event) {
    console.log(event.keyCode)
    if(event.keyCode >= 96 && event.keyCode <= 105)
      this.props.op(event.keyCode-96)
    else if(event.keyCode >= 48 && event.keyCode <= 57)
      this.props.op(event.keyCode-48)
    else  { 
      switch(event.keyCode) {
        case 107: return this.props.operation('ADD');
        case 109: return this.props.operation('SUBTRACT');
        case 106: return this.props.operation('MULTIPLY');
        case 111: return this.props.operation('DIVIDE');
        case 8: return this.props.backspace();
        case 190: return this.props.op('.');
        case 13: return this.props.operation('EQUAL')
      };
    }
  }
  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    op: key => dispatch(op(key)),
    operation: (operator) => dispatch(operation(operator)),
    backspace: () => dispatch(backspace()),
    equal: () => dispatch(equal())
  }
}

export default connect(null, mapDispatchToProps)(KeyboardEvents)

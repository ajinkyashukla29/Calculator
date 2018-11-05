function calculator(state={
    result:0, 
    op: '', 
    prevOperator: '',
    memory: 0,
    display: ''
  }, 
  action
  ) {
    if(state.op === "" && action.type === 'OPERATION')
      Object.assign(
          {}, 
          state, 
          {
            prevOperator: action.operator
          }
        )
    switch(action.type) {
      case 'OPERATION' || 'EQUAL': {
        switch(state.prevOperator) {
          case 'ADD':
            return Object.assign(
              {}, 
              state, 
              {
                result: Number(state.result) + Number(state.op), 
                op:'',
                prevOperator: action.operator,
                display: Number(state.result) + Number(state.op)
              }
            )
          case 'SUBTRACT':
            return Object.assign(
              {}, 
              state, 
              {
                result: Number(state.result) - Number(state.op), 
                op:'',
                prevOperator: action.operator,
                display: Number(state.result) - Number(state.op)
              }
            )
          case 'MULTIPLY':
            if(state.op !== "") { 
              return Object.assign(
                {}, 
                state, 
                {
                  result: Number(state.result) * Number(state.op), 
                  op:'',
                  prevOperator: action.operator,
                  display: Number(state.result) * Number(state.op)
                }
              )
            }
            else
              return state
          case 'DIVIDE':
            if(state.op !== "") {
              return Object.assign(
                {}, 
                state, 
                {
                  result: Number(state.result) / Number(state.op), 
                  op:'',
                  prevOperator: action.operator,
                  display: Number(state.result) / Number(state.op)
                }
              )
            }
            else
              return state
          default:
            if(state.prevOperator !== 'EQUAL')
              return Object.assign(
                  {}, 
                  state, 
                  {
                    prevOperator: action.operator,
                    result: state.op,
                    op: '',
                  }
                )
            else
              return Object.assign(
                {}, 
                state, 
                {
                  prevOperator: action.operator,
                }
              )
          }
      }
      case 'OP':
        return Object.assign({}, state, {op: state.op + action.number, display: state.op + action.number})
      case 'CLEAR':
        return Object.assign({}, state, {result: 0, op: '', display: '', prevOperator: ''})
      case 'CLEAR_ENTRY':
        return Object.assign({}, state, {op: '', display: ''})
      case 'BACKSPACE':
        return Object.assign({}, state, {op: state.op.slice(0, -1), display: state.op.slice(0, -1)})
      case 'MEMORY_CLEAR':
        return Object.assign({}, state, {memory: 0})
      case 'MEMORY_STORE':
        return Object.assign({}, state, {memory: state.op === '' ? state.result: state.op})
      case 'MEMORY_RETRIEVE':
        return Object.assign({}, state, {op: String(state.memory), display: state.memory})
      case 'MEMORY_ADD':
        return Object.assign(
          {}, 
          state, 
          {memory: Number(state.memory) + (state.op !== '' ? Number(state.op): Number(state.result))}
        )
      case 'MEMORY_SUBTRACT':
        return Object.assign(
          {}, 
          state, 
          {memory: state.memory - (state.op !== '' ? Number(state.op): state.result)}
        )
      case 'EQUAL':
          return Object.assign(
            {},
            state,
            {
              result: state.op !== '' && state.prevOperator !== '' ? state.result + Number(state.op) : state.result,
              display: state.op !== '' && state.prevOperator !== '' ? state.result + Number(state.op) : state.result,
              op: ''
            }
          )
      default:
            return state
    }
}

export default calculator;

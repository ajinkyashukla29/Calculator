export function op(number) {
  return {type: 'OP', number: number}
}

export function operation(operator) {
  return {type: 'OPERATION', operator: operator}
}

export function clearEntry() {
  return {type: 'CLEAR_ENTRY'}
}

export function clear() {
  return {type: 'CLEAR'}
}

export function backspace() {
  return {type: 'BACKSPACE'}
}

export function memoryClear() {
  return {type: 'MEMORY_CLEAR'}
}

export function memoryStore() {
  return {type: 'MEMORY_STORE'}
}

export function memoryRetrieve() {
  return {type: 'MEMORY_RETRIEVE'}
}

export function memoryAdd() {
  return {type: 'MEMORY_ADD'}
}

export function memorySubtract() {
  return {type: 'MEMORY_SUBTRACT'}
}

export function equal() {
  return {type: 'EQUAL'}
}
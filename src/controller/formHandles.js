// Handle input onChange
export const handleInput = (e, state, setState) => {
  setState({
    ...state,
    [e.target.id]: e.target.value,
  });
};

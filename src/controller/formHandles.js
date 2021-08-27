// Handle input onChanfe
const onChange = (e, state, setState) => {
  setState({
    ...state,
    [e.target.id]: e.target.value,
  });
};

export default { onChange };

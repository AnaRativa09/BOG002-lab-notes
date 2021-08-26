// Handle input onChanfe
const onChange = (e, user, setUser) => {
  setUser({
    ...user,
    [e.target.id]: e.target.value,
  });
};

export default { onChange };

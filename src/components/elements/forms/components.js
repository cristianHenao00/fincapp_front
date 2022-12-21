const Component = (actions, cell, index) => {
  return actions[index](cell);
};

export default Component;

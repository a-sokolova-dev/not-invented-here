const debounce = (fn, time = 3000) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), time);
  };
};

export default debounce;

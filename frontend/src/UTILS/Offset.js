const Offset = (start = -11.5, end = 12) => {
  let offset = [];
  for (let i = start; i < end; i = i + 0.5) {
    offset.push(i);
  }
  return offset;
};
export default Offset;

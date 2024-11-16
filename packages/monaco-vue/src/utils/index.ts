export const isNumber = (val: any): val is number => {
  return (
    typeof val === 'number' ||
    (Object.prototype.toString.call(val) === '[object Number]' && typeof val === 'object' && val)
  );
};

export const cssProperty = (val: string | number) => {
  if (isNumber(val)) {
    return val + 'px';
  }
  return val;
};

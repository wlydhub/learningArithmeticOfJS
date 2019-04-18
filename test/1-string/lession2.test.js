import subStr from '../../code/1-string/lession2';

test('subStr(00110011)', () => {
  expect(subStr('00110011')).toEqual(["0011", "01", "1100", "10","0011", "01"]);
});

test('subStr(10101)', () => {
  expect(subStr('10101')).toEqual(["10", "01", "10", "01"]);
});
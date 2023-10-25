function FindOdd(number) {
  let oddNum = 0;
  const countDup = {};
  for (let item of number) {
    countDup[item] = (countDup[item] || 0) + 1;
  }

  for (let [key, item] of Object.entries(countDup)) {
    if (item % 2 !== 0) {
      oddNum = parseInt(key);
    }
  }
  return oddNum;
}

test('Find the odd int', () => {    
  const odd1 = FindOdd([7]);
  expect(odd1).toBe(7);

  const odd2 = FindOdd([0]);
  expect(odd2).toBe(0);

  const odd3 = FindOdd([1, 1, 2]);
  expect(odd3).toBe(2);

  const odd4 = FindOdd([0, 1, 0, 1, 0]);
  expect(odd4).toBe(0);

  const odd5 = FindOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
  expect(odd5).toBe(4);
});

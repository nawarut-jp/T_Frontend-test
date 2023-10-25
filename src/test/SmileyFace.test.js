function SmileyFace(faceArray) {
  return faceArray.filter((item) => /[;:][-~]?[D)]/.test(item)).length;
}

test('Find the Smiley Face', () => {
  const smiley1 = SmileyFace([':)', ';(', ';}', ':-D']);
  expect(smiley1).toBe(2);

  const smiley2 = SmileyFace([';D', ':-(', ':-)', ':~)']);
  expect(smiley2).toBe(3);

  const smiley3 = SmileyFace([';]', ':[', ';*', ':$', ':-D']);
  expect(smiley3).toBe(1);
  
  const smiley4 = SmileyFace([]);
  expect(smiley4).toBe(0);

});

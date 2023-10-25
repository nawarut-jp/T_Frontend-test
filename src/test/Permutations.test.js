function Permutations(inputArr) {
    const newValue = [],
    joinTxt = [];
  const shuffling = (array, joinTxt) => {
    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        let arrCurrent = array.slice();
        let nextTxt = arrCurrent.splice(i, 1);
        shuffling(arrCurrent.slice(), joinTxt.concat(nextTxt));
      }
    } else {
      newValue.push(joinTxt.join(''));
    }
  };
  shuffling([...inputArr], joinTxt);
  return [...new Set(newValue)];
}

test('Find the Permutator', () => {
  const permutator1 = Permutations('a');
  expect(permutator1).toEqual(['a']);

  const permutator2 = Permutations('ab');  
  expect(permutator2).toEqual(['ab','ba']);

  const permutator3 = Permutations('abc');
  expect(permutator3).toEqual(['abc','acb','bac','bca','cab','cba']);

  const permutator4 = Permutations('aabb');
  expect(permutator4).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
});

var words = ["ground", "control", "to", "major", "tom"];

function map(words, fnc) {
  var arr = [];
  for (var word in words) {
  arr.push(fnc(words[word]))
  }
};
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


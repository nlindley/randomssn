module.exports.generate = function generate() {
  return firstPart() + '-' + secondPart() + '-' + thirdPart();
};

function randomComponent(length, max) {
  var padding = '';
  while (padding.length < length) {
    padding += '0';
  }
  return (padding + Math.floor(Math.random()*max)).substr(length * -1);
}

function firstPart() {
  var part = randomComponent(3, 1000);
  while (part === '666') {
    part = randomComponent(3, 1000);
  }
  return part;
}

function secondPart() {
  return randomComponent(2, 100);
}

function thirdPart() {
  return randomComponent(4, 10000);
}

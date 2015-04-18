module.exports.generate = function generate() {
  return firstPart() + '-' + secondPart() + '-' + thirdPart();
};

function randomComponent(length, max) {
  var padding = '';
  var component = '';
  while (padding.length < length) {
    padding += '0';
  }

  do {
    component = (padding + Math.floor(Math.random()*max)).substr(length * -1);
  } while (component === padding);

  return component;
}

function firstPart() {
  var part;
  do {
    part = randomComponent(3, 900);
  } while (part === '666');
  return part;
}

function secondPart() {
  return randomComponent(2, 100);
}

function thirdPart() {
  return randomComponent(4, 10000);
}

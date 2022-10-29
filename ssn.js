module.exports.generate = function generate() {
  return firstPart() + '-' + secondPart() + '-' + thirdPart();
};

function randomComponent(length, max) {
  let component;
  do {
    component = Math.floor(Math.random() * max);
  } while (component === 0);

  return component.toString().padStart(length, '0');
}

function firstPart() {
  let part;
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

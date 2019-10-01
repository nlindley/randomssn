module.exports.generate = function generate() {
  return `${randomComponent(3, 900, '666')}-${randomComponent(2, 100)}-${randomComponent(4, 10000)}`;
};

function randomComponent(length, max, exclude) {
  const padding = '0'.padStart(length, '0');
  let component = '';

  do {
    component = (padding + Math.floor(Math.random() * max)).substr(length * -1);
  } while (component === padding || component === exclude);

  return component;
}

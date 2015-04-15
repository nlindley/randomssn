module.exports.generate = function generate() {
  var firstPart = ('000' + Math.floor(Math.random()*1000)).substr(-3);
  var secondPart = ('00' + Math.floor(Math.random()*100)).substr(-2);
  var thirdPart = ('0000' + Math.floor(Math.random()*10000)).substr(-4);
  return firstPart + '-' + secondPart + '-' + thirdPart;
};

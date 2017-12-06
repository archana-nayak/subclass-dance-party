var BouncyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(top, left, timeBetweenSteps);

};

BouncyDancer.prototype = Object.create(BlinkyDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  makeDancer.prototype.step(this);

  this.$node.toggle();
};
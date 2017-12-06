var BellyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(top, left, timeBetweenSteps);

};

BellyDancer.prototype = Object.create(BlinkyDancer.prototype);
BellyDancer.prototype.constructor = BellyDancer;

BellyDancer.prototype.step = function() {
  makeDancer.prototype.step(this);

  this.$node.toggle();
};
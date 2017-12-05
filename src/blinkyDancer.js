var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the
  // superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  // this.oldStep = this.step();
  
  this.$node = $('<span class="dancer"></span>');
 

  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.toggle();
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};
// makeBlinkyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new
//   // version of step
//   this.oldStep();

//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();

// };


// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
//
//   // we plan to overwrite the step function below, but we still want the
//   // superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//
//   var oldStep = blinkyDancer.step;
//
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new
//     // version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//
//   return blinkyDancer;
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this,top, left, timeBetweenSteps); //make call to parent
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
  console.log(makeDancer.prototype.step);
  // this.oldStep = makeDancer.step.bind(makeDancer,timeBetweenSteps);
  // this.oldStep = this.step.bind(makeDancer);
  console.log('this.step ', this.step); 
  // this.oldStep = this.step.bind(makeDancer);
  // console.log(this.oldStep);
  // this.step();
};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // console.log('In blinky dancer, timeBetweenSteps ' + this.timeBetweenSteps);
    // console.log('makeBlinkyDancer ',makeBlinkyDancer);
    // console.log('this ', this);
    console.log('makeBlinkyDancer.step', this.timeBetweenSteps)
    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
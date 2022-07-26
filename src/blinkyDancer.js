var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // call the makeDancer function with the argument this
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
};

// inherit the methods from makeDancer function
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// set the constructor to makeBlinkyDancer
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// methods - set the prototype

makeBlinkyDancer.prototype.step = function() {
  var fn;
  var c;
  if (arguments[0] === undefined) {
    fn = this.step;
    c = this;
  } else {
    fn = arguments[0].step;
    c = arguments[0];
  }

  // console.log('1: ', c);
  setTimeout(fn.bind(c), this.timeBetweenSteps);
  // console.log('2: ', c);

  c.$node.toggle();
  // this.$node.toggle();

  // // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // // toggle() is a jQuery method to show/hide the <span> tag.
  // // See http://api.jquery.com/category/effects/ for this and
  // // other effects you can use on a jQuery-wrapped html tag.
  // blinkyDancer.$node.toggle();
};

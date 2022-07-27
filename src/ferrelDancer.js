var makeWillDancer = function(top, left, timeBetweenSteps) {

  // call the makeCryptoDancer function with the argument this
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="cryptoDancer"><img src="img/crypto/bitcoin-btc-logo.png"></span>'); //
  // this.$node = $('<span class="dancer"></span>'); // <img class="crypto" src="img/crypto/bitcoin-btc-logo.png"
  // this.node.addClass('cryptoDancer);
  this.$node.append('<img src="img/will-ferrel.jpeg">');
  this.$node.removeClass('dancer').addClass('advancedDancer');
};

// inherit the methods from makeCryptoDancer function
makeWillDancer.prototype = Object.create(makeDancer.prototype);

// set the constructor to makeCryptoDancer
makeWillDancer.prototype.constructor = makeWillDancer;

// methods - set the prototype
makeWillDancer.prototype.step = function() {
  var fn;
  var c;
  if (arguments[0] === undefined) {
    fn = this.step;
    c = this;
  } else {
    fn = arguments[0].step;
    c = arguments[0];
  }

  setTimeout(fn.bind(c), this.timeBetweenSteps);
  c.$node.toggle();
};

makeWillDancer.prototype.lineUp = function() {
  console.log(window.dancers);

  // Pseudocode:
  // Iterate through window.dancer
  // call setPosition for each dancer
      // top is set to a constant
      // increment left by x pixels every time
};
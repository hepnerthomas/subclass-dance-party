var makeCryptoDancer = function(top, left, timeBetweenSteps) {

  // call the makeCryptoDancer function with the argument this
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="cryptoDancer"><img src="img/crypto/bitcoin-btc-logo.png"></span>'); //
  // this.$node = $('<span class="dancer"></span>'); // <img class="crypto" src="img/crypto/bitcoin-btc-logo.png"
  // this.node.addClass('cryptoDancer);
  this.$node.append('<img src="img/bitcoin-btc-logo.png">'); // class="crypto"
  this.$node.removeClass('dancer').addClass('advancedDancer');
};

// inherit the methods from makeCryptoDancer function
makeCryptoDancer.prototype = Object.create(makeDancer.prototype);

// set the constructor to makeCryptoDancer
makeCryptoDancer.prototype.constructor = makeCryptoDancer;

// methods - set the prototype
makeCryptoDancer.prototype.step = function() {
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


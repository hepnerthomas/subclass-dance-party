describe('dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function', function() {
  //   //sinon.spy(dancer.$node, 'toggle');
  //   dancer.step();
  //   expect(dancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer, 'step');

      expect(dancer.step.callCount).to.be.equal(0);
      // console.log(Date.now());
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // console.log(Date.now());
      //clock.tick(timeBetweenSteps);
      // console.log(Date.now());

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
});

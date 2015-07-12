var myClass = {
	doTimeout: function(callback) {
		setTimeout(callback, 1000);
	},
	hide: function() {
		$("#hideMe").fadeOut();
	}
}

describe("timers", function() {
	var spy;
	var callback = function() {
		console.log('callback called');
	};

	beforeEach(function() {
		$("#hideMe").show();
		spy = sinon.spy(callback);
	});

	it('should be able to handle timeouts', function(){
		var clock = sinon.useFakeTimers();

		myClass.doTimeout(spy);
		clock.tick(1010);

		expect(spy.called).toBe(true);
		clock.restore();
	});

	it('should be able to handle ui animations', function(){
		var clock = sinon.useFakeTimers();

		myClass.hide();
		clock.tick(1010);

		expect($('#hideMe:visible').length).toBe(0);
		clock.restore();
	});

	it('should be able to fake dates', function(){
		var initialDate = 1234567890123;
		var clock = sinon.useFakeTimers(initialDate);

		var date1 = Date.now();
		console.log(date1);
		clock.tick(1000);
		var date2 = Date.now();
		console.log(date2);

		clock.restore();
	});



});

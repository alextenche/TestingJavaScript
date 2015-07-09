describe('my first suite', function(){

	mocha.setup({ignoreLeaks: true})
	//mocha.setup({globals: ['i']});
	
	beforeEach(function(){
		console.log('setup');
	});

	afterEach(function(){
		console.log('teardown');
	});

	before(function(){
		console.log('before');
	});

	after(function(){
		console.log('after');
	});

	it('should be my first test', function(){
		expect(1).to.equal(1);
		console.log('first test');
	});

	describe('inner suite', function(){

		it('should be my second test', function(){
			i = 3;
			expect(2).to.equal(2);
			console.log('second test');
		});
	});

});
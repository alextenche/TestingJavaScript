suite('my first suite', function(){

	setup(function(){
		console.log('setup');
	});

	teardown(function(){
		console.log('teardown');
	});

	before(function(){
		console.log('before');
	});

	after(function(){
		console.log('after');
	});

	test('test 1', function(){
		expect(1).to.equal(1);
		console.log('test 1');
	});

	test('test 2', function(){
		expect(1).to.equal(1);
		console.log('test 2');
	});

	suite('inner suite', function(){
		test('test 3', function(){
		expect(2).to.equal(2);
		console.log('test 3');
	});
	});
});
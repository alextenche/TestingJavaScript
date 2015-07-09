
describe("Spies", function() {


	it("should create a spy object", function() {
		var spy = jasmine.createSpyObj('mySpy', ['getName', 'save']);
		spy.getName.andReturn("alex");
		spy.save.andCallFake(function() { console.log('save called');});

		expect(spy.getName()).toEqual("alex");
		spy.save();
		expect(spy.save).toHaveBeenCalled();
	});

	
	

});


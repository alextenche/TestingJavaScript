function callMyCallback(callback) {
	callback();
}

describe("Spies", function() {
  
  it("should spy on a callback", function() {
  	var spyCB = jasmine.createSpy('myspy');
  	callMyCallback(spyCB);
  	expect(spyCB).toHaveBeenCalled();
  });
  
});


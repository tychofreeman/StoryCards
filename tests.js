var john, beforeCallbackTest, afterCallbackTest;

describe("SpecIt with a before callback", function() {
  var jane = {name: "Jane"};

  before(function() {
    beforeCallbackTest = true;
    john = {name: "John Doe"};
  });

  it("should support before", function() {
    ok(beforeCallbackTest);
    equal(afterCallbackTest, undefined);
  });

  it("should run before every test", function() {
    john.name = "Wrong name";
    jane.age = 26;
  });

  it("should run before every test", function() {
    equals(john.name, "John Doe");
  });

  it("should not know attributes from another before callback", function() {
    equals(john.age, undefined);
  });

  it("should not modify attributes on a local object if untouched in before", function() {
    equals(jane.age, 26);
  });
});

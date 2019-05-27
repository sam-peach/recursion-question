"use strict";

describe("isPalindrome", function() {
  it("returns a boolean value", function() {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("kayak")).toBe(true);
    expect(isPalindrome("sandwich")).toBe(false);
  });

  it("can take complex sentences", function() {
    expect(isPalindrome("Do geese see God")).toBe(true);
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
    expect(isPalindrome("Murder for a jar of red rum")).toBe(true);
    expect(isPalindrome("Hello world")).toBe(false);
    expect(isPalindrome("Racecar is racear backwards")).toBe(false);
  });

  it("makes recursive calls", function() {
    spyOn(window, "isPalindrome").and.callThrough();
    isPalindrome("racecar");
    expect(isPalindrome.calls.count()).toBeGreaterThan(1);
  });
});

const { getGreeting, all_the_math } = require("./project")

test("can create a basic greeting", () => {
  expect(getGreeting("Sam")).toBe("Hi Sam")
})
test("Testing Multiplication skills of the computer", () => {
  expect(all_the_math(4, 6)).toBe(24)
})

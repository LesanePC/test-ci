import healthBarColor from "../healthBar";

test.each([
  ["charClass", 51, "healthy"],
  ["charClass", 15, "wounded"],
  ["charClass", 14, "critical"],
])("should calculate %c %h health as %r", (_, healthAmount, expected) => {
  const result = healthBarColor("", healthAmount);

  expect(result).toBe(expected);
});

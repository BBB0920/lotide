const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    return console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "lighthouse labs");
assertEqual(1, "1");
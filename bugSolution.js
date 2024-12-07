function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both null case explicitly 
  } else if (a === null || b === null) {
    return; // Handle either null case
  }
  // ...
}
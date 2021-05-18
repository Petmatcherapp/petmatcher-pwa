// General
export function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Validation
export function checkOnlyWhiteSpace(value) {
  if (value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

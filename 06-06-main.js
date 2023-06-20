function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return false;
  if (n < 10) return true;
  if (n >= 10 && n <= 99) {
    if (n % 10 === Math.trunc(n / 10)) return true;
  }
  return n % 10 === Math.trunc(n / 100);
}
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(9));

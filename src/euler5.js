function smallestDivisible(limit) {
  var n = 1;

  function largestPower(n, limit) {
    var p,
      e = 2,
      largest = n;
    while ((p = Math.pow(n, e)) <= limit) {
      largest = p;
      e += 1;
    }
    return largest;
  }

  function isPrime(n) {
    var limit = Math.ceil(Math.sqrt(n));
    for (var i = 3; i <= limit; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (var j = 3; j <= limit; j += 2) {
    if (isPrime(j)) {
      // console.log(j);
      n *= largestPower(j, limit);
      // console.log(n)
    }
  }
  return n * largestPower(2, limit);
}
console.log(smallestDivisible(20));

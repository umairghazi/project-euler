function isPalindrome(num) {
  // var str = num.toString();
  // var re = /[\W_]/g;
  // var lowRegStr = str.toLowerCase().replace(re, '');
  // var reverseStr = lowRegStr.split('').reverse().join('');
  // return reverseStr === lowRegStr;
  var numAux = num;
  var reverseNum = 0;
  while (numAux > 0) {
    var rightDigit = Math.floor(numAux % 10);
    reverseNum = reverseNum * 10 + rightDigit;
    numAux = Math.floor(numAux / 10);
  }
  if (num === reverseNum) {
    return true;
  } else {
    return false;
  }
}

function largestPalindrome(digits) {
  var largestNum = 0;
  for (var i = 0; i < digits; i++) {
    largestNum = largestNum * 10 + 9;
  }
  console.log({
    largestNum
  });
  var someNum = Math.pow(10, digits - 1);
  console.log({
    someNum
  });
  var nearest90 = largestNum - someNum;

  console.log({ nearest90 });
  var collector = [];
  var result = {
    prod: 0
  };
  for (var k = nearest90; k <= largestNum; k++) {
    for (var j = nearest90; j <= largestNum; j++) {
      if (isPalindrome(k * j) && result.prod < k * j) {
        // collector.push({ k, j, prod: k * j })
        // result = (k*j);
        result = {
          k,
          j,
          prod: k * j
        };
      }
    }
  }
  // collector.sort((a, b) => a.prod > b.prod ? -1 : 1);

  return result;
}

console.log(largestPalindrome(5));

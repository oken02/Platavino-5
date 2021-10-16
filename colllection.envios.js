const mdArraySum = (arr) => {


  let suma = 0;
  for (const el of arr) {
    if (Array.isArray(el)) suma += mdArraySum(el);
    else suma += el;
  }
  return suma;


};

mdArraySum([1, 2, 3, 4]); //should return 10
mdArraySum([[2, 4], [1], [4, 2, 1]]); //should return 14
mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]]); //26

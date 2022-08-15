const mergeSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) return arr;
  const leftPart = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
  const rightPart = mergeSort(
    arr.slice(Math.round(arr.length / 2), arr.length)
  );

  return merge(leftPart, rightPart);
};

const merge = (leftArr, rightArr) => {
  const mergedSolution = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const smallNumberArr = leftArr[0] > rightArr[0] ? rightArr : leftArr;
    const smallNumber = smallNumberArr.shift();
    mergedSolution.push(smallNumber);
  }
  return [...mergedSolution, ...rightArr, ...leftArr];
};

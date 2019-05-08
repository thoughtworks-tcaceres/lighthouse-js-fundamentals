function merge(arr1, arr2) {
  var newArr = [...arr1, ...arr2];
  var temp;

  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
}

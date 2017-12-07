function insertDash(num) {
    var arr = num.toString().split('');
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] % 2 && arr[x - 1] % 2) arr.splice(x, 0, '-');
    }
    return arr.join('');
 }
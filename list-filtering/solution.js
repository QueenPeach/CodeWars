function filter_list(arr) {
    return arr.filter(function(item) {
      return typeof(item) == 'number';   
    });
  }
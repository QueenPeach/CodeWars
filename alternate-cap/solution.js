function capitalize(s){
    var arr = ['', ''];
   s.split('').forEach((l, i) => {
     if (i % 2 === 0) {
       arr[0] += l.toUpperCase();
       arr[1] += l;
     } else {
       arr[0] += l;
       arr[1] += l.toUpperCase();
     }
   });
   return arr;
 };
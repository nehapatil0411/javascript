function number(n) {
    if (n >= 1) {
      document.write(n+ " ");
      number(n - 1); 
    }
  }
  let n = 5; 
  number(n);
  




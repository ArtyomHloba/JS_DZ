function counter(number) {
    let count = 0;
  
    function inc() {
      return count += number;
    }
  
    return inc;
  }
  
  const count1 = counter(5);
  console.log(count1());
  console.log(count1());
  console.log(count1());
  console.log(count1());
  
  function counter(n, e) {
    let count = n;
  
    function inc() {
      return count += e;
    }
  
    return inc;
  }
  
  const count1 = counter(+prompt("Введіть початкове число"), +prompt("введіть крок лічильник"));
  console.log(count1());
  console.log(count1());
  console.log(count1());
  console.log(count1());





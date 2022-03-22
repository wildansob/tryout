function compare(a, b) {
  let panjangA = a.length;
  let panjangB = b.length;
  let stringA = a;
  let stringB = b;

  if (panjangA === panjangB && stringA === stringB) {
    return true;
  } else {
    return false;
  }
}
console.log(compare('aaz', 'zaa'));

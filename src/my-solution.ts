function ParseArgs() {
  console.log(parseInt(process.argv
    .filter(val => !isNaN(parseInt(val)))
    .map((val) => num2bin(val))
    .reduce((prev, val) => add(prev, val), [])
    .join('')
  , 2));
}

export function halfAdder(a, b) {
  return { s: a ^ b, c: a & b }
}

export function fullAdder(a, b, c) {
  let fir = halfAdder(a, b);
  let sec = halfAdder(c, fir.s);
  return { s: sec.s, c: sec.c | fir.c };
}

function add(a: number[], b: number[]) {

  // function* idMaker(){
  //   var index = 0;
  //   while(index < 3)
  //     yield index++;
  // }

  // var gen = idMaker();
  //consider generator
  //same bits length
  if (a.length !== b.length) {
    if (a.length > b.length)
      b = Array.apply(null, Array(a.length - b.length)).map(() => 0).concat(b);
    else
      a = Array.apply(null, Array(b.length - a.length)).map(() => 0).concat(a);
  }

  let tes = a.map((e, i) => [e, b[i]]).reverse();
  let temp = [];
  let result = [];
  if (tes.length !== 0) {
    temp.push(halfAdder.apply(this, tes[0]));
    for (var index = 1; index < tes.length; index++) {
      temp.push(fullAdder.apply(this, tes[index].concat(temp[index - 1].c)));
    }
  }
  result = temp.map(val => val.s);
  if (temp[temp.length - 1].c === 1)
    result.push(1);
  return result.reverse();
}

function num2bin(num: number): number[] {
  return (num >>> 0).toString(2).split('').map(x => parseInt(x));
}


ParseArgs();
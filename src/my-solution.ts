 
interface AdderResult {
  s: number;
  c: number;
}
require("readline").createInterface(process.stdin, 0).on("line", function (line) {
  //lib
  let arrLength = (arr: any[]) => arr.length;

  (function pls(a) {
    /**
     * halfAdder circut
    * @param {number} firstBit - A string param. 
    * @param {number} secondBit - An optional param 
    * @return {AdderResult} This is the result
    */
    // let halfAdder = (firstBit: number, secondBit: number): AdderResult => ({ s: firstBit ^ secondBit, c: firstBit & secondBit });
    /**
    * fullAdder circut
   * @param {number} firstBit - A string param. 
   * @param {number} secondBit - An optional param
   * @param {number} carryIn - An optional param  
   * @return {AdderResult} This is the result
   */
    // let fullAdder = (firstBit: number, secondBit: number, carryIn: number): AdderResult => {
    //   let firstPart = halfAdder(firstBit, secondBit);
    //   let secondPart = halfAdder(carryIn, firstPart.s);
    //   return { s: secondPart.s, c: secondPart.c | firstPart.c };
    // };
    

    // function add(a: number[], b: number[]) {
    //   if (a.length !== b.length)
    //     (a.length > b.length) ? b = grow(a, b) : a = grow(b, a);

    //   let tes = a.map((e, i) => [e, b[i]]).reverse();
    //   let temp = [];
    //   let result = [];
    //   if (tes.length !== 0) {
    //     temp.push(halfAdder.apply(this, tes[0]));
    //     for (var index = 1; index < tes.length; index++) {
    //       temp.push(fullAdder.apply(this, tes[index].concat(temp[index - 1].c)));
    //     }
    //   }
    //   result = temp.map(val => val.s);
    //   if (temp[temp.length - 1].c === 1)
    //     result.push(1);
    //   return result.reverse();
    // }

    //v1
    // console.log(parseInt(a
    //   .filter(val => !isNaN(~~val))
    //   .map((val) => (val >>> 0).toString(2).split('').map(x => ~~x))
    //   .reduce((prev, val) => binarySum(prev, val), [])
    //   .join('')
    //   , 2));
    let size = 0;

    let rpa = function* (a: number[][]): IterableIterator<AdderResult> {
      let p: AdderResult = { s: 0, c: 0 };
      for (var e of a) {
        p = ((a, b, c) => ({ c: ((a ^ b) & c) | (a & b), s: ((a ^ b) ^ c) })).apply(this, e.concat(p.c))
        yield p;
      }
      p.s = p.c;
      yield p;
    }

    function binarySum(a: number[], b: number[]) {
      let grow = (f: any[], s: any[]) => Array.apply(0, Array(arrLength(f) - arrLength(s))).fill(0).concat(s);
      if (arrLength(a) !== arrLength(b))
        (arrLength(a) > arrLength(b)) ? b = grow(a, b) : a = grow(b, a);
      let r: number[] = [];
      for (let x of rpa(a.map((e, i) => [e, b[i]]).reverse()))
        r.push(x.s);
      return r.reverse();
    }
    console.log(parseInt(a
      .map((val) => (~~val).toString(2).split('').map(x => ~~x))
      .reduce((prev, val) => binarySum(prev, val), [])
      .join('')
      , 2));
  })(line.split(' '))
});
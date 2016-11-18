require("readline").createInterface(process.stdin, 0).on("line", function (line) {
    let arrLength = (arr) => arr.length;
    (function pls(a) {
        let size = 0;
        let rpa = function* (a) {
            let p = { s: 0, c: 0 };
            for (var e of a) {
                p = ((a, b, c) => ({ c: ((a ^ b) & c) | (a & b), s: ((a ^ b) ^ c) })).apply(this, e.concat(p.c));
                yield p;
            }
            p.s = p.c;
            yield p;
        };
        function binarySum(a, b) {
            let grow = (f, s) => Array.apply(0, Array(arrLength(f) - arrLength(s))).fill(0).concat(s);
            if (arrLength(a) !== arrLength(b))
                (arrLength(a) > arrLength(b)) ? b = grow(a, b) : a = grow(b, a);
            let r = [];
            for (let x of rpa(a.map((e, i) => [e, b[i]]).reverse()))
                r.push(x.s);
            return r.reverse();
        }
        console.log(parseInt(a
            .map((val) => (~~val).toString(2).split('').map(x => ~~x))
            .reduce((prev, val) => binarySum(prev, val), [])
            .join(''), 2));
    })(line.split(' '));
});
//# sourceMappingURL=my-solution.js.map
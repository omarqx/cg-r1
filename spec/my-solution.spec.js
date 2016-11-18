"use strict";
const my_solution_1 = require('../src/my-solution');
describe("golf round 1 tests", function () {
    it("half adder", function () {
        expect(my_solution_1.halfAdder(0, 0)).toEqual({ s: 0, c: 0 });
        expect(my_solution_1.halfAdder(0, 1)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.halfAdder(1, 0)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.halfAdder(1, 1)).toEqual({ s: 0, c: 1 });
    });
    it("full adder", function () {
        expect(my_solution_1.fullAdder(0, 0, 0)).toEqual({ s: 0, c: 0 });
        expect(my_solution_1.fullAdder(0, 0, 1)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(0, 1, 0)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(0, 1, 1)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 0, 0)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(1, 0, 1)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 1, 0)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 1, 1)).toEqual({ s: 1, c: 1 });
    });
    it("full adder", function () {
        expect(my_solution_1.fullAdder(0, 0, 0)).toEqual({ s: 0, c: 0 });
        expect(my_solution_1.fullAdder(0, 0, 1)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(0, 1, 0)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(0, 1, 1)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 0, 0)).toEqual({ s: 1, c: 0 });
        expect(my_solution_1.fullAdder(1, 0, 1)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 1, 0)).toEqual({ s: 0, c: 1 });
        expect(my_solution_1.fullAdder(1, 1, 1)).toEqual({ s: 1, c: 1 });
    });
});
//# sourceMappingURL=my-solution.spec.js.map